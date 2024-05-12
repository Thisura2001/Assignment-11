import { Customers, Items } from "../Db/Db.js";

// Function to clear and populate customer IDs in the combo box
function updateCustomerIDs() {
    // Clear existing options before adding new ones
    $('#selectCus_ID').empty();

    // Populate the combo box with customer IDs
    Customers.forEach(customer => {
        const option = document.createElement("option");
        option.value = JSON.stringify(customer);
        option.text = customer.customerId;
        $('#selectCus_ID').append(option);
    });
}

// Attach event listener to the combo box when it receives focus
$('#selectCus_ID').on('focus', () => {
    updateCustomerIDs(); // Update the customer IDs in the combo box
});

// Event listener for customer ID combo box change
$('#selectCus_ID').on('change', () => {
    const selectedOption = $('#selectCus_ID option:selected');

    if (selectedOption.length > 0) {
        const selectedCustomer = JSON.parse(selectedOption.val());
        const name = selectedCustomer.customerName;

        // Set the appropriate name when a customer ID is selected
        $('#customerId').val(name); // Assuming there's an element with the ID 'customerId'
    } else {
        console.log('No option selected');
    }
});
