var employees = document.querySelectorAll(".item_employee");
employees.forEach(function (employee) {
    employee.addEventListener('click', function () {
        document.getElementById('dialog_overlay_permission_form').style.display = 'block';
    });
});
document.getElementById('close-dialog-permission-btn').addEventListener('click', function () {
    document.getElementById('dialog_overlay_permission_form').style.display = 'none';
})
document.getElementById('btn_add_absent').addEventListener('click', function () {
    document.getElementById('dialog_overlay_add_permission_form').style.display = 'block';
})
document.getElementById('close-dialog-permission-add-btn').addEventListener('click', function () {
    document.getElementById('dialog_overlay_add_permission_form').style.display = 'none';
})
