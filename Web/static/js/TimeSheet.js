  document.getElementById('btn_information').addEventListener('click', function() {
    document.getElementById('dialog_overlay').style.display = 'block';
  });
  
  document.getElementById('close-dialog-btn').addEventListener('click', function() {
    document.getElementById('dialog_overlay').style.display = 'none';
  });

  document.querySelectorAll('.icon_calendar').forEach(icon => {
    icon.addEventListener('click', function() {
        const options = this.nextElementSibling;
        options.classList.toggle('show');
    });
});

// Thong ke

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
