
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
}
document.addEventListener('DOMContentLoaded', function () {
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
var permissionforms = document.querySelectorAll(".item_permission");
permissionforms.forEach(function (form) {
    form.addEventListener('click', function () {
        var isPending = form.classList.contains('item_waiting');
        var buttonOption = document.querySelector('.button_option');
        buttonOption.style.display = isPending ? 'flex' : 'none';
        document.getElementById('dialog_overlay_permission_form').style.display = 'block';

    });
});
document.getElementById('close-dialog-permission-btn').addEventListener('click', function () {
    document.getElementById('dialog_overlay_permission_form').style.display = 'none';
})
function addIcons() {
    var items = document.querySelectorAll('.item_permission');

    items.forEach(function (item) {
        var statusElement = item.querySelector('.name_status');
        var statusText = statusElement.textContent.trim();
        var icon = document.createElement('i');

        // Remove existing icons if present
        var existingIcon = item.querySelector('i');
        if (existingIcon) {
            existingIcon.remove();
        }

        // Check status text and add the corresponding class and icon
        if (statusText === 'Allow') {
            item.classList.add('item_allow');
            icon.classList.add('fa-regular', 'fa-circle-check');
        } else if (statusText === 'Disallow') {
            item.classList.add('item_disallow');
            icon.classList.add('fa-solid', 'fa-triangle-exclamation');
        } else if (statusText === 'Waiting') {
            item.classList.add('item_waiting');
            icon.classList.add('fa-solid', 'fa-spinner');
        }

        // Append the icon to the status permission element
        var statusPermission = item.querySelector('.item_status_permission');
        statusPermission.appendChild(icon);
    });
}

// Call the function to add icons
// addIcons();




CONST_BASE_HTTP = "http://localhost:5126/api/admin"
async function getData(url = "", token) {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        mode: "cors"
    })
    return response
}
const token = sessionStorage.getItem("token");
const selectBox = document.querySelector(".department_options")

async function postData(url = "", body, token) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        mode: "cors",
        body: JSON.stringify(body)
    })
    return response
}


document.getElementById('add_department').addEventListener('click', () => {
    const departmentName = document.querySelector('.txt_name_department').value
    const body = {
        departmentName: departmentName
    }
    postData(`${CONST_BASE_HTTP}/Departments`, body, token)
        .then(data => {
            return data.json()
        })
        .then(department => {
            const option = document.createElement("option")
            option.value = department.departmentId
            option.textContent = department.departmentName
            selectBox.appendChild(option)
            document.getElementById('dialog_overlay_add_department').style.display = 'none'
        })
        .catch(err => {
            console.log(err)
        })
    
})

// getData(`${CONST_BASE_HTTP}/Departments`, token)
//     .then(data => {
//         return data.json()
//     })
//     .then(departments => {
//         departments.forEach(department => {
//             const option = document.createElement("option")
//             option.value = department.departmentId
//             option.textContent = department.departmentName
//             selectBox.appendChild(option)
//         })
//     })
//     .catch(err => {
//         console.log(err)
//     })


function create_permission(dayoff) {

    const icon = document.createElement("i")
    var css = ""
    if (dayoff.status === "Waiting") {
        icon.classList.add('fa-solid', 'fa-spinner');
        css = 'item_waiting'
    }

    if (dayoff.status === "Allow") {
        icon.classList.add('fa-regular', 'fa-circle-check')
        css = 'item_allow'
    }

    if (dayoff.status === "Disallow") {
        icon.classList.add('fa-solid', 'fa-triangle-exclamation')
        css = 'item_disallow'
    }


    const row = document.createElement("div")
    row.className = `item_permission ${css}`
    row.addEventListener('click', () => {
        permission = {
            userId: dayoff.id,
            time: dayoff.time.split("T")[0],
            status: dayoff.status,
            name: dayoff.name
        }
        click_permission(permission)
    })

    // date
    const date = document.createElement("div")
    date.className = `item_date_permission`
    date.textContent = new Date(dayoff.time).toLocaleString("vi-VN").split(" ")[1]
    // status
    const status = document.createElement("div")
    status.className = "item_status_permission"

    const detail_status = document.createElement("div")
    detail_status.className = "name_status"
    detail_status.textContent = dayoff.status

    status.appendChild(detail_status)

    row.appendChild(date)
    row.appendChild(status)
    row.appendChild(icon)

    return row

}

function click_permission(permission) {
    console.log(permission)
    var buttonOption = document.querySelector('.button_option');
    buttonOption.style.display = (permission.status === 'Waiting') ? 'flex' : 'none'
    const display_permission = document.getElementById('dialog_overlay_permission_form')
    const name_cell = display_permission.querySelectorAll('.item_permission')[0].getElementsByClassName('content_form')[0]
    const date_cell = display_permission.querySelectorAll('.item_permission')[1].getElementsByClassName('content_form')[0]
    const reason_cell = display_permission.querySelectorAll('.item_permission')[2].getElementsByClassName('content_form')[0]

    getData(`${CONST_BASE_HTTP}/DayOffAdmin/${permission.time}/${permission.userId}`, token)
        .then(data => {
            return data.json()
        })
        .then(data => {
            name_cell.textContent = permission.name
            date_cell.textContent = new Date(data.date).toLocaleString("vi-VN").split(" ")[1]
            reason_cell.textContent = data.reason
            display_permission.style.display = 'block';
            return { userId: permission.userId, time: data.date }
        })
        .then(({ userId, time }) => {
            const accept_btn = document.getElementById('accept_permission')
            const reject_btn = document.getElementById('reject_permission')
            accept_btn.addEventListener('click', () => {
                const reply = {
                    userId: userId,
                    time: time,
                    status: "Allow"
                }
                reply_permission(reply)
            })
            reject_btn.addEventListener('click', () => {
                const reply = {
                    userId: userId,
                    time: time,
                    status: "Disallow"
                }
                reply_permission(reply)
            })
        })
        .catch(err => {
            console.log(err)
        })


function create_dialog(user) {

}
}
function reply_permission(reply) {
    console.log(reply)
}

