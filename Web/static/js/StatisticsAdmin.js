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
    

    var pie = new ej.charts.AccumulationChart({
        series: [{
          pointColorMapping: "color",
            dataSource: [
                { 'x': 'On Time', y: 80 , color: 'rgba(80, 196, 255, 0.63)'},
                { 'x': 'Late', y: 15 , color: 'rgba(231, 255, 84, 0.7)'},
                { 'x': 'Absent', y: 5 , color: 'rgba(235, 18, 18, 0.5)'}
            ],
            dataLabel: {
                visible: false,
                position: 'Inside'
            },
            xName: 'x',
            yName: 'y',
            
            
            
        }],
        legendSettings: { visible: false },
        tooltip: { enable: true, format: '${point.x}:<b> ${point.y}%<b>' },
      });
      pie.appendTo('#pie');
      
