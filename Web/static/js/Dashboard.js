// var employeeHeads = document.querySelectorAll(".item_employee_head");
// employeeHeads.forEach(function (head) {
//     head.addEventListener('click', function () {
//         console.log('co nhan ne');
//         var parent = this.closest('.item_employee');
//         var absent = parent.querySelector('.item_employee_absent');
//         if (absent) {
//             if (absent.classList.contains('active')) {
//                 absent.classList.remove('active');
//             } else {
//                 absent.classList.add('active');
//             }
//         } else {
//             console.log('Không tìm thấy phần tử .item_employee_absent');
//         }
//     });
// });

const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5126/Attendance")
    .configureLogging(signalR.LogLevel.Information)
    .build();

async function start() {
    try {
        await connection.start();
        console.log("SignalR Connected.");
    } catch (err) {
        console.log(err);
        setTimeout(start, 5000);
    }
};



start();
connection.onclose(async () => {
    await start();
});


// (year_before === "1") ? "undefined" : new Date(stest[1].time).toLocaleString('vi-VN')


connection.on("ReceiveAttendance", req => {
    var userId_new = req.userId
    var time_new = new Date(req.time).toLocaleString("vi-VN")
    var status_new = req.status
    var row = document.getElementById(userId_new)
    if (row) {
        var cells = row.getElementsByTagName("div")
        cell_in = cells[3]
        cell_out = cells[6]
        cell_status = cells[9]
        if (status_new === "In") {
            if (cell_status.textContent === "Working") {
                cell_in.textContent = time_new
            }
            else {
                cell_in.textContent = time_new
                cell_out.textContent = "Loading . . ."
                cell_status.textContent = "Working"
                cell_status.className = "status_employ"
            }
        }
        else {
            if (cell_status.textContent === "Working") {
                cell_status.textContent = "Absent"
                cell_status.className = "status_employ_absent"
                cell_out.textContent = time_new
            }
            else {
                cell_out.textContent = time_new
            }
        }
    }



})



async function start() {
    try {
        await connection.start();
        console.log("SignalR Connected.");
    } catch (err) {
        console.log(err);
        setTimeout(start, 5000);
    }
};

connection.onclose(async () => {
    await start();
});

start();

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

const selectbox_status = document.querySelector('.status_options')
selectbox_status.addEventListener('change', () => {
    const list_employee = document.querySelector('.table_content')
    const list = list_employee.querySelectorAll('.item_employ')

    list.forEach(e => {
        e.style.display = 'none'
        if (e.classList.contains(selectbox_status.value)) {
            e.style.display = 'flex'
        }
        if (selectbox_status.value === "All") {
            e.style.display = 'flex'
        }
    })
})
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


