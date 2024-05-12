import { Customers, Items } from "../Db/Db.js";

// Flag to check if the customer IDs have been populated
let customerIDsPopulated = false;

// Function to populate the customer ID combo box
$('#selectCus_ID').on('click', () => {
    if (!customerIDsPopulated) {
        const selectCus_ID = document.getElementById('selectCus_ID');

        Customers.forEach(customer => {
            // Check if an option with the same customer_id already exists
            const isCustomerAdded = Array.from(selectCus_ID.options).some(option => {
                const existingCustomer = JSON.parse(option.value);
                return existingCustomer.customerId === customer.customerId;
            });

            if (!isCustomerAdded) {
                // If the customer with the same customer_id doesn't exist, add a new option
                const option = document.createElement("option");
                option.value = JSON.stringify(customer);
                option.text = customer.customerId;
                selectCus_ID.appendChild(option);
            }
        });

        // Set the flag to true indicating that customer IDs have been populated
        customerIDsPopulated = true;
    }
});

// Event listener for customer ID combo box change
$('#selectCus_ID').on('change', () => {
    const selectedOption = $('#selectCus_ID option:selected');

    if (selectedOption.length > 0) {
        const selectedCustomer = JSON.parse(selectedOption.val());
        const name = selectedCustomer.customerName;

        $('#customerId').val(name); // Assuming there's an element with the ID 'customerId'
    } else {
        console.log('No option selected');
    }
});

// Event listener for items combo box change
$('#selectItems').on('change', () => {

});