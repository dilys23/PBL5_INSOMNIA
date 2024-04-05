document.getElementById('btn_addDepart').addEventListener('click', function() {
    document.getElementById('dialog_overlay').style.display = 'block';
  });
  
  document.getElementById('close-dialog-btn').addEventListener('click', function() {
    document.getElementById('dialog_overlay').style.display = 'none';
  });