import CustomerModel from "../Model/CustomerModel.js";
import {Customers, Items} from "../Db/Db.js";

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

    // Display the custom confirmation dialog
    $("#customConfirmMessage").text("Are you sure you want to save this item?");
    $("#nav").hide();
    $("#customConfirm").show();

    // Event listener for the Yes button in the custom confirmation dialog
    $("#confirmYesButton").on("click", function() {
        // Add the item to the list and close the dialog
        Customers.push(CustomerObj);
        clearFields();
        loadCustomerTable();
        $("#customConfirm").hide();
        $("#nav").show();
    });

    // Event listener for the Cancel button in the custom confirmation dialog
    $("#confirmNoButton").on("click", function() {
        // Close the dialog without saving the item
        $("#customConfirm").hide();

    });
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
});
$("#btnCustomerUpdate").on('click',function (){
    let customerId = $("#cus_id").val();
    let customerName = $("#name").val();
    let salary = $("#salary").val();
    let address = $("#address").val();

    Customers[customerTableClicked].customerName =customerName;
    Customers[customerTableClicked].salary =salary;
    Customers[customerTableClicked].address = address;
    alert("Customer Updated !!");
    clearFields();
    loadCustomerTable();
});
$("#btnCustomerReset").on('click',function (){
    $("#cus_id").val("");
    $("#name").val("");
    $("#salary").val("");
    $("#address").val("");
});
$("#btnCustomerDelete").on('click',function (){
    Customers.splice(customerTableClicked,1);
    alert("Customer Deleted!!!");
    clearFields();
    loadCustomerTable();
});
function clearFields() {
    $("#cus_id").val("");
    $("#name").val("");
    $("#salary").val("");
    $("#address").val("");
}