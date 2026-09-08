# Tổng quan cấu hình

Trang **Configuration** trong Zeus Dashboard cung cấp cho administrator quyền kiểm soát toàn diện đối với các tham số cốt lõi của Zeus Platform. Bạn có thể cấu hình trực tiếp qua giao diện web hoặc thông qua tệp `config.yaml`. Dưới đây là giải thích chi tiết về tất cả các phần cấu hình đang hoạt động:

## 1. General (Cài đặt chung)
*Quản lý tài nguyên hệ thống và liên kết mạng.*
- **Host**: Địa chỉ IP hoặc tên miền mà Zeus system server liên kết để lắng nghe kết nối đến.
- **Port**: Cổng mạng chính được cấu hình để trao đổi dữ liệu telemetry UDP và truyền thông sự kiện từ các server gateway.
- **UI Port**: Cổng mạng chuyên dụng cho giao diện web Dashboard.
- **Max RAM Limit (GB)**: Lượng bộ nhớ tối đa (tính bằng GB) mà tiến trình hệ thống Zeus được phép tiêu thụ.

## 2. Latency (Độ trễ)
*Kiểm soát việc lấy mẫu độ trễ để tính toán biến động mạng và ngăn chặn cờ báo sai khi kết nối của người chơi không ổn định.*
- **Ping Interval (ms)**: Tần suất (tính bằng mili-giây) mà hệ thống đo độ trễ mạng của người chơi.
- **Timeout (ms)**: Thời gian chờ tối đa cho một phản hồi trước khi gói tin hoặc kết nối bị coi là quá hạn.
- **Max Samples**: Số lượng mẫu ping lịch sử tối đa được lưu trữ trong cửa sổ bộ nhớ trượt.
- **Spike Threshold (ms)**: Ngưỡng tăng đột biến mạng (lag spike). Nếu ping của người chơi đột ngột vượt quá mức trung bình giá trị này, hệ thống sẽ phát hiện tình trạng mạng chập chờn và áp dụng chế độ giảm nhẹ.

## 3. Runtime (Thời gian chạy)
*Cấu hình đa luồng, đồng thời và ghi lại phiên chơi.*
- **Worker Threads**: Số lượng luồng xử lý song song nền tận dụng CPU đa lõi để nâng cao hiệu năng.
- **Shard Count**: Số lượng phân mảnh dữ liệu. Sharding chia nhỏ khối lượng công việc của người chơi qua các luồng để tránh nghẽn tài nguyên khi lượng người chơi đồng thời cao.
- **Replay Auto-Record**: Tự động ghi lại các tệp bản ghi vật lý `.zrec` có độ trung thực cao để phục vụ phát lại điều tra và xác minh trong Replay Lab.

## 4. Enforcement Action Thresholds (Ngưỡng thực thi hình phạt)
*Định nghĩa các ngưỡng điểm vi phạm tích lũy và hành động phạt tự động theo từng danh mục kiểm tra.*
- **Decay/Cooldown Settings (Cài đặt hạ nhiệt/giảm điểm)**:
  - **Decay Rate**: Số điểm vi phạm được trừ định kỳ khi người chơi hoạt động bình thường, giúp người chơi phục hồi sau các cảnh báo trước đó.
  - **Decay Interval (Seconds)**: Tần suất (tính bằng giây) áp dụng Decay Rate để trừ điểm.
  - **Safe Threshold**: Khi điểm vi phạm giảm xuống bằng hoặc dưới ngưỡng này, hồ sơ rủi ro của người chơi sẽ được đặt lại hoàn toàn.
- **Module-Specific Thresholds (Ngưỡng theo từng danh mục: Movement, Combat, Interact, Transaction, Networking)**:
  - **Warn At**: Ngưỡng điểm kích hoạt cảnh báo nhân viên.
  - **Kick At**: Ngưỡng điểm kích hoạt kick bắt buộc đối với người chơi vi phạm.
  - **Ban At**: Ngưỡng điểm dẫn đến lệnh cấm (ban) vĩnh viễn khỏi mạng lưới.

## 5. Discord Integration (Tích hợp Discord)
*Kết nối Zeus trực tiếp với máy chủ Discord để gửi cảnh báo nhân viên thời gian thực, ghi log tham gia/rời máy chủ và lệnh quản lý.*
- **Enable Discord Integration**: Khóa chuyển đổi chính để bật hoặc tắt tích hợp bot.
- **Bot Connection (Kết nối Bot)**:
  - **Bot Token**: Token bot ứng dụng Discord của bạn.
  - **Guild ID**: (Tùy chọn) Đăng ký slash command trực tiếp tới một máy chủ Discord cụ thể để sử dụng ngay lập tức.
- **Channels (Kênh)**:
  - **Support Channel ID**: Kênh chuyên dụng cho cảnh báo hệ thống, ticket và thông báo vận hành.
  - **Log Channel ID**: Kênh ghi lại sự kiện người chơi tham gia hoặc rời máy chủ.
  - **Alert Channel ID**: Kênh phát luồng cảnh báo vi phạm và các hành động thực thi.
- **Alerts & Notifications (Cảnh báo & Thông báo)**:
  - **Alert Minimum Severity**: Mức độ nghiêm trọng tối thiểu (Info, Warning, Kick, Ban) để kích hoạt gửi cảnh báo lên Discord.
  - **Notify on Join / Leave**: Bật/tắt thông báo khi người chơi tham gia hoặc rời khỏi máy chủ.
- **Commands (Lệnh)**:
  - **Enable Slash Commands**: Bật/tắt các lệnh quản lý tương tác trong Discord.
  - **Allowed Role IDs**: Giới hạn quyền sử dụng lệnh của bot cho các ID vai trò (role) nhân viên cụ thể.

## 6. Adaptive Review
*Quản lý profile đánh giá hành vi và phân công máy chủ.*
Việc gán profile được quản lý cục bộ cho từng máy chủ Minecraft được kết nối (`ip:port`). Mỗi máy chủ có thể hoạt động ở chế độ mô phỏng xác định Hermes hoặc được gán một profile Adaptive Review để chấm điểm bất thường tự động và phân loại báo động giả. Để xem chi tiết quy trình, vui lòng xem [Hướng dẫn Adaptive Review](/docs/model-management).
