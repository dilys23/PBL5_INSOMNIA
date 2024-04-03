import cv2

# Khởi tạo face_classifier từ file XML
face_classifier = cv2.CascadeClassifier(
    cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
)

# Truy cập vào camera máy tính
video_capture = cv2.VideoCapture(0)

while True:
    # Đọc một khung hình từ video
    ret, frame = video_capture.read()

    # Chuyển đổi ảnh từ BGR sang grayscale để nhận diện khuôn mặt
    gray_image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Nhận diện khuôn mặt và ve hình chữ nhật xung quanh
    faces = face_classifier.detectMultiScale(gray_image, 1.1, 5, minSize=(40, 40))
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 4)

    # Hiển thị khung hình đã được xử lý
    cv2.imshow('Video', frame)

    # Nhấn 'q' để thoát
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Thu hồi bộ nhớ đã cấp phát
video_capture.release()
cv2.destroyAllWindows()