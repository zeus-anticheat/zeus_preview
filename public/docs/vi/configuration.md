# Tổng quan cấu hình

Trang **Configuration** trong Zeus Dashboard cung cấp cho administrator quyền kiểm soát toàn diện đối với các tham số cốt lõi của Zeus Platform. Dưới đây là giải thích chi tiết về tất cả các số liệu và cài đặt, được phân loại theo các phần tương ứng:

## 1. General (Cài đặt chung)
*Phần này quản lý tài nguyên hệ thống và các ràng buộc kết nối.*
- **Host**: Địa chỉ IP hoặc tên miền (hostname) mà Zeus system server sẽ liên kết (bind) để lắng nghe các kết nối đến.
- **Port**: Cổng mạng chính được cấu hình để trao đổi dữ liệu nội bộ và truyền thông sự kiện.
- **UI Port**: Cổng mạng chuyên dụng dành cho giao diện Dashboard chạy trên web.
- **Max RAM Limit (GB)**: Lượng bộ nhớ tối đa (tính bằng Gigabyte) mà tiến trình hệ thống Zeus được phép tiêu thụ.

## 2. Latency (Độ trễ)
*Kiểm soát việc giám sát ping để ngăn chặn các cảnh báo bất thường giả (false positive anomalies) do mạng không ổn định gây ra.*
- **Ping Interval (ms)**: Tần suất (tính bằng mili-giây) mà hệ thống ping người chơi để đo độ trễ mạng của họ.
- **Timeout (ms)**: Thời gian chờ tối đa được phép trước khi một gói tin hoặc kết nối được coi là đã quá hạn (timed out).
- **Max Samples**: Số lượng mẫu ping lịch sử tối đa được lưu trữ trong cửa sổ bộ nhớ để tính toán độ trễ trung bình của người chơi.
- **Spike Threshold (ms)**: Ngưỡng tăng đột biến của mạng (lag spike). Nếu ping của người chơi đột ngột vượt quá giá trị này so với mức trung bình của họ, hệ thống sẽ phát hiện tình trạng tăng đột biến độ trễ tạm thời và áp dụng chế độ giảm nhẹ (leniency) đối với các đánh giá của AI.

## 3. Runtime (Thời gian chạy)
*Cấu hình khả năng đa luồng (multi-threading) và xử lý dữ liệu.*
- **Worker Threads**: Số lượng luồng xử lý song song nền. Tăng giá trị này giúp tận dụng CPU đa lõi để nâng cao hiệu năng tổng thể.
- **Shard Count**: Số lượng phân mảnh dữ liệu. Sharding chia nhỏ khối lượng công việc xử lý để ngăn chặn việc khóa tài nguyên khi có lượng lớn người chơi đồng thời.
- **Network Receivers**: Số lượng luồng mạng chuyên dụng chịu trách nhiệm duy nhất cho việc nhận, giải mã và phân tích các gói tin sự kiện gửi đến.

## 4. Analysis (Phân tích)
*Định nghĩa các quy tắc để lấy mẫu dữ liệu trong bộ thu thập Machine Learning.*
- **Min Samples**: Số lượng mẫu sự kiện thống kê tối thiểu cần thiết trước khi machine learning engine bắt đầu đưa ra các đánh giá bất thường.
- **Max Samples**: Kích thước cửa sổ bộ nhớ tối đa. Điều này quy định số lượng mẫu trong quá khứ tối đa được chuyển đến các mô hình ML để dự đoán xu hướng.
- **Sample Interval**: Khoảng thời gian trích xuất hoặc khoảng cách giữa các mẫu dữ liệu được thu thập (được sử dụng để tiết kiệm tài nguyên hệ thống so với việc ghi log liên tục theo từng tick).

## 5. ML Settings (Cài đặt ML)
*Thành phần cốt lõi của nền tảng, quản lý các quy tắc Machine Learning (ML), giới hạn bộ thu thập và hiệu chuẩn AI.*

- **ML Analysis Active**: Khóa chuyển đổi toàn cục để bật hoặc tắt toàn bộ engine phân tích hành vi ML.
- **Feature Collector**:
  - **Limited Mode Buffer**: Khi chạy ở chế độ tài nguyên hạn chế, điều này giới hạn kích thước tối đa của bộ đệm vòng (ring-buffer) chứa các bước thời gian lịch sử được giữ lại cho mỗi người chơi.
  - **Diagnostic Log Interval**: Tần suất (tính bằng tick) mà các log chẩn đoán về sức khỏe và thông lượng của collector được in ra console.
