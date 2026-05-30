# Tương tác giao diện & Quản lý nền tảng

Zeus Platform cung cấp một ứng dụng web mạnh mẽ, được tối ưu hóa cao giúp bạn toàn quyền kiểm soát hoạt động phân tích hành vi của cơ sở hạ tầng, thu thập dataset và các pipeline machine learning. Hướng dẫn này bao gồm các giao diện và workflow chính trong Admin Dashboard.

> [!NOTE]
> Các ảnh chụp màn hình bên dưới là ảnh tạm thời và sẽ được cập nhật bằng ảnh chụp UI thực tế khi trang dashboard phát triển.

## 1. Dashboard (Tổng quan mạng lưới)
![Dashboard Overview](/public/images/ui/dashboard.webp)

Dashboard cung cấp khả năng nhận biết tình huống theo thời gian thực về các máy chủ được kết nối và lượng người chơi của bạn. Đây là chế độ xem đích chính để giám sát việc thực thi trên toàn mạng lưới.

* **Live Network Activity**: Xem tổng số máy chủ backend đã kết nối và số người chơi đang hoạt động trên mạng lưới của bạn. Bạn có thể tìm kiếm, phân trang và giám sát từng máy chủ cũng như người chơi riêng lẻ.
* **Violating Players**: Hiển thị danh sách những người chơi bị gắn cờ vì có những bất thường nghiêm trọng. Bạn có thể bật/tắt âm thanh cảnh báo và nhấp nháy một cách trực quan, bỏ qua các cảnh báo cụ thể hoặc xóa vĩnh viễn toàn bộ lịch sử vi phạm.
* **Integrations API**: Cung cấp một đoạn mã tham chiếu nhanh cho Integrations API endpoint để truy xuất hoặc xóa các bản ghi vi phạm bằng lập trình.

---

## 2. System Health & Control
![System Health](/public/images/ui/system.webp)

Giám sát tài nguyên cơ sở hạ tầng máy chủ và quản lý các phiên bản server node một cách hiệu quả để ngăn ngừa rò rỉ bộ nhớ (memory leaks) và đảm bảo hiệu năng đạt đỉnh.

* **RAM Usage Tracking**: Một thước đo thời gian thực hiển thị dung lượng bộ nhớ được nền tảng sử dụng tính bằng KB/MB/GB.
* **Memory Purging (`Free All Memory`)**: Cho phép administrator buộc giải phóng các dataset trong bộ nhớ, danh sách đăng ký người chơi (player registries) và lịch sử engine thích ứng để thu hồi không gian RAM sau các tác vụ training nặng hoặc thời gian hoạt động kéo dài.
* **Server Control**: Khởi động (Start) hoặc Dừng (Stop) từ xa telemetry server cốt lõi trực tiếp từ UI mà không cần truy cập command line.

---

## 3. ML Training Center
![ML Center](/public/images/ui/ml_center.webp)

Mô-đun này cho phép administrator quản lý vòng đời của các mô hình machine learning dùng để phát hiện bất thường mà không cần rời khỏi trình duyệt. Nó tích hợp việc trích xuất feature (feature extraction), training cục bộ và quản lý dataset.

* **Runtime Active Models**: Xem các mô hình đang hoạt động trong môi trường production và phân tích dữ liệu telemetry trực tiếp.
* **Train New Model**: Dễ dàng cấu hình các training hyperparameters được tùy chỉnh cho dataset của bạn:
    * **Profile Types**: Train các mô hình dành riêng cho Movement, Combat, Interact, Transaction, hoặc Networking.
    * **Model Tuning / Continuous Learning**: Bật tính năng này để giúp mô hình liên tục học các khả năng mới mà không bị quên những gì đã học trước đó (catastrophic forgetting).
    * **Dataset Clean-up**: Tự động loại bỏ các mẫu bị nhiễu (noisy samples) trước khi training.
