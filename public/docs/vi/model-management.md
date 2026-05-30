# Quản lý ML Model

Zeus Platform cung cấp một giao diện mạnh mẽ để quản lý các mô hình Machine Learning. Các model là những thành phần cốt lõi đánh giá hành vi người chơi nhằm phát hiện bất thường và các hành vi gian lận tiềm ẩn.

## Hiểu về các Model

Mỗi model tương ứng với một kịch bản gameplay cụ thể:
- **Combat**: Phân tích độ chính xác khi đánh (hit accuracy), tầm tấn công (attack reach), tần suất tương tác và góc nhìn của người chơi.
- **Interact**: Xem xét tỷ lệ nhấp chuột (click rates), tốc độ đặt khối (block placement speeds) và thời gian chuỗi tương tác (interaction sequence timings).
- **Movement**: Đánh giá vận tốc XYZ (XYZ velocity), thời gian trên không (air time), khoảng cách rơi (fall distance) và các sự kiện dịch chuyển tức thời (teleportation events).
- **Transaction**: Giám sát các sự kiện nhấp vào kho đồ (inventory click events) và tính toàn vẹn của chuỗi packet.

Để tìm hiểu thêm về các kiến trúc ML nền tảng (Fast, Thinking, Balanced và Adaptive), vui lòng tham khảo tài liệu [Loại mô hình AI](./ai-model-types.md).

## Tạo Model mới

1. Điều hướng đến phần **Models** trong giao diện.
2. Nhấn **Create New Model**.
3. Chọn **Base Template** (ví dụ: `Strict` hoặc `Standard`).
4. Gán một tên duy nhất.
5. Model sẽ được khởi tạo với cấu hình baseline, bạn có thể tinh chỉnh sau.

## Chỉnh sửa các Model hiện có

Từ Model Dashboard, chọn một model để xem cấu hình của nó. Bạn có thể điều chỉnh:
- **Evaluation Context Window**: Xác định lượng hoạt động lịch sử cần thiết trước khi thực hiện một lần inference.
- **Warmup Windows**: Khoảng thời gian đệm để cho phép các bộ đệm nội bộ ổn định trước khi đánh giá hành vi của người chơi.
- **Thresholds**: Điều chỉnh khoảng tin cậy (confidence intervals) để quyết định khi nào bất thường kích hoạt cảnh báo.

## Lưu trữ và Profiles

Zeus tự động tuần tự hóa (serialize) và lưu trữ các ML model đã tạo trong thư mục `ml_profiles/` ở thư mục gốc của dự án. Điều này giúp việc sao lưu, chia sẻ và quản lý phiên bản (version control) các model của bạn giữa các máy chủ khác nhau trở nên cực kỳ dễ dàng.

> **Lưu ý:** Mỗi khi bạn chỉnh sửa một model thông qua giao diện, cấu hình ML toàn cục sẽ được cập nhật động (hot-reloaded) để ngăn ngừa bất kỳ thời gian ngừng hoạt động nào của máy chủ.