- **Clean Memory DB**:
  - **Dataset Clean-up Threshold**: Độ nghiêm ngặt của bộ lọc bất thường được sử dụng để cắt tỉa dữ liệu (0.0 đến 1.0, trong đó các giá trị cao hơn sẽ giữ lại nhiều dữ liệu hơn).
  - **Feature Selection Limits**: Số lượng tối đa các đặc trưng ưu tiên được sử dụng để train mô hình một cách sạch sẽ, loại bỏ các mảng dữ liệu bị nhiễu.
- **Background Auto-Calibration (Tự động hiệu chuẩn nền)**:
  - **Processing Interval (sec)**: Thời gian chờ (tính bằng giây) giữa các chu kỳ tự động hiệu chuẩn nền để điều chỉnh lại các mô hình theo xu hướng hành vi của máy chủ.
  - **Min Samples Per Level**: Số lượng mẫu tối thiểu cần thiết trong một Effect Level cụ thể để engine tự động hiệu chuẩn xử lý nó như một training baseline hợp lệ.

**[Cấu hình ML cụ thể (Movement, Combat, Interact, Transaction, Networking)]**

1. **Adaptive Engine (Smart Threshold Interpolation)**
   - **Active**: Bật/tắt adaptive engine dành riêng cho mô-đun phân tích này.
   - **Sensitivity**: Độ nhạy của việc phát hiện bất thường. Giá trị cao hơn giúp hệ thống phát hiện mạnh mẽ hơn nhưng làm tăng nguy cơ báo động giả.
   - **Variance**: Ranh giới phương sai cho phép để theo dõi phân phối dữ liệu.
   - **Capacity / Window / Warmup**: Cấu hình dung lượng mô hình, khung thời gian đánh giá (Window) và lượng sự kiện bỏ qua ban đầu trước khi bắt đầu thực thi nghiêm ngặt các quy tắc (Warmup).
   
2. **Severity Points (Điểm nghiêm trọng)**
   - **Mild / Moderate / Severe**: Điểm số vi phạm được tăng lên khi phát hiện hành vi bất thường ở các mức độ nghiêm trọng khác nhau (ví dụ: Mild +1, Severe +5).

3. **Adaptive Ping/TPS Thresholds (Lag Mitigation)**
   - **Max Ping / Min TPS**: Các giới hạn cực hạn nơi các hình phạt và đánh giá ML bị bỏ qua hoàn toàn để bảo vệ những người chơi đang bị lag.
   - **High Ping / Low TPS**: Các giới hạn bắt đầu khi máy chủ được coi là đang gặp khó khăn (struggling).
   - **Multiplier**: Một hệ số giảm thiểu thiệt hại (ví dụ: multiplier là 0.2 nghĩa là chỉ có 20% điểm vi phạm được áp dụng khi máy chủ bị lag).

## 6. Enforcement (Thực thi)
*Định nghĩa các ngưỡng và hành động đối với các hình phạt tự động.*
- **Decay/Cooldown Settings**:
  - **Decay Rate**: Số điểm vi phạm bị trừ định kỳ khi người chơi hoạt động bình thường, giúp họ phục hồi sau các vi phạm trước đó.
  - **Decay Interval (Seconds)**: Tần suất áp dụng Decay Rate để trừ điểm.
  - **Safe Threshold**: Khi điểm vi phạm của người chơi giảm hoàn toàn xuống bằng hoặc dưới ngưỡng này, profile rủi ro của họ sẽ được đặt lại hoàn toàn.
- **Module-Specific Thresholds (Movement, Combat, Interact, Transaction, Networking)**:
  - **Warn At**: Ngưỡng điểm kích hoạt cảnh báo nhân viên (silent staff warning) hoặc cảnh báo công khai.
  - **Kick At**: Ngưỡng điểm kích hoạt kick bắt buộc đối với người chơi vi phạm.
  - **Ban At**: Ngưỡng điểm dẫn đến việc cấm (ban) vĩnh viễn khỏi mạng lưới.

## 7. Profiles Management (Quản lý Profile)
Cho phép administrator quản lý và chuyển đổi toàn bộ các profile cấu hình được tùy chỉnh cho các chế độ chơi cụ thể. Ví dụ: bạn có thể chỉ định một ML profile nghiêm ngặt cho các môi trường cạnh tranh như "KitPvP" trong khi chuyển sang một profile thoải mái hơn cho các máy chủ "Survival" thông thường.
