fetch('HeaderUser.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

document.addEventListener('DOMContentLoaded', function () {
    var btnAva = document.getElementById('btn_ava');

    if (btnAva) {
        btnAva.addEventListener('click', function () {
            console.log('Co img ne');
            document.getElementById('dropdown_content').style.display = 'block';
        });
    } else {
        console.log('Element with ID "btn_ava" not found');
    }

});
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
    document.getElementById('logout').addEventListener('click', function () {
        window.location.href = 'MainPage.html';
    })
});