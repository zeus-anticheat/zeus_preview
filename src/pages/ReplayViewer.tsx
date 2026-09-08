import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LAB_CONTENT, type LanguageCode } from "../content";

type ViewerProps = {
  language: LanguageCode;
};

type Vec2 = { x: number; y: number };

type FlagData = {
  uid: string;
  model_kind: string;
  explanation: string | null;
  violation_score: number;
  timestamp: number;
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

const MINIMAP_SIZE = 300;

function formatMs(ms: number): string {
  const s = ms / 1000;
  const m = Math.floor(s / 60);
  const se = Math.floor(s % 60);
  return `${m}m ${se}s`;
}

const ReplayViewer: React.FC<ViewerProps> = ({ language }) => {
  const c = LAB_CONTENT[language];
  const { sessionId } = useParams<{ sessionId: string }>();
  const navigate = useNavigate();

  const [session, setSession] = useState<RplSession | null>(null);
  const [flags, setFlags] = useState<FlagData[]>([]);
  const trail: Vec2[] = [];

  // Fetch session info via SSE
  useEffect(() => {
    const es = new EventSource("/api/replay/sessions/stream");
    es.onmessage = (event) => {
      try {
        const s: RplSession = JSON.parse(event.data);
        if (s.id === sessionId) setSession(s);
      } catch {}
    };
    es.onerror = () => es.close();
    return () => es.close();
  }, [sessionId]);

  // Also poll GET /api/replay/sessions
  useEffect(() => {
    const poll = setInterval(async () => {
      try {
        const res = await fetch("/api/replay/sessions");
        if (res.ok) {
          const data = await res.json();
          const match = (data.sessions || []).find((s: RplSession) => s.id === sessionId);
          if (match) setSession(match);
        }
      } catch {}
    }, 1000);
    return () => clearInterval(poll);
  }, [sessionId]);

  // Poll violations for the replay player
  useEffect(() => {
    if (!session) return;
    const poll = setInterval(async () => {
      try {
        const res = await fetch(`/api/network/violations`);
        if (res.ok) {
          const data = await res.json();
          const playerFlags = (data.violations || [])
            .filter((v: FlagData) => v.uid === session.player_uid || v.uid === "__replay__" + session.player_uid)
            .filter((v: FlagData) => {
              const flagTs = v.timestamp || 0;
              const startTs = Date.now() - session.duration_ms;
              return flagTs > startTs;
            });
          setFlags((prev) => {
            const existing = new Set(prev.map((f) => f.timestamp));
            const newFlags = playerFlags.filter((f: FlagData) => !existing.has(f.timestamp));
            return [...prev, ...newFlags];
          });
        }
      } catch {}
    }, 2000);
    return () => clearInterval(poll);
  }, [session?.id]);

  const progressPct = session
    ? session.total_frames > 0
      ? Math.round((session.current_frame / session.total_frames) * 100)
      : 0
    : 0;

  if (!session) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 text-center">
        <div className="glass-card p-8 text-text-sec">{c.viewer.noData}</div>
        <button
          onClick={() => navigate("/lab")}
          className="mt-4 bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 px-4 py-2 rounded-lg text-sm cursor-pointer"
        >
          {c.viewer.backToLab}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate("/lab")}
          className="text-text-sec hover:text-text-main text-sm"
        >
          ← {c.viewer.backToLab}
        </button>
        <h1 className="text-2xl font-cinzel font-bold text-text-main">
          {c.viewer.heading}: {session.player_name}
        </h1>
        <span className="text-text-sec text-sm">{session.file_name}</span>
        <span className={`ml-auto text-xs px-3 py-1 rounded-full ${
          session.state === "running"
            ? "bg-green-500/10 text-green-400 border border-green-500/30"
            : session.state === "finished"
              ? "bg-blue-500/10 text-blue-400 border border-blue-500/30"
              : "bg-gray-500/10 text-gray-400 border border-gray-500/30"
        }`}>
          {session.state}
        </span>
      </div>

      {/* Minimap */}
      <section className="mb-8">
        <h2 className="text-lg font-cinzel font-bold text-text-main mb-4">{c.viewer.minimap}</h2>
        <div
          className="relative bg-[#020617] border border-card-border rounded-lg overflow-hidden mx-auto"
          style={{ width: MINIMAP_SIZE, height: MINIMAP_SIZE }}
        >
          {/* Grid */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`h${i}`}
              className="absolute bg-card-border opacity-20"
              style={{ left: 0, right: 0, top: `${i * 25}%`, height: 1 }}
            />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`v${i}`}
              className="absolute bg-card-border opacity-20"
              style={{ top: 0, bottom: 0, left: `${i * 25}%`, width: 1 }}
            />
          ))}
          {/* Trail */}
          {trail.map((pt, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-green-500/30 rounded-full"
              style={{ left: `${pt.x}%`, top: `${pt.y}%`, transform: "translate(-50%,-50%)" }}
            />
          ))}
          {/* Player dot */}
          {trail.length > 0 && (
            <div
              className="absolute w-3 h-3 bg-green-400 border-2 border-white rounded-full z-10"
              style={{
                left: `${trail[trail.length - 1].x}%`,
                top: `${trail[trail.length - 1].y}%`,
                transform: "translate(-50%,-50%)",
                boxShadow: "0 0 12px rgba(34,197,94,0.5)",
              }}
            />
          )}
          {/* Empty state */}
          {trail.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-text-sec text-xs">
              {session.state === "running" ? "Waiting for position data..." : "No position data"}
            </div>
          )}
        </div>
      </section>

      {/* Progress */}
      <section className="mb-8">
        <h2 className="text-lg font-cinzel font-bold text-text-main mb-4">{c.viewer.progress}</h2>
        <div className="glass-card !p-5">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-text-main font-mono">
              {session.current_frame} / {session.total_frames} frames
            </span>
            <span className="text-text-sec text-xs">{progressPct}%</span>
            <span className="text-text-sec text-xs ml-auto">
              {session.speed}x — ETA: {formatMs(Math.round((session.total_frames * 50) / session.speed))}
            </span>
          </div>
          <div className="w-full h-2 bg-card-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-green-400 rounded-full transition-all duration-200"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </section>

      {/* Flag Timeline */}
      <section>
        <h2 className="text-lg font-cinzel font-bold text-text-main mb-4">
          {c.viewer.flags} ({flags.length})
        </h2>
        {flags.length === 0 ? (
          <div className="glass-card text-center text-text-sec p-6">
            {session.state === "running" ? "No flags detected yet..." : "No flags — replay is clean!"}
          </div>
        ) : (
          <div className="glass-card divide-y divide-card-border">
            {flags.map((flag, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-white/[0.02]">
                <div>
                  <span className="text-red-400 font-mono font-bold text-sm">FLAG</span>
                  <span className="text-text-sec text-xs ml-3">
                    {flag.model_kind}
                  </span>
                  {flag.explanation && (
                    <span className="text-text-sec text-xs ml-2">— {flag.explanation}</span>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-red-400 font-mono font-bold">
                    {flag.violation_score.toFixed(3)}
                  </span>
                  <div className="text-text-sec text-xs">
                    {new Date(flag.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ReplayViewer;
