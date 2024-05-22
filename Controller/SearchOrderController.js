import PlaceOrderModel from "../Model/PlaceOrderModel.js";
import { Customers, Items, Orders } from "../Db/Db.js";

const loadDataTable = () => {
    // Fetch the customerId and date dynamically
    const customerId = $('#selectCus_ID').val(); // Assuming customer ID is selected from a dropdown
    const date = $('#currentDateTime').text();

    $('#searchOrderTBody').empty();

    Orders.forEach(order => {
        const row = `<tr>
            <td>${order.order_id}</td>
            <td>${customerId}</td>
            <td>${date}</td>
            <td>${order.finalTotal}</td>
        </tr>`;
        $('#searchOrderTBody').append(row);
    });
}

function getOrderId() {
    // Log the Orders to debug its state
    console.log("Orders:", Orders);

    // Check if Orders is properly loaded and is an array
    if (!Array.isArray(Orders)) {
        console.error("Orders is not an array or not properly loaded");
        return;
    }

    const selectOrderId = $("#SelectOrderId");

    // Check if the select element exists
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

// Ensure Orders is loaded before calling getOrderId
$(document).ready(() => {
    $('#SelectOrderId').on('focus', () => {
        getOrderId();
    });

    $('#SelectOrderId').on('change', () => {
        loadDataTable();
    });

    // Call getOrderId on page load
    getOrderId();
    loadDataTable(); // Load data table on page load
});
