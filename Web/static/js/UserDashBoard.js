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



document.addEventListener("DOMContentLoaded", function () {

    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // getMonth() trả về giá trị từ 0-11
    const year = today.getFullYear();
    const monthYear = `${year}-${month}`;

    // Gán giá trị cho input
    document.getElementById('bdaymonth').value = monthYear;
});
//-------------------------------------- Graph Circel working- absent -----------------------
const data = {
    labels: ['Working', 'Absent'],
    datasets: [{
        data: [80, 20],
        backgroundColor: [
            '#0086CA',
            '#FC1414'
        ],
        borderWidth: 1
    }]
};

// Cấu hình cho biểu đồ
const config = {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            title: {
                display: true
                // text: 'Phần trăm nhân viên đi làm và vắng mặt'
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.raw + '%';
                        return label;
                    }
                }
            }
        }
    }
};

// Vẽ biểu đồ
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);