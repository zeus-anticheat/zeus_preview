import type { LanguageCode } from "./languages";

export type MinecraftIconName =
  | "sword"
  | "pickaxe"
  | "heart"
  | "creeper"
  | "diamond"
  | "grass"
  | "shield"
  | "potion"
  | "star"
  | "block";

export type FeatureCardContent = {
  id: string;
  icon: MinecraftIconName;
  iconColor: string;
  title: string;
  body: string;
  points: string[];
};

export type AudienceCardContent = {
  id: string;
  icon: MinecraftIconName;
  iconColor: string;
  title: string;
  body: string;
  points: string[];
};

export type WorkflowStepContent = {
  id: string;
  title: string;
  body: string;
};

export type ProtectionModeContent = {
  id: string;
  icon: MinecraftIconName;
  iconColor: string;
  title: string;
  body: string;
  points: string[];
};

export type OperationsPanelContent = {
  id: string;
  icon: MinecraftIconName;
  title: string;
  body: string;
  items: string[];
};

export type HomeContent = {
  nav: {
    home: string;
    features: string;
    docs: string;
    contributors: string;
    evaluation: string;
    github: string;
    discord: string;
  };
  freeTrialBanner: {
    badge: string;
    highlight: string;
    text: string;
    cta: string;
  };
  hero: {
    badge: string;
    titlePrefix: string;
    titleAccent: string;
    titleSuffix: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  audiences: {
    heading: string;
    body: string;
    cards: AudienceCardContent[];
  };
  features: {
    heading: string;
    body: string;
    cards: FeatureCardContent[];
    workflow: {
      heading: string;
      body: string;
      steps: WorkflowStepContent[];
    };
  };
  protectionModes: {
    heading: string;
    body: string;
    modes: ProtectionModeContent[];
  };
  operationsConsole: {
    badge: string;
    heading: string;
    body: string;
    panels: OperationsPanelContent[];
    statusLabels: string[];
  };
  footer: {
    tagline: string;
    ecosystem: string;
    business: string;
    links: {
      gateway: string;
      fabric: string;
      backend: string;
      dashboard: string;
      premium: string;
      enterprise: string;
      terms: string;
      privacy: string;
      contributors: string;
    };
  };
};

export const HOME_CONTENT: Record<LanguageCode, HomeContent> = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      docs: "Docs",
      contributors: "Contributors",
      evaluation: "See workflows",
      github: "GitHub",
      discord: "Discord",
    },
    freeTrialBanner: {
      badge: "Free 1-Month Trial",
      highlight: "50+ CCU Servers:",
      text: "Get 1 month of full platform access and onboarding support for your server.",
      cta: "Apply on Discord",
    },
    hero: {
      badge: "Minecraft server protection",
      titlePrefix: "Protect Minecraft servers",
      titleAccent: "with clearer evidence",
      titleSuffix: "and safer review workflows",
      body:
        "Zeus helps server teams protect gameplay, surface suspicious behavior, and review evidence through public-safe workflows that do not expose private detection details.",
      primaryCta: "Explore features",
      secondaryCta: "Read public docs",
    },
    audiences: {
      heading: "Find the value path that fits your team",
      body:
        "Zeus explains its public value in the language each visitor needs: daily operations, developer integration, and evaluation confidence.",
      cards: [
        {
          id: "serverOwners",
          icon: "shield",
          iconColor: "#22d3ee",
          title: "Server Owners and Admins",
          body:
            "Protect gameplay quality, surface risk sooner, and review evidence without needing private detection knowledge.",
          points: ["Protect fair play", "Review suspicious behavior", "Tune workflows safely"],
        },
        {
          id: "developers",
          icon: "grass",
          iconColor: "#10b981",
          title: "Developers",
          body:
            "Explore public integration concepts, source paths, and Minecraft ecosystem support without exposing sensitive internals.",
          points: ["Collector concepts", "GitHub source path", "Minecraft ecosystem"],
        },
        {
          id: "decisionMakers",
          icon: "diamond",
          iconColor: "#8b5cf6",
          title: "Decision Makers",
          body:
            "Understand operational clarity, risk reduction, and the public material needed to evaluate Zeus responsibly.",
          points: ["Operational clarity", "Risk-aware review", "Evaluation-ready story"],
        },
      ],
    },
    features: {
      heading: "Public feature groups",
      body:
        "Zeus combines server protection, real-time visibility, ML-assisted review, profile management, developer-friendly collectors, and operational workflows into one public-safe story.",
      cards: [
        {
          id: "serverProtection",
          icon: "shield",
          iconColor: "#f89820",
          title: "Server Protection",
          body:
            "Helps teams protect gameplay quality by surfacing behavior that deserves review while keeping private detection mechanics internal.",
          points: [
            "Minecraft server focus",
            "Gameplay quality protection",
            "Evidence-aware workflows",
          ],
        },
        {
          id: "realTimeVisibility",
          icon: "creeper",
          iconColor: "#10b981",
          title: "Real-Time Visibility",
          body:
            "Gives operators a clearer view of suspicious activity, review status, and workflow priorities while a server is active.",
          points: [
            "Live operational view",
            "Review status context",
            "Readable behavior categories",
          ],
        },
        {
          id: "mlAssistedReview",
          icon: "sword",
          iconColor: "#dea584",
          title: "ML-Assisted Review",
          body:
            "Supports review and prioritization of suspicious behavior categories without publishing model internals or guarantees.",
          points: [
            "Review support",
            "Prioritization help",
            "No private model details",
          ],
        },
        {
          id: "profileManagement",
          icon: "potion",
          iconColor: "#d2a8ff",
          title: "Profile Management",
          body:
            "Frames model and protection profiles as operator workflows for understanding state, evaluation, and safe tuning decisions.",
          points: [
            "Profile state visibility",
            "Evaluation-oriented language",
            "Safe tuning concepts",
          ],
        },
        {
          id: "developerCollectors",
          icon: "pickaxe",
          iconColor: "#f89820",
          title: "Developer-Friendly Collectors",
          body:
            "Explains public collector and plugin concepts for developers who want to inspect, contribute, or integrate safely.",
          points: [
            "Public integration concepts",
            "Source path clarity",
            "Minecraft plugin ecosystem",
          ],
        },
        {
          id: "operationsWorkflows",
          icon: "diamond",
          iconColor: "#22d3ee",
          title: "Operations Workflows",
          body:
            "Connects evidence review, profile choices, and next actions into workflows a server team can understand and evaluate.",
          points: [
            "Evidence review",
            "Action planning",
            "Evaluation-ready flow",
          ],
        },
      ],
      workflow: {
        heading: "From signal to decision",
        body:
          "The public workflow stays simple: collect safe server signals, analyze behavior categories, review evidence, and tune operations.",
        steps: [
          {
            id: "collect",
            title: "Collect",
            body: "Server-side collectors provide public-safe context for review workflows.",
          },
          {
            id: "analyze",
            title: "Analyze",
            body: "Behavior categories help prioritize what operators should inspect.",
          },
          {
            id: "review",
            title: "Review",
            body: "Evidence-focused views help teams understand suspicious activity.",
          },
          {
            id: "tune",
            title: "Tune",
            body: "Profiles and workflows can be adjusted at an operator level.",
          },
        ],
      },
    },
    protectionModes: {
      heading: "Protection modes for real server teams",
      body:
        "Zeus presents protection choices as operator workflows. Teams can understand how carefully to watch, review, and tune without seeing private detection mechanics.",
      modes: [
        {
          id: "guidedReview",
          icon: "shield",
          iconColor: "#22d3ee",
          title: "Guided Review",
          body:
            "A steady mode for teams that want clear evidence and review context before taking action.",
          points: ["Evidence-first", "Operator-readable", "Public-safe context"],
        },
        {
          id: "balancedProtection",
          icon: "diamond",
          iconColor: "#10b981",
          title: "Balanced Protection",
          body:
            "A day-to-day mode that keeps protection, visibility, and operational clarity in balance.",
          points: ["Daily operations", "Readable priorities", "Team-friendly review"],
        },
        {
          id: "elevatedWatch",
          icon: "star",
          iconColor: "#f59e0b",
          title: "Elevated Watch",
          body:
            "A closer-review mode for busy events, competitive sessions, or moments that need more operator attention.",
          points: ["Closer observation", "Event-ready", "No private logic exposed"],
        },
      ],
    },
    operationsConsole: {
      badge: "Operations console",
      heading: "Review evidence and manage profiles in one workflow",
      body:
        "The public preview focuses on what operators need to understand: review queues, evidence summaries, profile state, and safe next actions.",
      panels: [
        {
          id: "evidenceReview",
          icon: "sword",
          title: "Evidence Review",
          body:
            "See which behavior needs attention, why it matters, and what the team should review next.",
          items: ["Review queue", "Behavior category context", "Team action notes"],
        },
        {
          id: "profileManagement",
          icon: "potion",
          title: "Profile Management",
          body:
            "Understand which protection profile is active and how it fits the server's current operating mode.",
          items: ["Active profile state", "Evaluation notes", "Safe tuning workflow"],
        },
      ],
      statusLabels: ["Ready for review", "Profile active", "Workflow clear"],
    },
    footer: {
      tagline:
        "A public preview for understanding Zeus Platform features, workflows, and safe integration paths.",
      ecosystem: "Ecosystem",
      business: "Business",
      links: {
        gateway: "Zeus Gateway (Paper)",
        fabric: "Zeus Fabric",
        backend: "Rust Backend Setup",
        dashboard: "Dashboard Docs",
        premium: "Premium Features",
        enterprise: "Enterprise Support",
        terms: "Terms of Service",
        privacy: "Privacy Policy",
        contributors: "Contributors",
      },
    },
  },
  vi: {
    nav: {
      home: "Trang chủ",
      features: "Tính năng",
      docs: "Tài liệu",
      contributors: "Đóng góp",
      evaluation: "Xem workflow",
      github: "GitHub",
      discord: "Discord",
    },
    freeTrialBanner: {
      badge: "Dùng thử 1 tháng",
      highlight: "Máy chủ từ 50 CCU:",
      text: "Nhận 1 tháng trải nghiệm miễn phí toàn bộ nền tảng kèm hỗ trợ kỹ thuật trực tiếp.",
      cta: "Đăng ký qua Discord",
    },
    hero: {
      badge: "Bảo vệ máy chủ Minecraft",
      titlePrefix: "Bảo vệ máy chủ Minecraft",
      titleAccent: "với bằng chứng rõ hơn",
      titleSuffix: "và workflow đánh giá an toàn",
      body:
        "Zeus giúp đội ngũ máy chủ bảo vệ gameplay, nhận diện hành vi đáng nghi, và xem bằng chứng qua workflow công khai an toàn không lộ chi tiết phát hiện riêng.",
      primaryCta: "Xem tính năng",
      secondaryCta: "Đọc tài liệu công khai",
    },
    audiences: {
      heading: "Tìm lợi ích phù hợp với đội ngũ của bạn",
      body:
        "Zeus trình bày giá trị công khai theo cách mỗi nhóm người đọc cần: vận hành hàng ngày, tích hợp cho developer, và đánh giá sản phẩm.",
      cards: [
        {
          id: "serverOwners",
          icon: "shield",
          iconColor: "#22d3ee",
          title: "Chủ máy chủ và admin",
          body:
            "Bảo vệ chất lượng gameplay, thấy rủi ro sớm hơn, và xem bằng chứng mà không cần biết cơ chế phát hiện riêng.",
          points: ["Bảo vệ fair play", "Xem hành vi đáng nghi", "Điều chỉnh workflow an toàn"],
        },
        {
          id: "developers",
          icon: "grass",
          iconColor: "#10b981",
          title: "Developers",
          body:
            "Khám phá khái niệm tích hợp công khai, đường dẫn source, và hệ sinh thái Minecraft mà không lộ chi tiết nhạy cảm.",
          points: ["Khái niệm collector", "Đường dẫn GitHub", "Hệ sinh thái Minecraft"],
        },
        {
          id: "decisionMakers",
          icon: "diamond",
          iconColor: "#8b5cf6",
          title: "Người ra quyết định",
          body:
            "Hiểu sự rõ ràng trong vận hành, giảm rủi ro, và tài liệu công khai cần thiết để đánh giá Zeus có trách nhiệm.",
          points: ["Rõ ràng vận hành", "Đánh giá rủi ro", "Sẵn sàng để xem xét"],
        },
      ],
    },
    features: {
      heading: "Nhóm tính năng công khai",
      body:
        "Zeus kết hợp bảo vệ máy chủ, quan sát thời gian thực, đánh giá hỗ trợ bởi ML, quản lý profile, collector thân thiện với developer, và workflow vận hành.",
      cards: [
        {
          id: "serverProtection",
          icon: "shield",
          iconColor: "#f89820",
          title: "Bảo vệ máy chủ",
          body:
            "Giúp đội ngũ bảo vệ chất lượng gameplay bằng cách làm rõ hành vi cần xem xét trong khi giữ kín cơ chế phát hiện riêng.",
          points: [
            "Tập trung vào Minecraft",
            "Bảo vệ chất lượng gameplay",
            "Workflow có bằng chứng",
          ],
        },
        {
          id: "realTimeVisibility",
          icon: "creeper",
          iconColor: "#10b981",
          title: "Quan sát thời gian thực",
          body:
            "Cho operator thấy rõ hoạt động đáng nghi, trạng thái review, và ưu tiên workflow khi máy chủ đang chạy.",
          points: [
            "Góc nhìn vận hành live",
            "Ngữ cảnh trạng thái review",
            "Nhóm hành vi dễ đọc",
          ],
        },
        {
          id: "mlAssistedReview",
          icon: "sword",
          iconColor: "#dea584",
          title: "Review hỗ trợ bởi ML",
          body:
            "Hỗ trợ review và ưu tiên các nhóm hành vi đáng nghi mà không công khai chi tiết mô hình hay đảm bảo tuyệt đối.",
          points: [
            "Hỗ trợ review",
            "Giúp ưu tiên",
            "Không lộ chi tiết mô hình",
          ],
        },
        {
          id: "profileManagement",
          icon: "potion",
          iconColor: "#d2a8ff",
          title: "Quản lý profile",
          body:
            "Trình bày model và protection profile như workflow vận hành để hiểu trạng thái, đánh giá, và điều chỉnh an toàn.",
          points: [
            "Trạng thái profile",
            "Ngôn ngữ để đánh giá",
            "Khái niệm tuning an toàn",
          ],
        },
        {
          id: "developerCollectors",
          icon: "pickaxe",
          iconColor: "#f89820",
          title: "Collector thân thiện với developer",
          body:
            "Giải thích khái niệm collector và plugin công khai cho developer muốn xem source, đóng góp, hoặc tích hợp an toàn.",
          points: [
            "Khái niệm tích hợp công khai",
            "Đường dẫn source rõ ràng",
            "Hệ sinh thái plugin Minecraft",
          ],
        },
        {
          id: "operationsWorkflows",
          icon: "diamond",
          iconColor: "#22d3ee",
          title: "Workflow vận hành",
          body:
            "Kết nối review bằng chứng, lựa chọn profile, và hành động tiếp theo thành workflow đội ngũ máy chủ có thể hiểu.",
          points: [
            "Review bằng chứng",
            "Lập kế hoạch hành động",
            "Sẵn sàng để đánh giá",
          ],
        },
      ],
      workflow: {
        heading: "Từ tín hiệu đến quyết định",
        body:
          "Workflow công khai giữ đơn giản: thu thập tín hiệu an toàn, phân tích nhóm hành vi, xem bằng chứng, và điều chỉnh vận hành.",
        steps: [
          {
            id: "collect",
            title: "Thu thập",
            body: "Collector phía máy chủ cung cấp ngữ cảnh an toàn cho workflow review.",
          },
          {
            id: "analyze",
            title: "Phân tích",
            body: "Nhóm hành vi giúp ưu tiên nội dung operator cần xem.",
          },
          {
            id: "review",
            title: "Review",
            body: "Góc nhìn dựa trên bằng chứng giúp đội ngũ hiểu hoạt động đáng nghi.",
          },
          {
            id: "tune",
            title: "Điều chỉnh",
            body: "Profile và workflow có thể được điều chỉnh ở mức vận hành.",
          },
        ],
      },
    },
    protectionModes: {
      heading: "Chế độ bảo vệ cho đội ngũ máy chủ",
      body:
        "Zeus trình bày lựa chọn bảo vệ như workflow vận hành. Đội ngũ có thể hiểu cách theo dõi, review, và điều chỉnh mà không thấy cơ chế riêng.",
      modes: [
        {
          id: "guidedReview",
          icon: "shield",
          iconColor: "#22d3ee",
          title: "Review có hướng dẫn",
          body:
            "Chế độ ổn định cho đội ngũ muốn có bằng chứng rõ và ngữ cảnh review trước khi hành động.",
          points: ["Ưu tiên bằng chứng", "Dễ operator đọc", "Ngữ cảnh công khai an toàn"],
        },
        {
          id: "balancedProtection",
          icon: "diamond",
          iconColor: "#10b981",
          title: "Bảo vệ cân bằng",
          body:
            "Chế độ hằng ngày giữ cân bằng giữa bảo vệ, quan sát, và sự rõ ràng trong vận hành.",
          points: ["Vận hành hằng ngày", "Ưu tiên dễ đọc", "Phù hợp cho đội ngũ"],
        },
        {
          id: "elevatedWatch",
          icon: "star",
          iconColor: "#f59e0b",
          title: "Theo dõi nâng cao",
          body:
            "Chế độ review kỹ hơn cho sự kiện đông người, phiên cạnh tranh, hoặc lúc cần thêm sự chú ý của operator.",
          points: ["Quan sát kỹ hơn", "Sẵn sàng cho sự kiện", "Không lộ logic riêng"],
        },
      ],
    },
    operationsConsole: {
      badge: "Bảng điều khiển vận hành",
      heading: "Review bằng chứng và quản lý profile trong một workflow",
      body:
        "Preview công khai tập trung vào điều operator cần hiểu: hàng đợi review, tóm tắt bằng chứng, trạng thái profile, và hành động tiếp theo an toàn.",
      panels: [
        {
          id: "evidenceReview",
          icon: "sword",
          title: "Review bằng chứng",
          body:
            "Xem hành vi nào cần chú ý, vì sao nó quan trọng, và đội ngũ nên review điều gì tiếp theo.",
          items: ["Hàng đợi review", "Ngữ cảnh nhóm hành vi", "Ghi chú hành động"],
        },
        {
          id: "profileManagement",
          icon: "potion",
          title: "Quản lý profile",
          body:
            "Hiểu profile bảo vệ nào đang hoạt động và nó phù hợp với trạng thái vận hành hiện tại ra sao.",
          items: ["Trạng thái profile", "Ghi chú đánh giá", "Workflow tuning an toàn"],
        },
      ],
      statusLabels: ["Sẵn sàng review", "Profile đang hoạt động", "Workflow rõ ràng"],
    },
    footer: {
      tagline:
        "Trang preview công khai để hiểu tính năng, workflow, và cách tích hợp an toàn của Zeus Platform.",
      ecosystem: "Hệ sinh thái",
      business: "Kinh doanh",
      links: {
        gateway: "Zeus Gateway (Paper)",
        fabric: "Zeus Fabric",
        backend: "Cài đặt Rust Backend",
        dashboard: "Tài liệu Dashboard",
        premium: "Tính năng cao cấp",
        enterprise: "Hỗ trợ doanh nghiệp",
        terms: "Điều khoản dịch vụ",
        privacy: "Chính sách bảo mật",
        contributors: "Người đóng góp",
      },
    },
  },
};
