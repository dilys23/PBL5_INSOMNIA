var employeeHeads = document.querySelectorAll(".item_employee_head");
employeeHeads.forEach(function (head) {
    head.addEventListener('click', function () {
        console.log('co nhan ne');
        var parent = this.closest('.item_employee');
        var absent = parent.querySelector('.item_employee_absent');
        if (absent) {
            if (absent.classList.contains('active')) {
                absent.classList.remove('active');
            } else {
                absent.classList.add('active');
            }
        } else {
            console.log('Không tìm thấy phần tử .item_employee_absent');
        }
    });
});
//  Shift Time
function toggleIconsMorning() {
    var editIcon = document.getElementById("btn_edit_shift_in1");
    var saveIcon = document.getElementById("btn_save_shift_out1");

    if (editIcon.style.display === "none") {
        editIcon.style.display = "inline";
        saveIcon.style.display = "none";
    } else {
        document.getElementById("txt_shift_in_morning").removeAttribute("readonly");
        document.getElementById("txt_shift_in_morning").focus();
        document.getElementById("txt_shift_out_morning").removeAttribute("readonly");
        editIcon.style.display = "none";
        saveIcon.style.display = "inline";
    }
}
function toggleSaveEditMorning() {
    var editIcon = document.getElementById("btn_edit_shift_in1");
    var saveIcon = document.getElementById("btn_save_shift_out1");

    if (saveIcon.style.display === "none") {
        saveIcon.style.display = "inline";
        editIcon.style.display = "none";
    } else {
        saveIcon.style.display = "none";
        editIcon.style.display = "inline";
        document.getElementById("txt_shift_in_morning").setAttribute("readonly", true);
        document.getElementById("txt_shift_out_morning").setAttribute("readonly", true);
    }
}

function toggleIconsAfternoon() {
    var editIcon = document.getElementById("btn_edit_shift_in2");
    var saveIcon = document.getElementById("btn_save_shift_out2");

    if (editIcon.style.display === "none") {
        editIcon.style.display = "inline";
        saveIcon.style.display = "none";
    } else {
        editIcon.style.display = "none";
        saveIcon.style.display = "inline";
        document.getElementById("txt_shift_in_afternoon").removeAttribute("readonly");
        document.getElementById("txt_shift_in_afternoon").focus();
        document.getElementById("txt_shift_out_afternoon").removeAttribute("readonly");
    }
}
function toggleSaveEditAfternoon() {
    var editIcon = document.getElementById("btn_edit_shift_in2");
    var saveIcon = document.getElementById("btn_save_shift_out2");

    if (saveIcon.style.display === "none") {
        saveIcon.style.display = "inline";
        editIcon.style.display = "none";
    } else {
        saveIcon.style.display = "none";
        editIcon.style.display = "inline";
        document.getElementById("txt_shift_in_afternoon").setAttribute("readonly", true);
        document.getElementById("txt_shift_out_afternoon").setAttribute("readonly", true);
    }
}
//  Table attendace
var dialog = document.getElementById('dialog_overlay_for_employee');

function handleClickOutside(event) {
    if (event.target === dialog) {
        dialog.style.display = 'none'; // Hide the dialog
    }
}

document.addEventListener('click', handleClickOutside);

var employees = document.querySelectorAll(".item_employ");
employees.forEach(function (employee) {
    employee.addEventListener('click', function () {
        document.getElementById('dialog_overlay_for_employee').style.display = 'block';
    });
});

var permissionforms = document.querySelectorAll(".sub_absent");
permissionforms.forEach(function (form) {
    form.addEventListener('click', function () {
        var isPending = form.classList.contains('status_pending');
        var buttonOption = document.querySelector('.button_option');
        buttonOption.style.display = isPending ? 'flex' : 'none';
        document.getElementById('dialog_overlay_permission_form').style.display = 'block';

    });
});
document.getElementById('close-dialog-permission-btn').addEventListener('click', function () {
    document.getElementById('dialog_overlay_permission_form').style.display = 'none';
})