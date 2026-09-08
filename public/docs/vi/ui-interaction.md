# Tương tác giao diện & Quản lý nền tảng

Zeus Platform cung cấp một ứng dụng web mạnh mẽ, được tối ưu hóa cao giúp bạn toàn quyền kiểm soát hoạt động phân tích hành vi của cơ sở hạ tầng, thu thập dataset và các pipeline machine learning. Hướng dẫn này bao gồm các giao diện và workflow chính trong Admin Dashboard.

## 1. Dashboard (Tổng quan mạng lưới)

![Tổng quan mạng lưới Dashboard](/images/ui/network-overview.webp)

Dashboard cung cấp khả năng nhận biết tình huống theo thời gian thực về các máy chủ được kết nối và lượng người chơi của bạn. Đây là chế độ xem đích chính để giám sát việc thực thi trên toàn mạng lưới.

* **Live Network Activity**: Xem tổng số máy chủ backend đã kết nối và số người chơi đang hoạt động trên mạng lưới của bạn. Bạn có thể tìm kiếm, phân trang và giám sát từng máy chủ cũng như người chơi riêng lẻ.
* **Violating Players**: Hiển thị danh sách những người chơi bị gắn cờ vì có những bất thường nghiêm trọng. Bạn có thể bật/tắt âm thanh cảnh báo và nhấp nháy một cách trực quan, bỏ qua các cảnh báo cụ thể hoặc xóa vĩnh viễn toàn bộ lịch sử vi phạm.
* **Integrations API**: Cung cấp một đoạn mã tham chiếu nhanh cho Integrations API endpoint để truy xuất hoặc xóa các bản ghi vi phạm bằng lập trình.

---

## 2. System Health & Control (Tình trạng hệ thống & Điều khiển)

Giám sát tài nguyên cơ sở hạ tầng máy chủ và quản lý các phiên bản server node một cách hiệu quả để đảm bảo hiệu năng đạt đỉnh.

* **RAM Usage Tracking**: Thước đo thời gian thực hiển thị dung lượng bộ nhớ được nền tảng sử dụng tính bằng KB/MB/GB.
* **Server Control**: Khởi động (Start) hoặc Dừng (Stop) từ xa telemetry server cốt lõi trực tiếp từ UI mà không cần truy cập command line.

---

## 3. Adaptive Review & Profiles (Đánh giá thích ứng & Hồ sơ)

Mô-đun này cho phép administrator quản lý các profile đánh giá hành vi và phân công máy chủ mà không cần rời khỏi trình duyệt:

* **Server Assignments**: Kết nối các máy chủ Minecraft đang chạy (`ip:port`) với các profile đánh giá cụ thể hoặc chọn chạy mô phỏng thuần Hermes.
* **Review Profiles**: Tạo, quản lý, lưu trữ (archive) và khôi phục (restore) các profile với lịch sử phiên bản và tiến độ training.
* **Flag Review Queue**: Kiểm tra danh sách cờ bất thường, lọc theo người chơi/trạng thái, và phân loại cờ là vi phạm đã xác nhận hoặc báo động giả để liên tục hiệu chuẩn mô hình hành vi.
* **Insights**: Xem xu hướng bất thường trên toàn mạng lưới, phân bố độ tin cậy và phân tích sức khỏe máy chủ.

---

## 4. Phân tích dữ liệu (Data Analysis)

Một công cụ chuyên sâu dành cho việc phân tích trực quan các tệp dataset telemetry CSV được xuất ra:

* **CSV Data Preview**: Tải dữ liệu hành vi thô vào bảng dữ liệu trình duyệt an toàn với bộ nhớ, kèm theo các tùy chọn phân trang linh hoạt.
* **Anomaly Visualizations**: Biểu đồ phân tích được tạo tự động để trực quan hóa Phân phối Điểm số Bất thường (Anomaly Score Distribution), Xu hướng theo Mẫu (Score per Sample), Giá trị Trung bình Đặc trưng (Feature Means) và Phân phối Phương sai (Variance).
* **Dataset Completeness**: Kiểm tra lưới độ bao phủ và sức khỏe của các đặc trưng dữ liệu.

---

## 5. Cấu hình toàn cục (Global Configuration)

Trung tâm cài đặt chính xử lý tất cả các cấu hình bao gồm General, Latency, Runtime, Ngưỡng hành động thực thi (Enforcement Action Thresholds) và Tích hợp Discord. Để biết bảng phân tích chi tiết, vui lòng tham khảo [Hướng dẫn cấu hình](/docs/configuration).

---

## 6. Replay System (Replay & Đánh giá bằng chứng)

Replay System cung cấp cho các operator khả năng xem xét trực quan hoạt động của người chơi và xác minh hành vi đáng ngờ mà không để lộ cơ chế phát hiện riêng. Bằng cách ghi lại dữ liệu telemetry có độ trung thực cao, nó tái dựng trực quan các điểm bất thường, cung cấp cho các administrator bằng chứng rõ ràng, không thể chối cãi trước khi thực hiện hành động thực thi.

* **Visual Replay Viewer**: Xem lùi hoặc tiến từng khung hình (frame-by-frame) tái dựng 3D các chuyển động, hành động và hướng của người chơi dẫn đến và trong suốt thời gian xảy ra bất thường bị gắn cờ.
* **Telemetry Insights**: Kiểm tra các đồ thị telemetry đồng thời biểu thị tốc độ, gia tốc, độ lệch vector (vector deviation) và tần suất đầu vào ngay bên cạnh phần tái dựng trực quan.
* **Evidence Management**: Xuất các gói replay được bản địa hóa chứa dữ liệu telemetry thô và gói metadata. Các gói này có thể được chia sẻ giữa các administrator để cùng đánh giá hoặc lưu trữ làm tài liệu tham khảo lịch sử.
* **Privacy-Safe Design**: Replay telemetry chỉ tập trung vào vật lý và tọa độ không gian. Nó không bao giờ ghi lại dữ liệu định danh cá nhân (PII) hoặc các cơ chế heuristic nội bộ của máy chủ, giữ cho quy trình đánh giá tuân thủ các tiêu chuẩn bảo mật.
