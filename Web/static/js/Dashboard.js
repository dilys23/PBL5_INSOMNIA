
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
                            
connection.onclose(async () => {
    await start();
});
                            
start();



connection.on("ReceiveAttendance", req => {
    var userId = req.userId
    var year = new Date(req.time).getFullYear() + ""
    var time = (year === "1") ? "undefined" : new Date(req.time).toLocaleString('vi-VN')
    var status = req.status
    console.log(userId, time, status)
    var row = document.getElementById(userId)
    if (row) {
      var cells = row.getElementsByTagName("div");
      cells[2].textContent = time
      cells[2].textContent = time

      cells[3].textContent = status
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




function loadDataTable() {
    tbody.innerHTML = ""
    var departmentName = ""
    var departmentId = selectBox.value
    if (departmentId != "department-All") {
        getData(`${CONST_BASE_HTTP}/Departments/${departmentId}`, token).then((data) => {
            return data.json()
          })
            .then(department => {
              departmentName = department.departmentName
              return getData(`${CONST_BASE_HTTP}/WorkingStatusAdmin`, token)
                        .then((statusData) => statusData.json())
                        .then((listWorkingStatus) => {
                            return {users: department.users, listWorkingStatus: listWorkingStatus}
              })
            })
            .then(({users, listWorkingStatus}) => {
              users.forEach(user => {
                
                var s = listWorkingStatus.find(d => {return d.userId === user.id})
                  var year = new Date(s.time).getFullYear() + ""
                  var time = (year === "1") ? "undefined" : new Date(s.time).toLocaleString('vi-VN')
                  var status = s.status
                var testuser = {
                  id: user.id,
                  name: user.personName,
                  department: departmentName,
                  time_in: time,
                  time_out: time,
                  name_shift: "Morning",
                  status: status
                }
                var userRow = createEmployee(testuser);
                tbody.appendChild(userRow);
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
                        return {departments: departments, listWorkingStatus: listWorkingStatus}
                      })
          })
            .then(({departments, listWorkingStatus}) => {
              departments.forEach(department => {
                var dName = department.departmentName
                department.users.forEach(user => {
                  var s = listWorkingStatus.find(d => {return d.userId === user.id})
                  var year = new Date(s.time).getFullYear() + ""
                  var time = (year === "1") ? "undefined" : new Date(s.time).toLocaleString('vi-VN')
                  var status = s.status
                  var testuser = {
                    id: user.id,
                    name: user.personName,
                    department: dName,
                    time_in: time,
                    time_out: time,
                    name_shift: "Morning",
                    status: status
                  }
                  var userRow = createEmployee(testuser);
                  tbody.appendChild(userRow);
                })
              })
              
            }).catch((err) => {
              console.log(err)
            })
    }
}



selectBox.addEventListener("change", loadDataTable)
document.addEventListener("DOMContentLoaded", loadDataTable())