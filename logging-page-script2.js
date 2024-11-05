
		// Show Crew Contact Details
		function showContactDetails(name, role, company, address) {
			document.getElementById('table2-container').style.display = 'none'; // Hide the second table
			document.getElementById('contact-details').style.display = 'block'; // Show the contact details
			document.getElementById('contact-name').innerText = name;
			document.getElementById('role').innerText = role;
			document.getElementById('company-name').innerText = company;
			document.getElementById('address').innerText = address;

			if (name === 'John Smith') {
				document.getElementById('designation').innerText = 'Gaffer';
				document.getElementById('company-name').innerText = 'Company X';
				document.getElementById('address').innerText = '42 Bramble Lane, Westbridge, London, England, United Kingdom';
			} else if (name === 'Jimmy James') {
				document.getElementById('designation').innerText = 'Spot Boy';
				document.getElementById('company-name').innerText = 'Company Y';
				document.getElementById('address').innerText = '23 Meadow Street, Eastside, London, England, United Kingdom';
			}
		}

		// Go back to the main logging table from Crew Details
		function goBackToTable() {
			document.getElementById('contact-details').style.display = 'none'; // Hide contact details
			document.getElementById('table2-container').style.display = 'block'; // Show the second table again

			// Reset the content of the contact details to avoid lingering content
			document.getElementById('contact-name').innerText = '';
			document.getElementById('role').innerText = '';
			document.getElementById('company-name').innerText = '';
			document.getElementById('address').innerText = '';
			document.getElementById('designation').innerText = ''; // Clear the designation if used
		}

		// Show Driver Details
		function showDriverDetails(name, role, company, address) {
			document.getElementById('table2-container').style.display = 'none'; // Hide the second table
			document.getElementById('driver-details').style.display = 'block'; // Show the driver details section
			document.getElementById('driver-contact-name').innerText = name;
			document.getElementById('driver-role').innerText = role;
			document.getElementById('driver-company-name').innerText = company;
			document.getElementById('driver-address').innerText = address;

			if (name === 'Mike Wazowski') {
				document.getElementById('driver-role').innerText = 'Gaffer';
				document.getElementById('driver-company-name').innerText = 'Company X';
				document.getElementById('driver-address').innerText = '42 Bramble Lane, Westbridge, London, England, United Kingdom';
			} else if (name === 'Jimmy James') {
				document.getElementById('driver-role').innerText = 'Spot Boy';
				document.getElementById('driver-company-name').innerText = 'Company Y';
				document.getElementById('driver-address').innerText = '23 Meadow Street, Eastside, London, England, United Kingdom';
			}
		}

		// Go back to the main logging table from Driver Details
		function goBackToDriverTable() {
			document.getElementById('driver-details').style.display = 'none'; // Hide driver details
			document.getElementById('table2-container').style.display = 'block'; // Show the second table again

			// Reset the content of the driver details to avoid lingering content
			document.getElementById('driver-contact-name').innerText = '';
			document.getElementById('driver-role').innerText = '';
			document.getElementById('driver-company-name').innerText = '';
			document.getElementById('driver-address').innerText = '';
		}










        let selectedDay;
        let selectedDate;

        // Function to select only one checkbox
        function selectOnlyOne(checkbox, day, date, dayNumber) {
            const checkboxes = document.querySelectorAll('.row-checkbox');
            checkboxes.forEach((cb) => {
                cb.checked = false;
            });
            checkbox.checked = true;
            selectedDay = day;
            selectedDate = date;
            selectedDayNumber = dayNumber;
            document.getElementById('nextBtn').disabled = false;
        }

        // Show the second table
        function showTable2() {
            document.getElementById('table1-container').style.display = 'none';
            document.getElementById('table2-container').style.display = 'block';

            const header = document.getElementById('logging-header');
            header.innerText = `Logging - ${selectedDate} - Day ${selectedDayNumber}`;
        }

        // Go back to the first table
        function showTable1() {
            document.getElementById('table2-container').style.display = 'none';
            document.getElementById('table1-container').style.display = 'block';
            document.getElementById('nextBtn').disabled = true; // Reset the next button
        }


	// Function to toggle the switch and change the day input value
function toggleFilterSwitch() {
    const dayInput = document.getElementById('day');
    const tableRows = document.querySelectorAll('#table1-container tbody tr');
    
    if (document.querySelector('.switch input').checked) {
        // When checked, update the day value and show only the first row
        dayInput.value = '14/08/24';
        tableRows.forEach((row, index) => {
            row.style.display = index === 0 ? '' : 'none'; // Show only the first row
        });
    } else {
        // When unchecked, reset the day input value and show all rows
        dayInput.value = '14/08/24 - 19/08/24';
        tableRows.forEach(row => {
            row.style.display = ''; // Show all rows
        });
    }
}