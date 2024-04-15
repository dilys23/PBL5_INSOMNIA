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


var editButtons = document.getElementsByClassName("btn_edit");

// Loop through each edit button and attach click event listener
for (var i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", function() {
        // Show the edit dialog when clicked
        showEditDialog();
    });
}

// Function to show the edit dialog
function showEditDialog() {
    document.getElementById('dialog_overlay_edit').style.display = 'block';
}

// Function to close the edit dialog
document.getElementById("close-dialog-edit-btn").addEventListener("click", function() {
    closeEditDialog();
});

function closeEditDialog() {
    document.getElementById('dialog_overlay_edit').style.display = 'none';
}
  