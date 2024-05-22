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