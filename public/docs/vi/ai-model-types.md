# Loại mô hình AI

Zeus Platform tận dụng nhiều kiến trúc Machine Learning để cân bằng giữa hiệu năng, độ trễ và độ sâu phân tích. Bằng cách chọn các loại mô hình khác nhau, các administrator có thể tùy chỉnh analysis engine để phù hợp với thông số phần cứng cụ thể và yêu cầu phát hiện của họ.

Các loại mô hình này tương ứng trực tiếp với các tùy chọn cấu hình `ModelKind` có sẵn trong ML engine của nền tảng.

---

## 1. Fast
**Kiến trúc:** Stateless Evaluation

Được tối ưu hóa cho việc đánh giá với độ trễ cực thấp và thông lượng cao, các mô hình **Fast** rất lý tưởng cho việc xử lý telemetry theo thời gian thực ngay lập tức mà không làm giảm hiệu năng. Bằng cách sử dụng các pipeline xử lý đơn giản và được tối ưu hóa cao, các mô hình này có thể xử lý hàng trăm sự kiện mỗi tick cho mỗi người chơi, đóng vai trò như một trình phát hiện bất thường nhẹ nhàng ở tuyến đầu.

*   **Tốt nhất cho:** Các kiểm tra chiến đấu với khối lượng lớn, sàng lọc telemetry ban đầu, và các môi trường máy chủ cấu hình thấp.
*   **Độ trễ:** Thực thi dưới một mili-giây.

---

## 2. Thinking (Low)
**Kiến trúc:** Sequential Memory

Các mô hình này duy trì trạng thái tạm thời theo thời gian, cung cấp khả năng suy luận có ghi nhớ và đánh giá ngữ cảnh cho các bất thường hành vi theo chuỗi. Khác với các kiểm tra tĩnh tại một thời điểm, mô hình **Thinking (Low)** phân tích sự chuyển tiếp giữa các hành động, khiến chúng trở nên cực kỳ hiệu quả trong việc xác định các mẫu hành vi tinh vi chỉ xuất hiện qua nhiều tick liên tiếp.

*   **Tốt nhất cho:** Theo dõi các chuỗi di chuyển, phát hiện các mẫu tầm đánh (reach) hoặc thời gian nhấp chuột (click timing) tinh vi, và các kiểm tra phụ thuộc vào ngữ cảnh.
*   **Độ trễ:** Thấp đến trung bình, thực thi trả sau (deferred out-of-band).

---

## 3. Thinking (High)
**Kiến trúc:** Full-Context Retrospective

Các mô hình **Thinking (High)** chuyên sâu đánh giá dữ liệu chuỗi theo cả hướng xuôi và ngược, cho phép phân tích hồi cứu toàn diện. Bằng cách xử lý toàn bộ cửa sổ telemetry theo cả hai hướng, các mô hình này xây dựng một bức tranh hoàn chỉnh, mang tính ngữ cảnh cao về hành vi của người chơi để loại bỏ báo động giả (false positives) và bắt các bất thường tinh vi, ngắt quãng.

*   **Tốt nhất cho:** Đánh giá chiến đấu và di chuyển toàn diện, phân tích hồi cứu các phiên chơi bị gắn cờ, và xác minh với độ chính xác cao.
*   **Độ trễ:** Trung bình, được lên lịch chạy bất đồng bộ (scheduled asynchronously).

---

## 4. Balanced (Low/High)
**Kiến trúc:** Hybrid Pipelines

Kết hợp đánh giá nhanh với phân tích chuyên sâu có chọn lọc, các mô hình **Balanced** ưu tiên các sự kiện chính một cách hiệu quả. Chúng tự động định tuyến các dữ liệu telemetry thông thường qua các đường dẫn tốc độ cao, đồng thời nâng cấp các hoạt động phức tạp, ở ranh giới vi phạm, hoặc đáng ngờ lên các pipeline phân tích sâu hơn.

*   **Tốt nhất cho:** Các cấu hình đa dụng, thiết lập một lần rồi tự động hoạt động trên tất cả các kiểm tra telemetry.
*   **Độ trễ:** Động (cực nhanh đối với cách chơi tiêu chuẩn, thấp đến trung bình khi xử lý chuyên sâu).

---

## 5. Adaptive
**Kiến trúc:** Dynamic Baselines

Các mô hình này tự động thích ứng với các baseline dành riêng cho máy chủ và hành vi của người chơi nội bộ trong thời gian thực. Bằng cách liên tục cập nhật các cấu trúc ra quyết định nội bộ của chúng khi tiếp nhận luồng dữ liệu, các mô hình **Adaptive** sẽ học baseline vận hành tự nhiên của cộng đồng cụ thể của bạn mà không cần phải retrain thủ công.

*   **Tốt nhất cho:** Đặt ngưỡng động (dynamic thresholding), hiệu chuẩn baseline được bản địa hóa, và thích ứng với các cơ chế máy chủ tùy chỉnh hoặc chuyển động người chơi tùy chỉnh.
*   **Độ trễ:** Học thời gian thực cực kỳ hiệu quả.
