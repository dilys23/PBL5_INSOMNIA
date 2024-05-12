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

document.getElementById('btn_add_department').addEventListener('click', function () {
    document.getElementById('dialog_overlay_add_department').style.display = 'block';
});
document.getElementById('close-dialog-add-btn').addEventListener('click', function () {
    document.getElementById('dialog_overlay_add_department').style.display = 'none';
});
document.getElementById('btn_add_employee').addEventListener('click', function () {
    document.getElementById('dialog_overlay_add_employee').style.display = 'block';
});
document.getElementById('btn_close_add_employee').addEventListener('click', function () {
    document.getElementById('add_avatar').src = '../Img/image_default.webp';
    document.getElementById('dialog_overlay_add_employee').style.display = 'none';
});
// Lấy phần tử employee_detail
const employeeDetail = document.querySelectorAll('.employee_detail');

// Lặp qua từng phần tử employee_detail và thêm sự kiện click
employeeDetail.forEach(detail => {
    detail.addEventListener('click', () => {
        // Hiển thị phần tử detail_infor_employee
        const detailInforEmployee = document.getElementById('detail_infor_employee');
        const overlay = document.getElementById('overlay');
        detailInforEmployee.style.display = 'block';
        overlay.style.display = 'block';

        // Thêm hiệu ứng trượt từ phải sang trái
        detailInforEmployee.style.animation = 'slideInRight 0.5s forwards';
    });
});

window.addEventListener('scroll', function () {
    var detailEmployee = document.getElementById('detail_infor_employee');
    var currentScrollPos = window.pageYOffset;
    detailEmployee.style.top = currentScrollPos + 'px';
});
function showDetailEmployee() {
    var detailEmployee = document.getElementById('detail_infor_employee');
    var overlay = document.querySelector('.overlay');
    detailEmployee.style.display = 'block';
    overlay.style.display = 'block';
}
function hideDetailEmployee() {
    var detailEmployee = document.getElementById('detail_infor_employee');
    var overlay = document.getElementById('overlay');
    detailEmployee.style.animation = 'slideOutRight 0.5s forwards';
    setTimeout(function () {
        overlay.style.display = 'none';
    }, 500);
    setTimeout(function () {
        detailEmployee.style.display = 'none';
    }, 500);
}
function editInformation() {
    var editIcon = document.getElementById("wrap_edit_left");
    var saveIcon = document.getElementById("wrap_edit_right");

    if (editIcon.style.display === "none") {
        editIcon.style.display = "flex";
        saveIcon.style.display = "none";
    } else {
        document.getElementById("status_info").removeAttribute("readonly");
        document.getElementById("status_info").focus();
        document.getElementById("position_info").removeAttribute("readonly");
        document.getElementById("email_info").removeAttribute("readonly");
        document.getElementById("age_gender_info").removeAttribute("readonly");
        document.getElementById("ssn_info").removeAttribute("readonly");
        document.getElementById("phone_info").removeAttribute("readonly");
        editIcon.style.display = "none";
        saveIcon.style.display = "flex";
    }
}
function saveInformation() {
    var editIcon = document.getElementById("wrap_edit_left");
    var saveIcon = document.getElementById("wrap_edit_right");

    if (saveIcon.style.display === "none") {
        saveIcon.style.display = "flex";
        editIcon.style.display = "none";
    } else {
        saveIcon.style.display = "none";
        editIcon.style.display = "flex";
        document.getElementById("status_info").setAttribute("readonly", true);
        document.getElementById("position_info").setAttribute("readonly", true);
        document.getElementById("email_info").setAttribute("readonly", true);
        document.getElementById("age_gender_info").setAttribute("readonly", true);
        document.getElementById("ssn_info").setAttribute("readonly", true);
        document.getElementById("phone_info").setAttribute("readonly", true);
    }
} document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('btn_search_department');
    const departmentOptions = document.querySelector('.department_options');
    const name_department = document.getElementById('name_department');
    const editIcon = document.getElementById('btn_edit_depart');

    searchButton.addEventListener('click', function () {
        const selectedDepartment = departmentOptions.value;
        name_department.textContent = selectedDepartment;
        if (selectedDepartment === 'All Department') {
            editIcon.style.display = 'none';
        } else {
            editIcon.style.display = 'inline';
        }
    });
});
document.getElementById('btn_edit_depart').addEventListener('click', function () {
    document.getElementById('dialog_overlay_edit_department').style.display = 'block';
});
document.getElementById('close-dialog-edit-btn').addEventListener('click', function () {
    document.getElementById('dialog_overlay_edit_department').style.display = 'none';
});
function chooseAvatar() {
    // Kích hoạt sự kiện click trên input file
    document.getElementById('avatar_input').click();
}

function uploadAvatar(event) {
    var selectedFile = event.target.files[0];

    if (selectedFile) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var avatar = document.getElementById('add_avatar');
            avatar.src = event.target.result;
        };
        reader.readAsDataURL(selectedFile);
    }
}