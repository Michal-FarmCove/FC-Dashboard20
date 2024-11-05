function toggleInputs(checkbox, rowId) {
    const row = document.getElementById(rowId);
    const dateCell = row.querySelector('.date-cell');
    const amountCell = row.querySelector('.amount-cell');
    const saveCancelButtons = document.getElementById('save-cancel-buttons');

    if (checkbox.checked) {
        dateCell.innerHTML = `<input type="date" class="date-input">`;
        amountCell.innerHTML = `<input type="number" class="amount-input" placeholder="Enter amount" step="0.01">`;
    } else {
        dateCell.innerHTML = '';
        amountCell.innerHTML = '';
    }
    
    // Show or hide the save/cancel buttons based on whether any switches are checked
    const anyChecked = Array.from(document.querySelectorAll('.pay-switch-input')).some(input => input.checked);
    saveCancelButtons.style.display = anyChecked ? 'flex' : 'none';
}

function saveChanges() {
    document.getElementById('notification-message').innerText = "Changes have been saved.";
    document.getElementById('popup-image').style.display = 'none'; // Hide image for save
    showNotification();
}

function cancelChanges() {
    const checkboxes = document.querySelectorAll('.pay-switch-input');
    
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        const row = checkbox.closest('tr');
        const dateCell = row.querySelector('.date-cell');
        const amountCell = row.querySelector('.amount-cell');
        
        // Clear any date and amount inputs
        dateCell.innerHTML = ''; 
        amountCell.innerHTML = ''; // Make sure the "Amount to Pay" cell is also cleared
    });


    // Hide save/cancel buttons
    document.getElementById('save-cancel-buttons').style.display = 'none';
    document.getElementById('notification-message').innerText = "Changes have been cancelled.";
    document.getElementById('popup-image').style.display = 'none'; // Hide image for cancel
    showNotification();
}

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function exportCSV() {
    document.getElementById('notification-message').innerText = "CSV has been exported.";
    document.getElementById('popup-image').style.display = 'block'; // Show image only for export
    showNotification();

    // Hide the dropdown after selection
    document.querySelector('.dropdown-content').style.display = 'none';
}

function showNotification() {
    const notificationPopup = document.getElementById('notification-popup');
    notificationPopup.style.display = 'flex';
}

function closeNotification() {
    const notificationPopup = document.getElementById('notification-popup');
    notificationPopup.style.display = 'none';
}

function openViewPopup(imageSrc) {
    const viewPopup = document.getElementById('view-popup');
    const viewPopupImage = document.getElementById('view-popup-image');
    
    // Set the source of the image and show the popup
    viewPopupImage.src = imageSrc;
    viewPopup.style.display = 'flex';
}

function closeViewPopup() {
    const viewPopup = document.getElementById('view-popup');
    viewPopup.style.display = 'none';
}
