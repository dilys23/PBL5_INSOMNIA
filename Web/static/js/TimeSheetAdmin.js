// import "@microsoft/signalr"

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
    var cells = row.getElementsByTagName("td");
    cells[2].textContent = time
    cells[3].textContent = status
  }
})


$("input").on("change", function () {
  this.setAttribute(
    "data-date",
    moment(this.value, "YYYY-MM-DD")
      .format(this.getAttribute("data-date-format"))
  )
}).trigger("change")



function generateDatabaseDateTime(date) {
  return date.toISOString().replace("T"," ").substring(0, 19);
}

CONST_BASE_HTTP = "http://localhost:5126/api/admin"
function createTrTag(user) {
  // Tạo một thẻ <tr>
  const row = document.createElement("tr");
  row.id = user.id

  // Tạo các cột dữ liệu cho user
  const nameCell = document.createElement("td");
  nameCell.className = "col_name";
  const img = document.createElement("img");
  img.src = "../Img/ava.jpg";
  img.alt = "";
  img.className = "img_ava";
  const nameDiv = document.createElement("div");
  nameDiv.className = "table_name_employee";
  nameDiv.textContent = user.name; // Chỗ này bạn thay bằng dữ liệu tên của user
  nameCell.appendChild(img);
  nameCell.appendChild(nameDiv);

  const departmentCell = document.createElement("td");
  departmentCell.className = "col_depart";
  departmentCell.textContent = user.department; // Chỗ này bạn thay bằng dữ liệu phòng ban của user

  const checkInCell = document.createElement("td");
  checkInCell.className = "col_depart";
  checkInCell.textContent = user.time; // Chỗ này bạn thay bằng dữ liệu giờ check in của user

  const statusCell = document.createElement("td");
  statusCell.className = "col_depart";
  statusCell.textContent = user.status; // Chỗ này bạn thay bằng dữ liệu trạng thái của user

  // Thêm các cột dữ liệu vào thẻ <tr>
  row.appendChild(nameCell);
  row.appendChild(departmentCell);
  row.appendChild(checkInCell);
  row.appendChild(statusCell);

  return row;
}

const selectBox = document.querySelector(".department_options");
const tbody = document.getElementById("tbody-users");
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


function getWorkingStatus()
{
  var listWorkingStatus = []
  const data = getData(`${CONST_BASE_HTTP}/WorkingStatusAdmin`, token)
    .then(data => {
      return data.json()
    })
    .then(data => {
      data.forEach(d => {
        let workingStatus = {
          "status": d.status,
          "userId": d.userId,
          "time": d.time
        }
        listWorkingStatus.push(workingStatus)
      })
    })
    .catch(err => {
      console.log(err)
    })
  return listWorkingStatus
}



function loadDataTable() {
  tbody.innerHTML = ""
  var departmentName = ''
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
            time: time,
            status: status
          }
          var userRow = createTrTag(testuser);
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
              time: time,
              status: status
            }
            var userRow = createTrTag(testuser);
            tbody.appendChild(userRow);
          })
        })
        
      }).catch((err) => {
        console.log(err)
      })
  }
}

selectBox.addEventListener("change", () => {
  tbody.innerHTML = ""
  var departmentName = ''
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
            time: time,
            status: status
          }
          console.log(testuser)
          var userRow = createTrTag(testuser);
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
              time: time,
              status: status
            }
            var userRow = createTrTag(testuser);
            tbody.appendChild(userRow);
          })
        })
        
      }).catch((err) => {
        console.log(err)
      })
  }
})

document.addEventListener("DOMContentLoaded", loadDataTable())