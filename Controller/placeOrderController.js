import { Customers, Items } from "../Db/Db.js";

// Set the customer IDs in the combo box
function updateCustomerIDs() {
    $('#selectCus_ID').empty();
    const defaultOption = document.createElement("option");

    defaultOption.text = "Select Customer Id";
    $('#selectCus_ID').append(defaultOption);

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
