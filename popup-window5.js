// Open the main popup and reset to the default view
function openPopup() {
    console.log("openPopup called");
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-main").style.display = "block";
    document.getElementById("approval-message").style.display = "none";
    document.getElementById("query-popup").style.display = "none";
}

// Close the main popup
function closePopup() {
    console.log("closePopup called");
    document.getElementById("popup").style.display = "none";
}

// Display the approval message inside the popup
function approveDocument() {
    console.log("approveDocument called");
    document.getElementById("popup-main").style.display = "none";
    document.getElementById("approval-message").style.display = "block";
    document.querySelector(".message-text").textContent = "Expense has been approved.";
}

// Display the query input form inside the popup
function queryDocument() {
    console.log("queryDocument called");
    document.getElementById("popup-main").style.display = "none";
    document.getElementById("query-popup").style.display = "block";
}

// Submit the query and show confirmation
function submitQuery() {
    console.log("submitQuery called");
    document.getElementById("query-popup").style.display = "none";
    document.getElementById("approval-message").style.display = "block";
    document.querySelector(".message-text").textContent = "Expense has been queried.";
}

// Display the rejection message inside the popup
function rejectDocument() {
    console.log("rejectDocument called");
    document.getElementById("popup-main").style.display = "none";
    document.getElementById("approval-message").style.display = "block";
    document.querySelector(".message-text").textContent = "Expense has been rejected.";
}

// Display the Request Document message inside the request message popup
function requestDocument() {
    console.log("requestDocument called");
    document.getElementById('request-message').style.display = 'flex';
    document.querySelector(".message-text").textContent = "An email and a WhatsApp message have been sent to this entity asking them to provide the missing document/s.";
}

// Close the Request Document popup specifically
function closeRequestPopup() {
    console.log("closeRequestPopup called");
    document.getElementById('request-message').style.display = 'none';
}
