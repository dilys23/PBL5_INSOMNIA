document.getElementById('btn_register').addEventListener('click', function () {
    document.getElementById('dialogOverlay').style.display = 'none';
    document.getElementById('dialogOverlayRegister').style.display = 'block';
});


document.getElementById('btn_close_dialog_register').addEventListener('click', function () {
    document.getElementById('dialogOverlayRegister').style.display = 'none';
});

document.getElementById('btn_login').addEventListener('click', function () {
    document.getElementById('dialogOverlayRegister').style.display = 'none';
    document.getElementById('dialogOverlay').style.display = 'block';
});