var listemployees = document.querySelectorAll(".item_employee");
listemployees.forEach(function (employee) {
    employee.addEventListener('click', function () {
        document.getElementById('dialog_overlay_permission_form').style.display = 'block';
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

const employeeIcons = document.querySelectorAll('.item_employee_head');

function addStatusIcon(status) {
    let iconClasses;
    switch (status) {
        case "Disallow":
            iconClasses = ["fa-solid", "fa-triangle-exclamation", "status_disallow"];
            break;
        case "Waiting":
            iconClasses = ["fa-solid", "fa-spinner", "status_waiting"];
            break;
        case "Allow":
            iconClasses = ["fa-regular", "fa-circle-check", "status_allow"];
            break;
        default:
            console.warn("Unknown status:", status);
            return;
    }

    if (iconClasses) {
        employeeIcons.forEach(employ => {
            const wrapIcon = employ.querySelector('.wrap-icon');
            if (wrapIcon) {
                const icon = document.createElement('i');
                iconClasses.forEach(className => icon.classList.add(className));
                wrapIcon.appendChild(icon);
            }
        });
    }
}

const status = "Allow";

addStatusIcon(status);

function createEmployee(user) {
    const row = document.createElement("div");
    row.className = "item_employ";
    row.id = user.id;

    // Name
    const name_column = document.createElement("div");
    name_column.className = "name_employ"
    name_column.textContent = user.name;

    // Department
    const department_column = document.createElement("div");
    department_column.className = "depart_employ"
    department_column.textContent = user.department

    // Time-in
    const time_shift_in_column = document.createElement("div");
    time_shift_in_column.className = "wrap_time_shift_in"

    const time_shift_in = document.createElement("div");
    time_shift_in.className = "time_shift"
    time_shift_in.textContent = user.time_in

    const name_shift_in = document.createElement("div");
    name_shift_in.className = "name_shift"
    name_shift_in.textContent = user.name_shift

    time_shift_in_column.appendChild(time_shift_in)
    time_shift_in_column.appendChild(name_shift_in)

    // Time-out
    const time_shift_out_column = document.createElement("div");
    time_shift_out_column.className = "wrap_time_shift_out"

    const time_shift_out = document.createElement("div");
    time_shift_out.className = "time_shift"
    time_shift_out.textContent = user.time_out

    const name_shift_out = document.createElement("div");
    name_shift_out.className = "name_shift"
    name_shift_out.textContent = user.name_shift

    time_shift_out_column.appendChild(time_shift_out)
    time_shift_out_column.appendChild(name_shift_out)

    // Status
    const wrap_status_employ = document.createElement("div")
    wrap_status_employ.className = "wrap_status_employ"

    const status_employ = document.createElement("div")
    status_employ.className = (user.status === "In") ? "status_employ" : "status_employ_absent"
    status_employ.textContent = (user.status === "In") ? "Working" : "Absent"

    row.classList.add((user.status === "In") ? "Working" : "Absent")
    const select_status = selectbox_status.value
    row.style.display = 'none'
    if (row.classList.contains(select_status)) {
        row.style.display = 'flex'
    }
    if (select_status === 'All') {
        row.style.display = 'flex'
    }
    wrap_status_employ.appendChild(status_employ)

    row.appendChild(name_column)
    row.appendChild(department_column)
    row.appendChild(time_shift_in_column)
    row.appendChild(time_shift_out_column)
    row.appendChild(wrap_status_employ)

    return row

}


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


const selectBox = document.querySelector(".department_options");
const tbody = document.querySelector(".table_content");

getData(`${CONST_BASE_HTTP}/Departments`, token).then((data) => {
    return data.json()
})
    .then(departments => {
        departments.forEach(department => {
            const option = document.createElement("option");
            option.value = department.departmentId
            option.textContent = department.departmentName
            selectBox.appendChild(option)

        })
    }).catch((err) => {
        console.log(err)
    })


function create_shift(shift) {
    const sub_shift = document.createElement("div")
    sub_shift.className = "sub_shift"
    sub_shift.id = shift.shiftId

    const shift_name = document.createElement("div")
    shift_name.className = "sub_shift_name"
    shift_name.textContent = shift.shiftName

    const input_in = document.createElement("input")
    input_in.type = "text"
    input_in.value = shift.time_In
    input_in.className = "textview_shift"
    input_in.readOnly

    const input_out = document.createElement("input")
    input_out.type = "text"
    input_out.value = shift.time_Out
    input_out.className = "textview_shift"
    input_out.readOnly

    sub_shift.appendChild(shift_name)
    sub_shift.appendChild(input_in)
    sub_shift.appendChild(input_out)

    return sub_shift
}

const container_shift = document.querySelector('.container_shift')

getData(`${CONST_BASE_HTTP}/Shifts`, token)
    .then((data) => {
        console.log(data)
        return data.json()
    })
    .then(shifts => {
        shifts.forEach(s => {
            var shift = create_shift(s)
            container_shift.appendChild(shift)
        })
    })
    .catch(err => {
        console.log(err)
    })


function loadDataTable() {
    tbody.innerHTML = ""
    var departmentName = ""
    var departmentId = selectBox.value
    var select_status = selectbox_status.value
    if (departmentId != "department-All") {
        getData(`${CONST_BASE_HTTP}/Departments/${departmentId}`, token).then((data) => {
            return data.json()
        })
            .then(department => {
                departmentName = department.departmentName
                return getData(`${CONST_BASE_HTTP}/WorkingStatusAdmin`, token)
                    .then((statusData) => statusData.json())
                    .then((listWorkingStatus) => {
                        return { users: department.users, listWorkingStatus: listWorkingStatus }
                    })
            })
            .then(({ users, listWorkingStatus }) => {
                users.forEach(user => {
                    var stest = listWorkingStatus.filter(d => d.userId === user.id).sort((a, b) => new Date(b.time) - new Date(a.time))
                    if (stest.length == 2) {
                        var year_before = new Date(stest[1].time).getFullYear() + ""
                        var year_after = new Date(stest[0].time).getFullYear() + ""

                        var time_before = (year_before === "1") ? "undefined" : new Date(stest[1].time).toLocaleString('vi-VN')
                        var time_after = (year_after === "1") ? "undefined" : new Date(stest[0].time).toLocaleString('vi-VN')

                        var status = stest[0].status
                        var testuser = {
                            id: user.id,
                            name: user.personName,
                            department: departmentName,
                            time_in: (stest[0].status == "In") ? time_after : time_before,
                            time_out: (stest[0].status == "In") ? "Loading . . ." : time_after,
                            name_shift: "Morning",
                            status: status
                        }
                        var userRow = createEmployee(testuser);
                        tbody.appendChild(userRow);
                    }
                    else {
                        var year = new Date(stest[0].time).getFullYear() + ""
                        var time = (year === "1") ? "undefined" : new Date(stest[0].time).toLocaleString("vi-VN")
                        var status = stest[0].status
                        var testuser = {
                            id: user.id,
                            name: user.personName,
                            department: departmentName,
                            time_in: (stest[0].status == "In") ? time : "undefined",
                            time_out: (stest[0].status == "In") ? "Loading . . ." : time,
                            name_shift: "Morning",
                            status: status
                        }
                        var userRow = createEmployee(testuser);
                        tbody.appendChild(userRow);
                    }
                })
            }).catch((err) => {
                console.log(err)
            })
    }
    else {
        getData(`${CONST_BASE_HTTP}/Departments`, token).then((data) => {
            return data.json()
        }).then(departments => {
            return getData(`${CONST_BASE_HTTP}/WorkingStatusAdmin`, token)
                .then((statusData) => statusData.json())
                .then((listWorkingStatus) => {
                    return { departments: departments, listWorkingStatus: listWorkingStatus }
                })
        })
            .then(({ departments, listWorkingStatus }) => {
                departments.forEach(department => {
                    var dName = department.departmentName
                    department.users.forEach(user => {
                        var stest = listWorkingStatus.filter(d => d.userId === user.id).sort((a, b) => new Date(b.time) - new Date(a.time))
                        console.log(stest)
                        if (stest.length == 2) {
                            var year_before = new Date(stest[1].time).getFullYear() + ""
                            var year_after = new Date(stest[0].time).getFullYear() + ""

                            var time_before = (year_before === "1") ? "undefined" : new Date(stest[1].time).toLocaleString('vi-VN')
                            var time_after = (year_after === "1") ? "undefined" : new Date(stest[0].time).toLocaleString('vi-VN')

                            var status = stest[0].status
                            var testuser = {
                                id: user.id,
                                name: user.personName,
                                department: dName,
                                time_in: (stest[0].status == "In") ? time_after : time_before,
                                time_out: (stest[0].status == "In") ? "Loading . . ." : time_after,
                                name_shift: "Morning",
                                status: status
                            }
                            var userRow = createEmployee(testuser);
                            tbody.appendChild(userRow);
                        }
                        else {
                            var year = new Date(stest[0].time).getFullYear() + ""
                            var time = (year === "1") ? "undefined" : new Date(stest[0].time).toLocaleString("vi-VN")
                            var status = stest[0].status
                            var testuser = {
                                id: user.id,
                                name: user.personName,
                                department: dName,
                                time_in: (stest[0].status == "In") ? time : "undefined",
                                time_out: (stest[0].status == "In") ? "Loading . . ." : time,
                                name_shift: "Morning",
                                status: status
                            }
                            var userRow = createEmployee(testuser);
                            tbody.appendChild(userRow);
                        }
                    })
                })

            }).catch((err) => {
                console.log(err)
            })
    }
}



selectBox.addEventListener("change", loadDataTable)
document.addEventListener("DOMContentLoaded", loadDataTable())


// ----------------------------Dash board column -------------------------------
const departments = ['Design', 'Management', 'Development', 'Social', 'Marketing'];
const attendance = [70, 80, 60, 90, 80];
const absence = [30, 20, 40, 10, 20];

// Cấu hình dữ liệu cho biểu đồ
const data = {
    labels: departments,
    datasets: [
        {
            label: 'Working',
            data: attendance,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
            label: 'Absent',
            data: absence,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
    ]
}
const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Percent (%)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Department'
                },
                ticks: {
                    // maxRotation: 45,
                    // minRotation: 45,
                    font: {
                        size: 10
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                // text: 'Phần trăm nhân viên đi làm và vắng mặt theo từng department'
            }
        }
    }
};

// Vẽ biểu đồ
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

const months = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];

const attendanceForEmployee = [70, 80, 60, 90, 80, 75, 85, 65, 92, 78, 68, 88];
const absenceForEmployee = [30, 20, 40, 10, 20, 25, 15, 35, 8, 22, 32, 12];

// Cấu hình dữ liệu cho biểu đồ
const dataForEmploy = {
    labels: months,  // Thay đổi labels từ departments sang months
    datasets: [
        {
            label: 'Working',
            data: attendanceForEmployee,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
            label: 'Absent',
            data: absenceForEmployee,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
    ]
};

const configForEmploy = {
    type: 'bar',
    data: dataForEmploy,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Percent (%)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Month'
                },
                ticks: {
                    font: {
                        size: 10
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                // text: 'Phần trăm nhân viên đi làm và vắng mặt theo từng tháng'
            }
        }
    }
};

// Vẽ biểu đồ
const myChartForEmployee = new Chart(
    document.getElementById('chartForEmployee'),  // Đổi ID tương ứng với HTML của bạn
    configForEmploy
);
