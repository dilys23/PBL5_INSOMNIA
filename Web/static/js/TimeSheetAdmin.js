$("input").on("change", function() {
  this.setAttribute(
      "data-date",
      moment(this.value, "YYYY-MM-DD")
          .format( this.getAttribute("data-date-format") )
  )
}).trigger("change")


function createTrTag(user) 
{
  // Tạo một thẻ <tr>
  const row = document.createElement("tr");

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
  checkInCell.textContent = user.checkInTime; // Chỗ này bạn thay bằng dữ liệu giờ check in của user

  const checkOutCell = document.createElement("td");
  checkOutCell.className = "col_depart";
  checkOutCell.textContent = user.checkOutTime; // Chỗ này bạn thay bằng dữ liệu giờ check out của user

  const statusCell = document.createElement("td");
  statusCell.className = "col_depart";
  statusCell.textContent = user.status; // Chỗ này bạn thay bằng dữ liệu trạng thái của user

  // Thêm các cột dữ liệu vào thẻ <tr>
  row.appendChild(nameCell);
  row.appendChild(departmentCell);
  row.appendChild(checkInCell);
  row.appendChild(checkOutCell);
  row.appendChild(statusCell);

  return row;
}

const selectBox = document.querySelector(".department_options");
const tbody = document.getElementById("tbody-users");
async function getData(url = "", token)
{
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

getData("https://localhost:7100/api/Departments", token).then((data) => {
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
  var departmentName = ''
  var departmentId = selectBox.value
  if (departmentId != "department-All")
  {
    getData(`https://localhost:7100/api/Departments/${departmentId}`, token).then((data) => {
  return data.json()
})
.then(department => {
  departmentName = department.departmentName
  return department.users
})
.then((users) => {
  users.forEach(user => {
    console.log(user)
    var testuser = {
      name: user.personName,
  department: departmentName,
  checkInTime: "6h55p",
  checkOutTime: "11h20p",
  status: "OnTime"
    }
    var userRow = createTrTag(testuser);
    tbody.appendChild(userRow);
  })
}).catch((err) => {
  console.log(err)
})
  }
  else {
    getData(`https://localhost:7100/api/Departments`, token).then((data) => {
  return data.json()
})
.then(departments => {
  departments.forEach(department => {
    var dName = department.departmentName
    department.users.forEach(user => {
      var testuser = {
        name: user.personName,
    department: dName,
    checkInTime: "6h55p",
    checkOutTime: "11h20p",
    status: "OnTime"
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
  if (departmentId != "department-All")
  {
    getData(`https://localhost:7100/api/Departments/${departmentId}`, token).then((data) => {
  return data.json()
})
.then(department => {
  departmentName = department.departmentName
  return department.users
})
.then((users) => {
  users.forEach(user => {
    console.log(user)
    var testuser = {
      name: user.personName,
  department: departmentName,
  checkInTime: "6h55p",
  checkOutTime: "11h20p",
  status: "OnTime"
    }
    var userRow = createTrTag(testuser);
    tbody.appendChild(userRow);
  })
}).catch((err) => {
  console.log(err)
})
  }
  else {
    getData(`https://localhost:7100/api/Departments`, token).then((data) => {
  return data.json()
})
.then(departments => {
  departments.forEach(department => {
    var dName = department.departmentName
    department.users.forEach(user => {
      var testuser = {
        name: user.personName,
    department: dName,
    checkInTime: "6h55p",
    checkOutTime: "11h20p",
    status: "OnTime"
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