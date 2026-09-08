import type { LanguageCode } from "./languages";

export type LabContent = {
  navLabel: string;
  heading: string;
  body: string;
  recordings: {
    heading: string;
    empty: string;
    name: string;
    size: string;
    date: string;
    startReplay: string;
    speed: string;
    active: string;
    loading: string;
    error: string;
  };
  sessions: {
    heading: string;
    empty: string;
    sessionId: string;
    speed: string;
    progress: string;
    timeEstimate: {
      real: string;
      spedUp: string;
    };
    status: {
      pending: string;
      playing: string;
      paused: string;
      completed: string;
      error: string;
    };
  };
  viewer: {
    heading: string;
    minimap: string;
    timeline: string;
    flags: string;
    currentTick: string;
    speed: string;
    progress: string;
    tickInfo: {
      state: string;
      block: string;
      yaw: string;
      predicted: string;
      actual: string;
      offset: string;
    };
    noData: string;
    backToLab: string;
  };
};

export const LAB_CONTENT: Record<LanguageCode, LabContent> = {
  en: {
    navLabel: "Lab",
    heading: "Replay Lab",
    body: "Inspect .zrec recordings, replay player sessions, and review detection flags in a visual timeline.",
    recordings: {
      heading: "Recordings",
      empty: "No recordings found.",
      name: "Name",
      size: "Size",
      date: "Date",
      startReplay: "Start Replay",
      speed: "Speed",
      active: "Active Replays",
      loading: "Loading recordings...",
      error: "Failed to load recordings.",
    },
    sessions: {
      heading: "Active Sessions",
      empty: "No active replay sessions.",
      sessionId: "Session",
      speed: "Speed",
      progress: "Progress",
      timeEstimate: {
        real: "Real time",
        spedUp: "Sped up",
      },
      status: {
        pending: "Pending",
        playing: "Playing",
        paused: "Paused",
        completed: "Completed",
        error: "Error",
      },
    },
    viewer: {
      heading: "Replay Viewer",
      minimap: "Minimap",
      timeline: "Flag Timeline",
      flags: "Flags",
      currentTick: "Current Tick",
      speed: "Speed",
      progress: "Progress",
      tickInfo: {
        state: "State",
        block: "Block",
        yaw: "Yaw",
        predicted: "Predicted",
        actual: "Actual",
        offset: "Offset",
      },
      noData: "No replay data available.",
      backToLab: "Back to Lab",
    },
  },
  vi: {
    navLabel: "Phòng Lab",
    heading: "Phòng Lab Phát Lại",
    body: "Kiểm tra bản ghi .zrec, phát lại phiên người chơi, và xem cờ phát hiện theo dòng thời gian trực quan.",
    recordings: {
      heading: "Bản ghi",
      empty: "Không tìm thấy bản ghi nào.",
      name: "Tên",
      size: "Kích thước",
      date: "Ngày",
      startReplay: "Bắt đầu phát lại",
      speed: "Tốc độ",
      active: "Phát lại đang chạy",
      loading: "Đang tải bản ghi...",
      error: "Không tải được bản ghi.",
    },
    sessions: {
      heading: "Phiên đang hoạt động",
      empty: "Không có phiên phát lại nào đang chạy.",
      sessionId: "Phiên",
      speed: "Tốc độ",
      progress: "Tiến độ",
      timeEstimate: {
        real: "Thời gian thực",
        spedUp: "Thời gian tua nhanh",
      },
      status: {
        pending: "Đang chờ",
        playing: "Đang chạy",
        paused: "Tạm dừng",
        completed: "Hoàn thành",
        error: "Lỗi",
      },
    },
    viewer: {
      heading: "Trình xem phát lại",
      minimap: "Bản đồ nhỏ",
      timeline: "Dòng thời gian cờ",
      flags: "Cờ",
      currentTick: "Tick hiện tại",
      speed: "Tốc độ",
      progress: "Tiến độ",
      tickInfo: {
        state: "Trạng thái",
        block: "Khối",
        yaw: "Hướng",
        predicted: "Dự đoán",
        actual: "Thực tế",
        offset: "Độ lệch",
      },
      noData: "Không có dữ liệu phát lại.",
      backToLab: "Quay lại Phòng Lab",
    },
  },
};
