import React, { useEffect } from 'react';
import { type LanguageCode } from '../content';

type TermsProps = {
  language: LanguageCode;
};

const Terms: React.FC<TermsProps> = ({ language }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Simple placeholder content for terms of service
  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: September 8, 2026',
      intro: 'Welcome to Zeus Anti-Cheat Platform. By using our platform, plugins, and related services, you agree to these Terms of Service. Please read them carefully.',
      freeTrialNotice: {
        badge: 'Special Community Offer',
        title: 'Free 1-Month Trial Program (50+ CCU Servers)',
        content: 'Zeus currently offers a complimentary 1-month full evaluation license and dedicated onboarding support for Minecraft servers maintaining an average concurrent player count of 50 or more. Server administrators can apply directly via our official Discord community.',
      },
      sections: [
        {
          title: '1. Usage License',
          content: 'We grant you a non-exclusive, non-transferable license to use the Zeus Platform software on your servers. You may not distribute, reverse-engineer, decompile, or otherwise attempt to extract the source code or machine learning model architectures unless explicitly permitted.',
        },
        {
          title: '2. Responsibilities',
          content: 'You are responsible for ensuring that the use of Zeus on your servers complies with your local laws and the terms of service of your platform (e.g., Minecraft EULA). We do not accept liability for bans or actions taken by the automated enforcement systems.',
        },
        {
          title: '3. Platform Updates and Release Cycle',
          content: 'Software updates and stability releases are scheduled regularly over weekends, following review, integration testing, and issue triage sourced from the primary GitHub repositories and verified reports in our Discord community. Emergency hotfixes addressing critical security vulnerabilities or severe false-flag regressions may be deployed out-of-band with prior notice.',
        },
        {
          title: '4. Terms Modifications',
          content: 'We reserve the right to modify or replace these terms at any time. We will provide reasonable notice of any significant changes via our official communication channels. Continued use of the platform after changes constitutes your acceptance of the new terms.',
        },
        {
          title: '5. Limitation of Liability',
          content: 'In no event shall Zeus Anti-Cheat or its developers be liable for any damages arising out of the use or inability to use the platform, even if we have been notified of the possibility of such damage.',
        }
      ]
    },
    vi: {
      title: 'Điều khoản Dịch vụ',
      lastUpdated: 'Cập nhật lần cuối: 8 Tháng 9, 2026',
      intro: 'Chào mừng đến với Nền tảng Zeus Anti-Cheat. Khi sử dụng nền tảng, plugin và các dịch vụ liên quan của chúng tôi, bạn đồng ý với các Điều khoản Dịch vụ này. Vui lòng đọc kỹ.',
      freeTrialNotice: {
        badge: 'Chương trình Hỗ trợ Máy chủ',
        title: 'Chính sách Dùng thử Miễn phí 1 Tháng (Máy chủ từ 50 người chơi)',
        content: 'Zeus hiện đang có chính sách hỗ trợ cung cấp 1 tháng dùng thử miễn phí toàn bộ tính năng kèm hỗ trợ kỹ thuật trực tiếp dành cho các máy chủ có lượng người chơi trực tuyến đồng thời (CCU) từ 50 trở lên. Quản trị viên máy chủ có thể liên hệ đăng ký trải nghiệm thông qua Discord chính thức của chúng tôi.',
      },
      sections: [
        {
          title: '1. Giấy phép Sử dụng',
          content: 'Chúng tôi cấp cho bạn giấy phép không độc quyền, không thể chuyển nhượng để sử dụng phần mềm Zeus Platform trên máy chủ của bạn. Bạn không được phân phối, dịch ngược (reverse-engineer), hoặc cố gắng trích xuất mã nguồn hay kiến trúc mô hình máy học trừ khi được phép rõ ràng.',
        },
        {
          title: '2. Trách nhiệm',
          content: 'Bạn có trách nhiệm đảm bảo việc sử dụng Zeus trên máy chủ của mình tuân thủ luật pháp địa phương và điều khoản dịch vụ của nền tảng (ví dụ: Minecraft EULA). Chúng tôi không chịu trách nhiệm pháp lý cho các lệnh cấm hay hành động được thực hiện bởi hệ thống thực thi tự động.',
        },
        {
          title: '3. Lịch trình Cập nhật Hệ thống',
          content: 'Việc cập nhật và phát hành các bản vá lỗi thường được diễn ra định kỳ vào dịp cuối tuần, sau khi đã được đội ngũ phát triển tổng hợp, kiểm thử và duyệt cải thiện dựa trên các đóng góp từ repository GitHub chính cũng như phản hồi từ cộng đồng Discord. Các bản vá khẩn cấp (hotfix) đối với lỗ hổng bảo mật nghiêm trọng có thể được phát hành linh hoạt kèm thông báo.',
        },
        {
          title: '4. Thay đổi Điều khoản',
          content: 'Chúng tôi bảo lưu quyền sửa đổi hoặc thay thế các điều khoản này bất kỳ lúc nào. Chúng tôi sẽ thông báo hợp lý về bất kỳ thay đổi quan trọng nào qua các kênh liên lạc chính thức. Việc tiếp tục sử dụng nền tảng sau khi thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.',
        },
        {
          title: '5. Giới hạn Trách nhiệm',
          content: 'Trong mọi trường hợp, Zeus Anti-Cheat hoặc các nhà phát triển sẽ không chịu trách nhiệm cho bất kỳ thiệt hại nào phát sinh từ việc sử dụng hoặc không thể sử dụng nền tảng, ngay cả khi chúng tôi đã được thông báo về khả năng xảy ra thiệt hại đó.',
        }
      ]
    }
  };

  const copy = content[language];

  return (
    <div className="max-w-[800px] mx-auto px-6 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold font-heading text-text-main mb-4 tracking-tight">{copy.title}</h1>
      <p className="text-text-sec text-sm mb-8">{copy.lastUpdated}</p>

      <div className="prose prose-invert max-w-none text-text-sec">
        <p className="text-[1.05rem] leading-relaxed mb-8">
          {copy.intro}
        </p>

        {/* Free Trial Highlight Box */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent border border-sky-500/30 shadow-lg relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-400 text-bg-color">
              {copy.freeTrialNotice.badge}
            </span>
            <span className="text-emerald-400 text-xs font-mono font-semibold">50+ CCU</span>
          </div>
          <h3 className="text-lg font-bold text-text-main mb-2 font-heading">
            {copy.freeTrialNotice.title}
          </h3>
          <p className="text-slate-200 text-sm leading-relaxed mb-4">
            {copy.freeTrialNotice.content}
          </p>
          <a
            href="https://discord.gg/4RR9Tuunuk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 hover:underline"
          >
            <i className="fa-brands fa-discord"></i>
            {language === 'en' ? 'Join Discord to apply' : 'Tham gia Discord để đăng ký'} &rarr;
          </a>
        </div>

        {copy.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold text-text-main mb-3">{section.title}</h2>
            <p className="text-[1rem] leading-relaxed">{section.content}</p>
          </div>
        ))}

        <div className="mt-12 p-6 bg-white/5 border border-card-border rounded-lg">
          <p className="text-sm">
            {language === 'en'
              ? 'By using the Zeus Anti-Cheat Platform, you acknowledge that you have read and understood these Terms of Service.'
              : 'Bằng việc sử dụng Zeus Anti-Cheat Platform, bạn xác nhận rằng bạn đã đọc và hiểu rõ các Điều khoản Dịch vụ này.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;