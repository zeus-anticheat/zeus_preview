# Đồng bộ Telemetry & Custom Features

Mặc định, Zeus tự động giám sát các hành vi cấp cao của người chơi thông qua dữ liệu telemetry về di chuyển (movement), chiến đấu (combat), tương tác (interaction), giao dịch (transaction) và mạng (network). Khi máy chủ có các cơ chế tùy biến riêng—chẳng hạn như bàn nhảy (launch pad), hiệu ứng đẩy lùi đặc biệt, hoặc kỹ năng vật phẩm—Zeus cung cấp các điểm tích hợp để điều phối trạng thái gameplay.

## Cách trạng thái đồng bộ hóa

Khi một hành động gameplay tùy chỉnh diễn ra, dữ liệu có thể được truyền đến core engine để cung cấp ngữ cảnh trạng thái:

1. **Synchronous Injection**: Các sự kiện trạng thái được đồng bộ hóa nghiêm ngặt với luồng packet của người chơi gửi đến. Khi người chơi di chuyển, tấn công hoặc tương tác, ngữ cảnh trạng thái sẽ được gắn kết vào chính xác tick mili-giây đó.
2. **Context-Aware Evaluation**: Engine tiếp nhận siêu dữ liệu này cùng với các packet di chuyển và tương tác thô, đảm bảo các chuyển động hoặc kỹ năng tùy biến được đánh giá với đầy đủ ngữ cảnh thích hợp, tránh bị nhận diện nhầm là bất thường.

## Cung cấp Custom Telemetry

Để thêm số liệu tùy chỉnh vào luồng telemetry:
1. **Capture Event**: Theo dõi sự kiện gameplay cụ thể hoặc thay đổi trạng thái game trong gateway hoặc plugin máy chủ.
2. **Construct Payload**: Đóng gói metadata tùy chỉnh vào định dạng packet tiêu chuẩn (`PacketPlayerCustomFeature` qua mã `0x20`).
3. **Dispatch**: Truyền tải telemetry đã tuần tự hóa đến engine qua các adapter bridge UDP được cung cấp.
4. **Automatic Normalization**: Nền tảng lõi chuẩn hóa các luồng dữ liệu tùy chỉnh gửi đến, đảm bảo số liệu mới phù hợp một cách đồng nhất trong pipeline đánh giá.