* **Export Dataset**: Tải xuống các phần dữ liệu được tuyển chọn trực tiếp vào hệ thống tệp cục bộ của máy chủ dưới dạng file CSV thô.
* **Feature Collector**: Engine thúc đẩy quá trình thu thập dữ liệu liên tục. Chuyển đổi giữa chế độ `Full` (để thu thập dữ liệu tối đa) và chế độ `Limited` (sử dụng bộ đệm vòng - ring-buffer để tránh cạn kiệt bộ nhớ). Điều chỉnh chính sách ngắt kết nối thành `Clean` (Xóa) hoặc `Retain` (Giữ lại) dữ liệu khi người chơi logout.

---

## 4. Phân tích dữ liệu (Data Analysis)
![Data Analysis](/public/images/ui/data_analysis.webp)

Một công cụ chuyên sâu dành cho việc phân tích trực quan các CSV dataset đã tải xuống hoặc kết hợp các phân phối cấu trúc `.json` bằng lập trình.

* **Distribution Fusion (Ultra)**: Tải lên nhiều file cấu trúc `distributions.json` để hợp nhất chúng bằng thuật toán. Hệ thống tính toán giá trị trung bình `μ` (mu) và `σ` (sigma) để xây dựng một profile hợp nhất hoàn chỉnh nhất, giúp giảm thiểu đáng kể tỷ lệ báo động giả (false positives).
* **CSV Data Preview**: Tải hàng gigabyte dữ liệu hành vi thô vào bảng dữ liệu trình duyệt an toàn với bộ nhớ, kèm theo các tùy chọn phân trang động.
* **Anomaly Visualizations**: Biểu đồ phân tích được tạo tự động để trực quan hóa Phân phối Điểm số (Score Distributions), Xu hướng Mẫu theo Thời gian (Temporal Sample Trends), Feature Means, Phân phối Phương sai (Variance distributions) và Ma trận Tương quan Feature (Feature Correlation Matrices).

---

## 5. System Console
![System Console](/public/images/ui/console.webp)

Console tích hợp cung cấp một terminal dựa trên web với độ trễ thấp, phản ánh chính xác đầu ra của tiến trình backend.
* Giám sát các luồng standard output và standard error trong thời gian thực.
* Xem nhật ký ghi lại nội dung logging nội bộ chính xác được tạo ra bởi inference engine và các luồng mạng (networking threads).

---

## 6. Global Configuration
![Configuration](/public/images/ui/configuration.webp)

Trung tâm cài đặt chính xử lý tất cả các cấu hình nội bộ, từ mạng lưới cluster đến việc ghi đè tham số chính xác. Để biết bảng phân tích chi tiết về các tùy chọn được cung cấp trong tab Configuration, vui lòng tham khảo [Hướng dẫn cấu hình](/docs/configuration).

---

## 7. Replay System (Replay & Đánh giá bằng chứng)
![Replay System](/public/images/ui/replay.webp)

Replay System cung cấp cho các operator khả năng xem xét trực quan hoạt động của người chơi và xác minh hành vi đáng ngờ mà không để lộ cơ chế phát hiện riêng. Bằng cách ghi lại dữ liệu telemetry có độ trung thực cao, nó tái dựng trực quan các điểm bất thường, cung cấp cho các administrator bằng chứng rõ ràng, không thể chối cãi trước khi thực hiện hành động thực thi.

* **Visual Replay Viewer**: Xem lùi hoặc tiến từng khung hình (frame-by-frame) tái dựng 3D các chuyển động, hành động và hướng của người chơi dẫn đến và trong suốt thời gian xảy ra bất thường bị gắn cờ.
* **Telemetry Insights**: Kiểm tra các đồ thị telemetry đồng thời biểu thị tốc độ, gia tốc, độ lệch vector (vector deviation) và tần suất đầu vào ngay bên cạnh phần tái dựng trực quan.
* **Evidence Management**: Xuất các gói replay được bản địa hóa chứa dữ liệu telemetry thô và gói metadata. Các gói này có thể được chia sẻ giữa các administrator để cùng đánh giá hoặc lưu trữ làm tài liệu tham khảo lịch sử.
* **Privacy-Safe Design**: Replay telemetry chỉ tập trung vào vật lý và tọa độ không gian. Nó không bao giờ ghi lại dữ liệu định danh cá nhân (PII) hoặc các cơ chế heuristic nội bộ của máy chủ, giữ cho quy trình đánh giá tuân thủ các tiêu chuẩn bảo mật.