function clickDetailEmployee(userId) {
    // Hiển thị phần tử detail_infor_employee
    const detailInforEmployee = document.getElementById('detail_infor_employee');
    const overlay = document.getElementById('overlay');
    detailInforEmployee.style.display = 'block';
    overlay.style.display = 'block';

    console.log(detailInforEmployee)
    console.log(userId)
    const departmentHeader = detailInforEmployee.querySelector('.detail_infor_employee_head_name_department')
    const name_employ = detailInforEmployee.querySelector('.name_employee')
    const address = detailInforEmployee.querySelector('#position_info')
    const email = detailInforEmployee.querySelector('#email_info')
    const age_gender_info = detailInforEmployee.querySelector('#age_gender_info')
    const phone_info = detailInforEmployee.querySelector('#phone_info')
    const permission_list = detailInforEmployee.querySelector('.permission_list')
    permission_list.innerHTML = ""
    console.log(permission_list)
    getData(`${CONST_BASE_HTTP}/UsersAdmin/${userId}`, token).then(data => {
        return data.json()
    })
        .then(user => {
            return getData(`${CONST_BASE_HTTP}/DayOffAdmin/user/${user.id}`, token)
                .then(data => data.json())
                .then(listDayOff => {
                    return { user: user, listDayOff: listDayOff }
                })
        })
        .then(({ user, listDayOff }) => {
            departmentHeader.textContent = user.departmentName
            name_employ.textContent = user.personName
            address.value = user.address
            email.value = user.email
            age_gender_info.value = user.gender
            phone_info.value = user.phoneNumber

            listDayOff.forEach(d => {
                var dayoff = {
                    name: user.personName,
                    id: d.userId,
                    time: d.date,
                    status: d.status
                }
                console.log(dayoff)
                var row = create_permission(dayoff)
                permission_list.appendChild(row)
            })
        })
        .catch(err => {
            console.log(err)
        })
    // Thêm hiệu ứng trượt từ phải sang trái
    detailInforEmployee.style.animation = 'slideInRight 0.5s forwards';
}

function createEmployee(user) {
    const row = document.createElement("div");
    row.className = "employee_detail"
    row.id = user.id
    row.addEventListener("click", () => {
        clickDetailEmployee(row.id)
    })

    // img
    const avatar = document.createElement("div")
    avatar.className = "wrap-ava"

    const img = document.createElement("img")
    img.src = "../Img/avatar.jfif"
    img.alt = ""
    img.className = "employee_detail_avatar"
    avatar.appendChild(img)

    // name
    const name = document.createElement("div")
    name.className = "employee_detail_text"
    name.textContent = user.name

    // departmentName
    const departmentName = document.createElement("div")
    departmentName.className = "employee_detail_text"
    departmentName.textContent = user.departmentName

    // phone
    const phone = document.createElement("div")
    phone.className = "employee_detail_text"
    phone.textContent = user.phoneNumber

    row.appendChild(avatar)
    row.appendChild(name)
    row.appendChild(departmentName)
    row.appendChild(phone)

    return row

}

getData(`${CONST_BASE_HTTP}/Departments`, token)
    .then(data => {
        return data.json()
    })
    .then(departments => {
        departments.forEach(department => {
            const option = document.createElement("option")
            option.value = department.departmentId
            option.textContent = department.departmentName
            selectBox.appendChild(option)
        })
    })
    .catch(err => {
        console.log(err)
    })

const tbody = document.querySelector(".employee_list_detail")

function loadDataTable() {
    tbody.innerHTML = ""
    var departmentName = ""
    var departmentId = selectBox.value
    if (departmentId != "department-all") {
        getData(`${CONST_BASE_HTTP}/Departments/${departmentId}`, token).then(data => {
            return data.json()
        })
            .then(department => {
                departmentName = department.departmentName
                return department.users
            })
            .then(users => {
                users.forEach(user => {
                    var userAppend = {
                        id: user.id,
                        name: user.personName,
                        departmentName: user.departmentName,
                        phoneNumber: user.phoneNumber
                    }
                    var userRow = createEmployee(userAppend)
                    tbody.appendChild(userRow)
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    else {
        getData(`${CONST_BASE_HTTP}/Departments`, token).then(data => {
            return data.json()
        })
            .then(departments => {
                departments.forEach(department => {
                    department.users.forEach(user => {
                        var userAppend = {
                            id: user.id,
                            name: user.personName,
                            departmentName: user.departmentName,
                            phoneNumber: user.phoneNumber
                        }
                        var userRow = createEmployee(userAppend)
                        tbody.appendChild(userRow)
                    })
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

selectBox.addEventListener('change', loadDataTable);
document.addEventListener("DOMContentLoaded", loadDataTable())

// const employeeDetail = document.querySelectorAll('.employee_detail');
// console.log(employeeDetail)
// // Lặp qua từng phần tử employee_detail và thêm sự kiện click
// employeeDetail.forEach(detail => {
//     detail.addEventListener('click', () => {
//         // Hiển thị phần tử detail_infor_employee
//         const detailInforEmployee = document.getElementById('detail_infor_employee');
//         const overlay = document.getElementById('overlay');
//         detailInforEmployee.style.display = 'block';
//         overlay.style.display = 'block';

//         // Thêm hiệu ứng trượt từ phải sang trái
//         detailInforEmployee.style.animation = 'slideInRight 0.5s forwards';
//     });
// });