import { Customers } from "../Db/Db.js";

// Function to populate the customer ID combo box
function populateCustomerIDs() {
    const selectCus_ID = document.getElementById('selectCus_ID');
    selectCus_ID.innerHTML = ''; // Clear existing options

    Customers.forEach(customer => {
        const option = document.createElement("option");
        option.value = customer.customerId;
        option.text = customer.customerId;
        selectCus_ID.appendChild(option);
    });
}

// Event listener for customer ID combo box click
$('#selectCus_ID').on('click', () => {
    populateCustomerIDs(); // Repopulate the combo box with customer IDs
});

// Event listener for customer ID combo box change
$('#selectCus_ID').on('change', () => {
    const selectedOption = $('#selectCus_ID option:selected');

    if (selectedOption.length > 0) {
        const selectedCustomer = JSON.parse(selectedOption.val());
        $('#customerId').val(selectedCustomer.customerName); // Assuming there's an element with the ID 'customerId'
    } else {
        console.log('No option selected');
    }
});

// Event listener for items combo box change
$('#selectItems').on('change', () => {
    // Add logic for handling item selection
});
