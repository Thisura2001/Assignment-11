import { Customers, Items } from "../Db/Db.js";

// Function to clear and populate customer IDs in the combo box
function updateCustomerIDs() {
    // Clear existing options before adding new ones
    $('#selectCus_ID').empty();

    // Add default option
    const defaultOption = document.createElement("option");
    defaultOption.text = "Select Customer Id";
    $('#selectCus_ID').append(defaultOption);

    // Populate the combo box with customer IDs
    Customers.forEach(customer => {
        const option = document.createElement("option");
        option.value = JSON.stringify(customer);
        option.text = customer.customerId;
        $('#selectCus_ID').append(option);
    });
}

$('#selectCus_ID').on('focus', () => {
    updateCustomerIDs();
});
