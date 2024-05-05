import CustomerModel from "../Model/CustomerModel.js";
import { Customers } from "../Db/Db.js";

let customerTableClicked;
function loadCustomerTable() {
    $("#CustomerTableBody").empty();
    Customers.forEach((item) => {
        var record = `<tr>
            <th scope="row" class="cusId">${item.customerId}</th>
            <td class="cusName">${item.customerName}</td>
            <td class="cusSalary">${item.salary}</td>
            <td class="cusAddress">${item.address}</td>
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
$("#CustomerTableBody").on('click','tr',function (){
    let index = $(this).index();
    customerTableClicked = index;

    let customerId = $(this).find(".cusId").text();
    let customerName = $(this).find(".cusName").text();
    let salary = $(this).find(".cusSalary").text();
    let address = $(this).find(".cusAddress").text();

    $("#cus_id").val(customerId);
    $("#name").val(customerName);
    $("#salary").val(salary);
    $("#address").val(address);
})
