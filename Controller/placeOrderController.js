import { Customers, Items } from "../Db/Db.js";

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
function updateItemIDs() {
    $('#select').empty();
    const defaultOption = document.createElement("option");

    defaultOption.text = "Select Item ID";
    $('#select').append(defaultOption);

    Items.forEach(item => {
        const option = document.createElement("option");
        option.value = item.itemCode;
        option.text = item.itemCode;
        $('#select').append(option);
    });
}

$('#select').on('focus', () => {
    updateItemIDs();
});

$('#select').on('change', () => {
    const selectedOption = $('#select option:selected');

    if (selectedOption.length > 0) {
        const itemCode = selectedOption.val();
        const selectedItem = Items.find(item => item.itemCode === itemCode);

        $('#itemName').text(selectedItem.itemName);
        $('#itemQut').text(selectedItem.qty);
        $('#itemPrice').text(selectedItem.price);

        $('#quantity_placeOrder').focus();
    }
});
