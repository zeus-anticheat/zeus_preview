import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { LAB_CONTENT, type LanguageCode } from "../content";

type LabProps = {
  language: LanguageCode;
};

type CardContent = {
  speedLabel: string;
  startReplay: string;
  etaPrefix: string;
  packetsUnit: string;
};

type RecordingInfo = {
  file_name: string;
  player_name: string;
  player_uid: string;
  frame_count: number;
  start_ts_ms: number;
  size_bytes: number;
  real_time_ms: number;
};

type RplSession = {
  id: string;
  file_name: string;
  player_name: string;
  player_uid: string;
  total_frames: number;
  current_frame: number;
  speed: number;
  state: string;
  duration_ms: number;
};

const SPEED_OPTIONS = [1, 2, 5, 10, 20, 50] as const;

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatMs(ms: number): string {
  const totalS = ms / 1000;
  const m = Math.floor(totalS / 60);
  const s = Math.floor(totalS % 60);
  return `${m}m ${s}s`;
}

function formatDate(unixMs: number): string {
  return new Date(unixMs).toLocaleString();
}

const Lab: React.FC<LabProps> = ({ language }) => {
  const c = LAB_CONTENT[language];
  const navigate = useNavigate();

  const [recordings, setRecordings] = useState<RecordingInfo[]>([]);
  const [sessions, setSessions] = useState<Map<string, RplSession>>(new Map());
  const [loadingRecs, setLoadingRecs] = useState(true);

  const fetchRecordings = useCallback(async () => {
    setLoadingRecs(true);
    try {
      const res = await fetch("/api/replay/recordings");
      if (res.ok) {
        const data = await res.json();
        setRecordings(data.recordings || []);
      }
    } catch {
      // silently fail
    } finally {
      setLoadingRecs(false);
    }
  }, []);

  useEffect(() => {
    fetchRecordings();
  }, [fetchRecordings]);

  const startReplay = useCallback(
    async (rec: RecordingInfo, speed: number) => {
      try {
        const res = await fetch("/api/replay/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ file_name: rec.file_name, speed }),
        });
        if (res.ok) {
          const data = await res.json();
          navigate(`/lab/replay/${data.session_id}`);
          // Auto-add a pending session
          setSessions((prev) => {
            const next = new Map(prev);
            next.set(data.session_id, {
              id: data.session_id,
              file_name: rec.file_name,
              player_name: rec.player_name,
              player_uid: rec.player_uid,
              total_frames: rec.frame_count,
              current_frame: 0,
              speed,
              state: "loading",
              duration_ms: 0,
            });
            return next;
          });
        }
      } catch {
        // silently fail
      }
    },
    [navigate]
  );

  // SSE for session updates
  useEffect(() => {
    const es = new EventSource("/api/replay/sessions/stream");
    es.onmessage = (event) => {
      try {
        const session: RplSession = JSON.parse(event.data);
        setSessions((prev) => {
          const next = new Map(prev);
          next.set(session.id, session);
          return next;
        });
      } catch {
        // skip malformed events
      }
    };
    es.onerror = () => es.close();
    return () => es.close();
  }, []);

  const activeSessions = Array.from(sessions.values()).filter(
    (s) => s.state === "loading" || s.state === "running"
  );

  const completedSessions = Array.from(sessions.values()).filter(
    (s) => s.state === "finished"
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-cinzel font-bold text-text-main mb-4">
          {c.heading}
        </h1>
        <p className="text-text-sec text-lg max-w-2xl">{c.body}</p>
      </div>

      {/* Recordings */}
      <section className="mb-12">
        <h2 className="text-2xl font-cinzel font-bold text-text-main mb-6">
          {c.recordings.heading}
        </h2>
        {loadingRecs ? (
          <div className="text-text-sec text-sm animate-pulse">
            {c.recordings.loading}
          </div>
        ) : recordings.length === 0 ? (
          <div className="glass-card text-center text-text-sec p-6">
            {c.recordings.empty}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recordings.map((rec) => (
              <RecordingCard
                key={rec.file_name}
                recording={rec}
                onStart={startReplay}
                content={{
                  speedLabel: c.recordings.speed,
                  startReplay: c.recordings.startReplay,
                  etaPrefix: "ETA",
                  packetsUnit: language === "vi" ? "gói tin" : "packets",
                }}
              />
            ))}
          </div>
        )}
      </section>

      {/* Active Sessions */}
      {activeSessions.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-cinzel font-bold text-text-main mb-6">
            {c.sessions.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeSessions.map((session) => (
              <SessionCard
                key={session.id}
                session={session}
                onClick={() => navigate(`/lab/replay/${session.id}`)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Completed Sessions */}
      {completedSessions.length > 0 && (
        <section>
          <h2 className="text-2xl font-cinzel font-bold text-text-main mb-6">
            {c.sessions.status.completed}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 opacity-60">
            {completedSessions.map((session) => (
              <SessionCard
                key={session.id}
                session={session}
                onClick={() => navigate(`/lab/replay/${session.id}`)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

const RecordingCard: React.FC<{
  recording: RecordingInfo;
  onStart: (rec: RecordingInfo, speed: number) => void;
  content: CardContent;
}> = ({ recording, onStart, content }) => {
  const [speed, setSpeed] = useState(5);
  const estimatedSpeedMs = recording.real_time_ms / speed;

  return (
    <div className="glass-card !p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-text-main font-semibold text-sm truncate max-w-[180px]">
          {recording.file_name}
        </span>
        <span className="text-text-sec text-xs">{formatBytes(recording.size_bytes)}</span>
      </div>
      <div className="text-text-sec text-xs">
        {recording.player_name} — {recording.frame_count} {content.packetsUnit} — {formatMs(recording.real_time_ms)}
      </div>
      <div className="text-text-sec text-xs">{formatDate(recording.start_ts_ms)}</div>
      <div className="flex items-center gap-2 mt-2">
        <label className="text-text-sec text-xs">{content.speedLabel}:</label>
        <select
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="bg-card-bg border border-card-border text-text-main text-xs rounded px-2 py-1 focus:outline-none focus:border-accent"
        >
          {SPEED_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}x
            </option>
          ))}
        </select>
        <span className="text-text-sec text-xs ml-1">{content.etaPrefix}: {formatMs(Math.round(estimatedSpeedMs))}</span>
      </div>
      <button
        onClick={() => onStart(recording, speed)}
        className="mt-1 w-full bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent/50 transition-colors rounded-lg py-2 text-sm font-semibold cursor-pointer"
      >
        ▶ {content.startReplay}
      </button>
    </div>
  );
};

const SessionCard: React.FC<{
  session: RplSession;
  onClick: () => void;
}> = ({ session, onClick }) => {
  const progressPct =
    session.total_frames > 0
      ? Math.round((session.current_frame / session.total_frames) * 100)
      : 0;

  const stateColor =
    session.state === "running"
      ? "bg-green-500/10 text-green-400 border-green-500/30"
      : session.state === "finished"
        ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
        : "bg-gray-500/10 text-gray-400 border-gray-500/30";

  return (
    <div
      onClick={onClick}
      className="glass-card !p-5 flex flex-col gap-3 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <span className="text-text-main font-semibold text-sm">
          {session.player_name} — {session.file_name}
        </span>
        <span className={`text-xs font-mono px-2 py-0.5 rounded ${stateColor}`}>
          {session.state}
        </span>
      </div>
      <div className="text-text-sec text-xs">
        {session.speed}x &middot; {session.current_frame} / {session.total_frames}
      </div>
      <div className="w-full h-1.5 bg-card-border rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>
      <div className="flex justify-between text-text-sec text-xs">
        <span>Elapsed: {formatMs(session.duration_ms)}</span>
        {session.total_frames > 0 && (
          <span>ETA: {formatMs(Math.round((session.total_frames * 50) / session.speed))}</span>
        )}
      </div>
    </div>
  );
};

export default Lab;
