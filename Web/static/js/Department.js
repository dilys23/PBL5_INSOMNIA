document.getElementById('btn_addDepart').addEventListener('click', function() {
    document.getElementById('dialog_overlay').style.display = 'block';
  });
  
  document.getElementById('close-dialog-btn').addEventListener('click', function() {
    document.getElementById('dialog_overlay').style.display = 'none';
  });
  $("input").on("change", function() {
    this.setAttribute(
        "data-date",
        moment(this.value, "YYYY-MM-DD")
            .format( this.getAttribute("data-date-format") )
    )
}).trigger("change")
  