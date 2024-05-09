import { Items, Customers } from "../Db/Db.js";

$("#selectCus_ID").on('click', function () {
    $("#selectCus_ID").empty();
    Customers.forEach((customer) => {
        var option = `<option value="${customer.customerId}">${customer.customerId}</option>`;
        $("#selectCus_ID").append(option);
    });
});
$("#select").on('click', function () {
    $("#select").empty();
    Items.forEach((item) => {
        var option = `<option value="${item.itemCode}">${item.itemCode}</option>`;

        $("#itemName").text(item.itemName);
        $("#itemPrice").text(item.price);
        $("#itemQut").text(item.qty);

        $("#select").append(option);

    });
})