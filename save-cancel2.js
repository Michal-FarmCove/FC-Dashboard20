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

    const anyChecked = Array.from(document.querySelectorAll('.pay-switch-input')).some(input => input.checked);
    saveCancelButtons.style.display = anyChecked ? 'flex' : 'none';
}

function saveChanges() {
    showNotification("Changes have been saved.");
    document.getElementById('popup-image').style.display = 'none';
}

function cancelChanges() {
    const checkboxes = document.querySelectorAll('.pay-switch-input');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        const row = checkbox.closest('tr');
        const dateCell = row.querySelector('.date-cell');
        const amountCell = row.querySelector('.amount-cell');
        dateCell.innerHTML = '';
        amountCell.innerHTML = '';
    });

    document.getElementById('save-cancel-buttons').style.display = 'none';
    showNotification("Changes have been cancelled.");
}

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function exportCSV() {
    showNotification("CSV has been exported.");
    const csvPopup = document.getElementById('csv-popup');
    const csvImage = document.getElementById('csv-image');
    
    csvPopup.style.display = 'block';
    csvImage.style.display = 'block'; // Display the image for CSV export popup
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

function closeNotification() {
    document.getElementById('notification-popup').style.display = 'none';
}

function showNotification(message) {
    const notificationMessage = document.getElementById('notification-message');
    notificationMessage.innerText = message;
    document.getElementById('notification-popup').style.display = 'flex';
}

function openDocumentPopup(imageSrc) {
    const documentPopup = document.getElementById('document-popup');
    const popupImage = document.getElementById('popup-image');

    popupImage.src = imageSrc;
    documentPopup.style.display = 'block';
}

