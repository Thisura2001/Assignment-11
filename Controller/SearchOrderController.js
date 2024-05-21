import PlaceOrderModel from "../Model/PlaceOrderModel.js";
import { Customers, Items, Orders } from "../Db/Db.js";

function getOrderId() {
    console.log("Orders data:", Orders); // Log Orders data

    if (!Array.isArray(Orders) || Orders.length === 0) {
        console.error("Orders is not an array or is empty");
        return;
    }

    const selectOrderId = $("#SelectOrderId");

    if (selectOrderId.length === 0) {
        console.error("#SelectOrderId element not found");
        return;
    }

    selectOrderId.empty();
    const defaultOption = document.createElement("option");
    defaultOption.text = "Select Order ID";
    selectOrderId.append(defaultOption);

    Orders.forEach(order => {
        const option = document.createElement("option");
        option.value = JSON.stringify(order);
        option.text = order.order_id;
        selectOrderId.append(option);
    });
}

$(document).ready(() => {
    console.log("Document ready");
    getOrderId(); // Directly call getOrderId on document ready
});