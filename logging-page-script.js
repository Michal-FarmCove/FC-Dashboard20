// Initialize selected day information
let selectedDay = null;
let selectedDate = null;
let selectedDayNumber = null;
let isCheckboxSelected = false; // Track if a checkbox is selected

// Function to select only one checkbox
function selectOnlyOne(checkbox, day, date, dayNumber) {
    // Uncheck all checkboxes
    document.querySelectorAll('.row-checkbox').forEach((cb) => {
        cb.checked = false;
    });
    // Check the selected checkbox
    checkbox.checked = true;

    // Set selected day variables
    selectedDay = day;
    selectedDate = date;
    selectedDayNumber = dayNumber;
    isCheckboxSelected = true; // Mark a checkbox as selected

    // Enable and style the "Next" button
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.disabled = false;
    nextBtn.className = 'button1';
}

// Show the second table (logging table)
function showTable2() {
    document.getElementById('table1-container').style.display = 'none';
    document.getElementById('table2-container').style.display = 'block';

    const header = document.getElementById('logging-header');
    if (header) {
        header.innerText = `Logging - ${selectedDate} - Day ${selectedDayNumber}`;
    }
}

// Go back to the first table
function showTable1() {
    document.getElementById('table2-container').style.display = 'none';
    document.getElementById('table1-container').style.display = 'block';

    // Toggle "Next" button state based on whether a checkbox is selected
    const nextBtn = document.getElementById('nextBtn');
    if (isCheckboxSelected) {
        nextBtn.disabled = false;
        nextBtn.className = 'button1';
    } else {
        nextBtn.disabled = true;
        nextBtn.className = 'button2';
    }
}

// Show Crew Contact Details
function showContactDetails(name, role, company, address) {
    document.getElementById('table2-container').style.display = 'none'; // Hide the second table
    document.getElementById('contact-details').style.display = 'block'; // Show contact details

    // Populate contact details
    document.getElementById('contact-name').innerText = name || '';
    document.getElementById('role').innerText = role || '';
    document.getElementById('company-name').innerText = company || '';
    document.getElementById('address').innerText = address || '';

    // Additional data based on specific names
    if (name === 'John Smith') {
        document.getElementById('designation').innerText = 'Gaffer';
    } else if (name === 'Jimmy James') {
        document.getElementById('designation').innerText = 'Spot Boy';
    } else {
        document.getElementById('designation').innerText = '';
    }
}

// Go back from Crew Contact Details to Logging Table
function goBackToTable() {
    document.getElementById('contact-details').style.display = 'none';
    document.getElementById('table2-container').style.display = 'block';

    // Clear contact details
    document.getElementById('contact-name').innerText = '';
    document.getElementById('role').innerText = '';
    document.getElementById('company-name').innerText = '';
    document.getElementById('address').innerText = '';
    document.getElementById('designation').innerText = '';
}

// Show Driver Details
function showDriverDetails(name, role, company, address) {
    document.getElementById('table2-container').style.display = 'none'; // Hide the second table
    document.getElementById('driver-details').style.display = 'block'; // Show driver details

    // Populate driver details
    document.getElementById('driver-contact-name').innerText = name || '';
    document.getElementById('driver-role').innerText = role || '';
    document.getElementById('driver-company-name').innerText = company || '';
    document.getElementById('driver-address').innerText = address || '';
}

// Go back from Driver Details to Logging Table
function goBackToDriverTable() {
    document.getElementById('driver-details').style.display = 'none';
    document.getElementById('table2-container').style.display = 'block';

    // Clear driver details
    document.getElementById('driver-contact-name').innerText = '';
    document.getElementById('driver-role').innerText = '';
    document.getElementById('driver-company-name').innerText = '';
    document.getElementById('driver-address').innerText = '';
}

// Function to toggle the switch and change the day input value
function toggleFilterSwitch() {
    const dayInput = document.getElementById('day');
    const tableRows = document.querySelectorAll('#table1-container tbody tr');

    if (document.querySelector('.switch input')?.checked) {
        // When checked, update the day value and show only the first row
        dayInput.value = '14/08/24';
        tableRows.forEach((row, index) => {
            row.style.display = index === 0 ? '' : 'none';
        });
    } else {
        // When unchecked, reset the day input value and show all rows
        dayInput.value = '14/08/24 - 19/08/24';
        tableRows.forEach(row => row.style.display = '');
    }
}
