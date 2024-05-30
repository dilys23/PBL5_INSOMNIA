// button_change_price
function toggleButtons() {
    const changeButton = document.getElementById('button_change_price');
    const saveButton = document.getElementById('button_save_price');
    const textWageInput = document.querySelector('.text_wage');

    if (changeButton.style.display === 'none') {
        changeButton.style.display = 'inline-block';
        saveButton.style.display = 'none';
        textWageInput.setAttribute('readonly', true);
    } else {
        changeButton.style.display = 'none';
        saveButton.style.display = 'inline-block';
        textWageInput.removeAttribute('readonly');
        textWageInput.focus();
        textWageInput.setSelectionRange(textWageInput.value.length, textWageInput.value.length);
    }
}

function editWage() {
    console.log('Edit Wage');
}

function saveWage() {
    console.log('Save Wage');
}

function create_employee(user) {
    const employee_detail = document.createElement("div")
    employee_detail.className = "employee_detail"


    const row_name = document.createElement("div")
    row_name.className = "text_column"
    row_name.textContent = user.personName

    const row_department = document.createElement("div")
    row_department.className = "text_column"
    row_department.textContent = user.departmentName

    const row_sumaryhour = document.createElement("div")
    row_sumaryhour.className = "text_column"
    row_sumaryhour.textContent = user.sumaryhour

    const row_salary = document.createElement("div")
    row_salary.className = "text_column"
    row_salary.textContent = user.salary

    const row_status = document.createElement("div")
    row_status.className = "status_column"

    const row_received = document.createElement("div")
    row_received.className = user.status ? "status_received_money" : "status_not_received_money"
    row_received.textContent = user.status ? "Received" : "Not Received"

    row_status.appendChild(row_received)

    employee_detail.appendChild(row_name)
    employee_detail.appendChild(row_department)
    employee_detail.appendChild(row_sumaryhour)
    employee_detail.appendChild(row_salary)
    employee_detail.appendChild(row_status)

    return employee_detail
}

var currentDate = new Date().toLocaleDateString("vi-VN").split("/")
const day = currentDate[0]
var month = currentDate[1]
const year = currentDate[2]
if (month.length === 1) {
    month = "0" + month
}
currentDate = year + "-" + month + "-" + day

const CONST_BASE_HTTP = "http://localhost:5126/api/admin"
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

const board_wage = document.querySelector('.board_wage')
const input_board_wage = board_wage.querySelector('.text_wage')
const table_employee_content = document.querySelector(".employee_list_detail")
const board_payment_price = document.querySelector('.board_payment_price')
const employee_highest_name = document.querySelector('.employee_highest_name')
const employee_highest_salary = document.querySelector('.employee_highest_salary')
const department_options = document.querySelector('.department_options')

getData(`${CONST_BASE_HTTP}/Salary`, token)
    .then(data => {
        return data.json()
    })
    .then(salaries => {
        var salary = salaries[0]
        input_board_wage.value = salary.salaryPerHour
        input_board_wage.id = salary.salaryId
    })
    .catch(err => {
        console.log(err)
    })

getData(`${CONST_BASE_HTTP}/Departments`, token).then((data) => {
    return data.json()
})
    .then(departments => {
        departments.forEach(department => {
            const option = document.createElement("option")
            option.value = department.departmentId
            option.textContent = department.departmentName
            department_options.appendChild(option)
        })
    })
    .catch(err => {
        console.log(err)
    })




function loadDataTable() {
    table_employee_content.innerHTML = ""
    getData(`${CONST_BASE_HTTP}/SalaryPay/${currentDate}`, token)
        .then(data => {
            return data.json()
        })
        .then((salaryPays) => {
            let totalPayment = 0
            let userHighest = {
                personName: "None",
                salary: 0
            }
            salaryPays.forEach(salarypay => {
                totalPayment += salarypay.moneyPay
                console.log(salarypay)
                if (userHighest.salary < salarypay.moneyPay) {
                    userHighest.personName = salarypay.personName
                    userHighest.salary = salarypay.moneyPay
                }
                var user = {
                    userId: salarypay.userId,
                    personName: salarypay.personName,
                    departmentId: salarypay.departmentId,
                    departmentName: salarypay.departmentName,
                    sumaryhour: salarypay.sumaryHour.toFixed(2),
                    salary: salarypay.moneyPay.toFixed(2),
                    status: false
                }
                var row = create_employee(user)
                row.setAttribute("departmentId", user.departmentId)
                row.style.display = 'none'
                if (department_options.value == "department-all") {
                    row.style.display = 'flex'
                } else {
                    if (row.getAttribute("departmentId") == department_options.value) {
                        row.style.display = 'flex'
                    }
                }
                table_employee_content.appendChild(row)
            })

            board_payment_price.textContent = totalPayment.toFixed(2)
            employee_highest_name.textContent = userHighest.personName
            employee_highest_salary.textContent = userHighest.salary.toFixed(2)
        })
        .catch(err => {
            console.log(err)
        })
}


document.addEventListener("DOMContentLoaded", loadDataTable())
department_options.addEventListener('change', loadDataTable);