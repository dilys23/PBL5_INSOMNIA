fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

// Lấy tất cả các mục trong thanh điều hướng
const navItems = document.querySelectorAll('.nav_menu_list .nav_list');

// Lặp qua mỗi mục và thêm sự kiện click
navItems.forEach(item => {
  item.addEventListener('click', function () {
    // Xóa lớp active-link từ tất cả các mục
    navItems.forEach(navItem => {
      navItem.querySelector('.nav-link').classList.remove('active-link');
      console.log(navItem);
    });
    // Thêm lớp active-link cho mục được nhấn
    this.querySelector('.nav-link').classList.add('active-link');
  });
});

function openDropdown() {
  console.log('Co img ne');
  var dropdownContent = document.getElementById('dropdown_content');
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
}
function logOut() {
  window.location.href = 'MainPage.html';
}
// Optional: Click outside to close the dropdown
window.onclick = function (event) {
  if (!event.target.matches('#btn_ava') && !event.target.closest('.nav-ava')) {
    var dropdownContent = document.getElementById('dropdown_content');
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    }
  }
}
// document.addEventListener('DOMContentLoaded', function () {
//   var btnAva = document.getElementById('btn_ava');

//   if (btnAva) {
//     btnAva.addEventListener('click', function () {
//       console.log('Co img ne');
//       document.getElementById('dropdown_content').style.display = 'block';
//     });
//   } else {
//     console.log('Element with ID "btn_ava" not found');
//   }

// });




document.addEventListener('DOMContentLoaded', function () {
  var personalInfoLink = document.getElementById('personal_info_link');
  var dialogOverlay = document.getElementById('dialog_overlay_info');
  if (personalInfoLink) {
    personalInfoLink.addEventListener('click', function (event) {
      event.preventDefault();
      dialogOverlay.style.display = 'block';
    });
  }

  document.getElementById('close-dialog-btn').addEventListener('click', function () {
    document.getElementById('dialog_overlay_info').style.display = 'none';
  });

});

// document.addEventListener('DOMContentLoaded', function() {
//   var btnAva = document.getElementById('btn_ava');
//   var dropdownContent = document.getElementById('dropdown_content');

//   // Lắng nghe sự kiện click trên toàn bộ tài liệu
//   document.addEventListener('click', function(event) {
//       // Nếu phần tử được nhấn không phải là dropdown hoặc button avatar
//       if (event.target !== dropdownContent && event.target !== btnAva) {
//           // Ẩn dropdown
//           dropdownContent.style.display = 'none';
//       }
//   });
// });


