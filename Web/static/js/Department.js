var btnEdit = document.getElementById("btn_edit_shift_in1");
var btnSave = document.getElementById("btn_save_shift_out1");

btnEdit.addEventListener("mousedown", function () {
    btnEdit.style.background = "var(--icon-blue)";
});
btnEdit.addEventListener("mouseup", function () {
    btnEdit.style.background = "var(--icon-blue-edit)";
});

btnSave.addEventListener("mousedown", function () {
    btnSave.style.background = "var(--icon-blue)";
});
btnSave.addEventListener("mouseup", function () {
    btnSave.style.background = "var(--icon-blue-edit)";
});
btnEdit.addEventListener("click", function () {
    document.getElementById("txt_shift_in1").removeAttribute("readonly");
    document.getElementById("txt_shift_in1").focus();
    document.getElementById("txt_shift_out1").removeAttribute("readonly");
});
btnSave.addEventListener("click", function () {
    document.getElementById("txt_shift_in1").setAttribute("readonly", true);
    document.getElementById("txt_shift_out1").setAttribute("readonly", true);
});

var btnEdit2 = document.getElementById("btn_edit_shift_in2");
var btnSave2 = document.getElementById("btn_save_shift_out2");

btnEdit2.addEventListener("mousedown", function () {
    btnEdit2.style.background = "var(--icon-blue)";
});
btnEdit2.addEventListener("mouseup", function () {
    btnEdit2.style.background = "var(--icon-blue-edit)";
});

btnSave2.addEventListener("mousedown", function () {
    btnSave2.style.background = "var(--icon-blue)";
});
btnSave2.addEventListener("mouseup", function () {
    btnSave2.style.background = "var(--icon-blue-edit)";
});
btnEdit2.addEventListener("click", function () {
    document.getElementById("txt_shift_in2").removeAttribute("readonly");
    document.getElementById("txt_shift_in2").focus();
    document.getElementById("txt_shift_out2").removeAttribute("readonly");
});
btnSave2.addEventListener("click", function () {
    document.getElementById("txt_shift_in2").setAttribute("readonly", true);
    document.getElementById("txt_shift_out2").setAttribute("readonly", true);
});

document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các phần tử item_department
    const departments = document.querySelectorAll('.item_department');

    // Lặp qua mỗi phần tử để thêm sự kiện click
    departments.forEach(department => {
        department.addEventListener('click', function () {
            // Xóa lớp 'item_choose' khỏi tất cả các phần tử
            departments.forEach(item => {
                item.classList.remove('item_choose');
            });

            // Thêm lớp 'item_choose' cho phần tử được click
            this.classList.add('item_choose');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Lấy danh sách các phần tử item_employee
    const employees = document.querySelectorAll('.item_employee');

    // Lặp qua từng phần tử và thêm sự kiện click
    employees.forEach(employee => {
        employee.addEventListener('click', function () {
            showDialog();
        });
    });

    // Hàm hiển thị dialog
    function showDialog() {
        const dialogOverlay = document.getElementById('dialog_overlay_info_employee');
        dialogOverlay.style.display = 'block';
    }

    // Đóng dialog khi click vào nút đóng
    // const closeBtn = document.getElementById('close-dialog-btn');
    // closeBtn.addEventListener('click', function () {
    //     const dialogOverlay = document.getElementById('dialog_overlay_info');
    //     dialogOverlay.style.display = 'none';
    // });
});
document.getElementById('btn_close_employee').addEventListener('click', function () {
    document.getElementById('dialog_overlay_info_employee').style.display = 'none';
});
document.getElementById('btn_add_employee').addEventListener('click', function () {
    document.getElementById('dialog_overlay_add_employee').style.display = 'block';
});
document.getElementById('btn_close_add_employee').addEventListener('click', function () {
    document.getElementById('dialog_overlay_add_employee').style.display = 'none';
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


document.getElementById('close-dialog-add-btn').addEventListener('click', function () {
    document.getElementById('dialog_overlay_add_department').style.display = 'none';
});
document.getElementById("btn_more_department").addEventListener("click", function () {
    console.log("click vao button");
    var dropdown = document.getElementById("dropdown_department");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});
document.getElementById('dialog_add_department').addEventListener('click', function () {
    document.getElementById('dialog_overlay_add_department').style.display = 'block';
    document.getElementById("dropdown_department").style.display = 'none';
});

document.getElementById('dialog_edit_department').addEventListener('click', function () {
    document.getElementById('dialog_overlay_edit_department').style.display = 'block';
    document.getElementById("dropdown_department").style.display = 'none';
});

document.getElementById('close-dialog-edit-btn').addEventListener('click', function () {
    document.getElementById('dialog_overlay_edit_department').style.display = 'none';
});