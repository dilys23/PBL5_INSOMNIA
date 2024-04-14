fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

    // Lấy tất cả các mục trong thanh điều hướng
    const navItems = document.querySelectorAll('.nav_menu_list .nav_list');

    // Lặp qua mỗi mục và thêm sự kiện click
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Xóa lớp active-link từ tất cả các mục
            navItems.forEach(navItem => {
                navItem.querySelector('.nav-link').classList.remove('active-link');
                console.log(navItem);
            });
            // Thêm lớp active-link cho mục được nhấn
            this.querySelector('.nav-link').classList.add('active-link');
        });
    });
   

    document.addEventListener('DOMContentLoaded', function() {
      var imgNav = document.getElementById('img_nav');
      if (imgNav) {
        imgNav.addEventListener('click', function() {
          document.getElementById('dropdown_content').classList.toggle('show');
        });
      } else {
        console.log('Element with ID "img_nav" not found');
      }
    });
  
  
    // Đóng dropdown nếu nhấp ra ngoài nó
    window.onclick = function(event) {
      if (!event.target.matches('.nav-ava img')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
    