import CustomerModel from "../Model/CustomerModel.js";
import { Customers } from "../Db/Db.js";

function loadCustomerTable() {
    $("#CustomerTableBody").empty();
    Customers.forEach((item) => {
        var record = `<tr>
            <td>${item.customerId}</td>
            <td>${item.customerName}</td>
            <td>${item.salary}</td>
            <td>${item.address}</td>
        </tr>`;
        $("#CustomerTableBody").append(record);
    });
}

$("#btnCustomerSave").on('click', function () {
    let customerId = $("#cus_id").val();
    let customerName = $("#name").val();
    let salary = $("#salary").val();
    let address = $("#address").val();

    var CustomerObj = new CustomerModel(customerId, customerName, salary, address);
    Customers.push(CustomerObj);
    loadCustomerTable();
});
