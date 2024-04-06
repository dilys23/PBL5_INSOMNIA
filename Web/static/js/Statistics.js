    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    var currentMonthYear = year + "-" + month;
    document.getElementById("bdaymonth").value = currentMonthYear;

    document.querySelectorAll('.btn_see').forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('dialog_overlay').style.display = 'block';
        });
    });
    
    document.getElementById('btn_close').addEventListener('click', function() {
        document.getElementById('dialog_overlay').style.display = 'none';
    });
    
