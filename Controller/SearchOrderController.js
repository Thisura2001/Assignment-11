import PlaceOrderModel from "../Model/PlaceOrderModel.js";
import { Customers, Items,Orders } from "../Db/Db.js";

function getOrderId() {
    $("#SelectOrderId").empty();
    const defaultOption = document.createElement("option");
    defaultOption.text = "Select Order ID";
    $("#SelectOrderId").append(defaultOption);

        Orders.forEach(order => {
        const option = document.createElement("option");
            option.value = JSON.stringify(order);
            option.text = order.order_id;
        $("#SelectOrderId").append(option);
    });
}
$('#SelectOrderId').on('focus', () => {
    getOrderId();
});
window.onload = () => {
    getOrderId();
}