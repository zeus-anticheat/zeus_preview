# Adaptive Review & Quản lý Profile

Zeus Platform cung cấp giao diện tích hợp để quản lý các profile Adaptive Review và phân công máy chủ. Adaptive Review học các baseline của cộng đồng và hỗ trợ các operator đánh giá các hành vi chơi game đáng ngờ.

## Hiểu về các Profile

Các profile thích ứng với lối chơi và chế độ chơi cụ thể của từng máy chủ:
- **Hermes Simulation Only**: Luồng đánh giá vật lý xác định (deterministic), không dùng ML dựa trên các tick máy chủ chính xác.
- **Adaptive Review Profile**: Thu thập các đánh giá cờ vi phạm, học baseline tự nhiên của cộng đồng và ưu tiên các hành vi đáng nghi mà không cần đoán chỉnh ngưỡng thủ công.

## Tạo Profile mới

1. Điều hướng đến **Adaptive Review Profiles** trong thanh menu bên của dashboard.
2. Nhấn **Create profile**.
3. Đặt tên mô tả cho profile của bạn (ví dụ: `KitPvP Standard`, `Survival Balanced`).
4. Sau khi tạo, profile bắt đầu ở trạng thái `untrained` cho đến khi thu thập đủ dữ liệu gắn nhãn.

## Quản lý Training và Phiên bản

1. Xem các cờ vi phạm được gửi đến trong tab **Flag Review** và phân loại chúng là vi phạm đã xác nhận hoặc báo động giả.
2. Khi đã tích lũy đủ số nhãn đánh giá, hãy khởi chạy tác vụ huấn luyện bằng nút **Train profile**.
3. Khi quá trình huấn luyện hoàn tất, hãy kích hoạt phiên bản mô hình mới hoặc quay lại bất kỳ phiên bản trước đó chỉ với một cú nhấp chuột.

## Phân công máy chủ (Server Assignment)

Việc gán profile được quản lý cục bộ trên từng phiên bản Zeus trong **Adaptive Review -> Servers**:
- Chọn bất kỳ máy chủ Minecraft đang kết nối (`ip:port`).
- Gán một profile hiện có hoặc giữ máy chủ chạy chế độ mô phỏng thuần Hermes.
- Cài đặt được lưu cục bộ trong `config.yaml` mà không yêu cầu khởi động lại máy chủ.

## Thùng rác có thể khôi phục (Recoverable Trash)

Các profile bị xóa được chuyển vào **Profile Trash**, nơi chúng có thể được khôi phục trong vòng 24 giờ trước khi bị xóa vĩnh viễn.
