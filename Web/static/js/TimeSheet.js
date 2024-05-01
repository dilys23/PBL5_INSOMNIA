//   document.getElementById('btn_information').addEventListener('click', function() {
//     document.getElementById('dialog_overlay').style.display = 'block';
//   });
  
//   document.getElementById('close-dialog-btn').addEventListener('click', function() {
//     document.getElementById('dialog_overlay').style.display = 'none';
//   });

//   document.querySelectorAll('.icon_calendar').forEach(icon => {
//     icon.addEventListener('click', function() {
//         const options = this.nextElementSibling;
//         options.classList.toggle('show');
//     });
// });

// Thong ke

var pie = new ej.charts.AccumulationChart({
  series: [{
    pointColorMapping: "color",
      dataSource: [
          { 'x': 'On Time', y: 80 , color: 'rgba(80, 196, 255, 0.63)'},
          { 'x': 'Late', y: 15 , color: 'rgba(231, 255, 84, 0.7)'},
          { 'x': 'Absent', y: 5 , color: 'rgba(235, 18, 18, 0.5)'}
      ],
      dataLabel: {
          visible: false,
          position: 'Inside'
      },
      xName: 'x',
      yName: 'y',
      
      
      
  }],
  legendSettings: { visible: false },
  tooltip: { enable: true, format: '${point.x}:<b> ${point.y}%<b>' },
});
pie.appendTo('#pie');

$("input").on("change", function() {
  this.setAttribute(
      "data-date",
      moment(this.value, "YYYY-MM-DD")
          .format( this.getAttribute("data-date-format") )
  )
}).trigger("change")

document.addEventListener('DOMContentLoaded', function() {
 
var currentDate = new Date(); // Lấy ngày tháng năm hiện tại
var year = currentDate.getFullYear(); // Lấy năm hiện tại
var month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Lấy tháng hiện tại và thêm số 0 vào trước nếu cần
var day = ("0" + currentDate.getDate()).slice(-2); // Lấy ngày hiện tại và thêm số 0 vào trước nếu cần

var currentDateString = year + "-" + month + "-" + day; // Tạo chuỗi ngày tháng năm hiện tại

// Đặt giá trị của trường input có ID là "bdaymonth" thành ngày tháng năm hiện tại
document.getElementsByClassName(".head_date").value = currentDateString;

});

