/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  // window.onscroll = function() {headerShadow()};
  // function headerShadow() {
  //   const navHeader =document.getElementById("header");
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
  //     navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
  //     navHeader.style.height = "70px";
  //     navHeader.style.lineHeight = "70px";
  //   } else {
  //     navHeader.style.boxShadow = "none";
  //     navHeader.style.height = "90px";
  //     navHeader.style.lineHeight = "90px";
  //   }
  // }
/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Employee Attendance Website"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })
/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- PROJECT BOX -- */
sr.reveal('.explore-box',{interval: 200})
/* -- HEADINGS -- */
sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- & education */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})
sr.reveal('.top-header.experiences',{})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
srLeft.reveal('.education-column.column1',{delay:400})
/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})
srRight.reveal('.education-column.column2',{delay:100})

sr.reveal('.top-footer ',{})
sr.reveal('footer ',{})
sr.reveal('.footer-social-icons',{delayy: 200})
/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)
function validateForm() {
  var emailInput = document.getElementById('myForm').elements['email'];
  var emailError = document.getElementById('emailError');
  var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (!emailPattern.test(emailInput.value)) {
      emailError.innerHTML = 'Invalid email format';
      return false; // Prevent form submission
  } else {
      emailError.innerHTML = '';
      return true; // Allow form submission
  }
}
document.getElementById('icon_eye').addEventListener('click', function(e) {
  var input = document.getElementById('dialog-password');
  var eyeIcon = document.getElementById('icon_eye');
  if(input.type=="password"){
    input.type="text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }else{
    input.type="password";
    eyeIcon.classList.add("fa-eye");
    eyeIcon.classList.remove("fa-eye-slash");
  }
})

document.getElementById('btn_close_dialog').addEventListener('click', function() {
  document.getElementById('dialogOverlay').style.display = 'none';
});
document.addEventListener("DOMContentLoaded", function() {
  // Ví dụ:
  document.getElementById('login').addEventListener('click', function(event) {
      event.preventDefault(); // Ngăn chặn hành động mặc định của nút
      document.getElementById('dialogOverlay').style.display = 'block';
  });

});
document.getElementById('btn-submit').addEventListener('click',function(){
  window.location.href = 'TimeSheet.html';
} )
