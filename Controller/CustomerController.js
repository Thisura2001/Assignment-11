import CustomerModel from "../Model/CustomerModel.js";
import { Customers } from "../Db/Db.js";

function loadCustomerTable() {
    $("#CustomerTableBody").empty();
    Customers.forEach((item) => {
        var record = `<tr>
            <td>${item.customerId}</td>
            <td>${item.customerName}</td> <!-- Corrected property name to customerName -->
            <td>${item.salary}</td>
            <td>${item.address}</td>
        </tr>`;
        $("#CustomerTableBody").append(record);
    });
}

$("#btnCustomerSave").on('click', function () {
    let customerId = $("#cus_id").val(); // Corrected ID to match HTML input
    let customerName = $("#name").val(); // Corrected ID to match HTML input
    let salary = $("#salary").val();
    let address = $("#address").val();

    var CustomerObj = new CustomerModel(customerId, customerName, salary, address);
    Customers.push(CustomerObj);
    loadCustomerTable();
});
