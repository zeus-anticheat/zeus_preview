# Tích hợp Custom Player Features

Theo mặc định, Zeus tự động giám sát các hành vi cấp cao của người chơi thông qua dữ liệu telemetry về movement (di chuyển), combat (chiến đấu) và interaction (tương tác). Tuy nhiên, các máy chủ được tùy chỉnh sâu có thể đưa vào các cơ chế làm thay đổi chuyển động — chẳng hạn như công thức knockback tùy chỉnh, gia tốc (momentum) khi dùng phép thuật, hoặc các vật phẩm đặc biệt.

Để đảm bảo neural network hiểu được các yếu tố bên ngoài này, nền tảng cung cấp các API chuyên dụng để truyền tải dữ liệu telemetry cho các custom feature (tính năng tùy chỉnh).

## Custom Feature đồng bộ hóa như thế nào?

Khi một sự kiện custom feature được kích hoạt, dữ liệu sẽ nhanh chóng được truyền đến core analysis engine. Sức mạnh thực sự của hệ thống này nằm ở khả năng tích hợp theo thời gian (temporal integration):

1. **Synchronous Injection**: Custom feature được đồng bộ hóa nghiêm ngặt theo thời gian thực với dữ liệu trạng thái hiện tại của người chơi. Khi người chơi di chuyển, tấn công hoặc nhảy, ML inference engine sẽ gắn siêu dữ liệu (metadata) tùy chỉnh của bạn vào chính xác tick mili-giây đó.
2. **Unified Snapshot Generation**: Inference engine sẽ tiếp nhận thông tin này cùng lúc với các movement feature tự nhiên. Điều này đảm bảo mô hình không đánh giá sai một kỹ năng di chuyển tùy chỉnh là bất thường, vì bối cảnh tùy chỉnh rõ ràng đó được đánh giá đồng thời.

## Cung cấp Custom Telemetry

Để thêm các số liệu tùy chỉnh vào luồng telemetry:
1. **Capture Event**: Theo dõi sự kiện gameplay cụ thể hoặc thay đổi trạng thái game của bạn.
2. **Construct Payload**: Phân nhóm metadata tùy chỉnh — dưới dạng số liệu (numeric metrics) hoặc cờ logic (boolean flags) — vào định dạng external feature tiêu chuẩn.
3. **Dispatch**: Truyền tải dữ liệu telemetry đã được tuần tự hóa (serialized) đến engine thông qua các adapter bridges được cung cấp.
4. **Automatic Normalization**: Nền tảng lõi tự động áp dụng các giới hạn và tỷ lệ phù hợp cho các luồng dữ liệu tùy chỉnh gửi đến, đảm bảo số liệu mới của bạn phù hợp một cách đồng nhất trong phân phối dữ liệu của ML model.
