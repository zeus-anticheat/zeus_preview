# Giới thiệu về Zeus Platform

Zeus là nền tảng **Machine Learning Anti-Cheat** thế hệ mới được thiết kế để bảo vệ các máy chủ Minecraft với độ chính xác chưa từng có. Vượt qua các kiểm tra heuristic truyền thống, Zeus tận dụng deep neural networks, telemetry analysis và phát hiện bất thường động (dynamic anomaly detection) để ngay lập tức vô hiệu hóa các mối đe dọa hiện đại.

## Kiến trúc High-Level

Nền tảng được thiết kế với tính mô-đun cao và hiệu năng cực kỳ mạnh mẽ, thực thi tất cả tác vụ ML inference và xử lý dữ liệu out-of-band để đảm bảo không gây ảnh hưởng đến TPS trên máy chủ game chính.

1. **High-Performance Engine**: Cơ sở hạ tầng cốt lõi xử lý dữ liệu telemetry để tái hiện chi tiết từng khung hình (frame-by-frame representation) của hoạt động của người chơi. Nó xử lý mượt mà các tình huống có độ phức tạp cao như tương tác với chất lỏng (liquid interactions), trạng thái leo trèo (climbing states) và phản ứng vận tốc (velocity responses).
2. **Data Normalization**: Quy trình tinh lọc dữ liệu chuyển đổi các biến trạng thái dễ biến động của người chơi thành các định dạng được chuẩn hóa, thân thiện với ML. Các feature được chuẩn hóa động để đảm bảo các mô hình AI hội tụ và thực hiện inference với độ chính xác cao nhất.
3. **Dynamic Inference**: Sử dụng các mô hình deep learning tinh vi để phân tích các mẫu hành vi. Engine có thể điều chỉnh linh hoạt độ sâu đánh giá đối với các chuyển động chưa rõ ràng nhằm đảm bảo đưa ra phán quyết tính hợp lệ đáng tin cậy.
4. **Seamless Integration**: Các tích hợp gốc chặn các luồng telemetry một cách an toàn trực tiếp từ pipeline sự kiện của máy chủ và chuyển tiếp chúng đến lõi phân tích theo thời gian thực.

## Hệ sinh thái & Nền tảng hỗ trợ

Zeus kết nối linh hoạt với nhiều runtime máy chủ thông qua các gateway gọn nhẹ:
- **Paper / Spigot / Folia**: Adapter hiện đại hỗ trợ từ phiên bản 1.14 đến 1.21.x, kèm hỗ trợ mở rộng cho các phiên bản cũ 1.8 - 1.13.x.
- **Fabric**: Adapter Fabric chuyên dụng cho các server modded và setup tương thích vanilla hiện đại.
- **Out-of-Band Rust Core**: Lõi phân tích độc lập chạy song song mà không gây tụt TPS hoặc lag giật trong game.

Nếu bạn đang tìm cách tích hợp hoặc cấu hình nền tảng, vui lòng chuyển sang các hướng dẫn kỹ thuật bên dưới.
