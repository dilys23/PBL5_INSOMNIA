var today = new Date();

  // Format ngày thành chuỗi YYYY-MM-DD
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
  var yyyy = today.getFullYear();
  
  var dateString = dd + '-' + mm + '-' + yyyy;
  var dateString = today.toLocaleDateString('vi-VN'); // Định dạng dd-MM-yyyy

  document.querySelector('.head_date').value = dateString;