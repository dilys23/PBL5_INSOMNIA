document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.circle-graph-progress');
    progressBars.forEach(function(bar) {
      const progressValue = bar.getAttribute('data-progress');
      bar.style.transform = `rotate(${progressValue * 3.6}deg)`; /* Tính toán góc quay và thiết lập transform */
    });
  });

  document.getElementById('btn_information').addEventListener('click', function() {
    document.getElementById('dialog_overlay').style.display = 'block';
  });
  
  document.getElementById('close-dialog-btn').addEventListener('click', function() {
    document.getElementById('dialog_overlay').style.display = 'none';
  });

  document.querySelectorAll('.icon_calendar').forEach(icon => {
    icon.addEventListener('click', function() {
        const options = this.nextElementSibling;
        options.classList.toggle('show');
    });
});
