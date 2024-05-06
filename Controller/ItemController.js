import { Items } from "../Db/Db.js";
import ItemModel from "../Model/ItemModel.js";

function loadItemTable() {
    $("#itemTableBody").empty();
    Items.forEach((item) => {
        var record = `<tr>
            <td>${item.itemCode}</td>
            <td>${item.itemName}</td>
            <td>${item.price}</td>
            <td>${item.qty}</td>
        </tr>`;
        $("#itemTableBody").append(record);
    });
}

$("#btnItemSave").on('click', function () {
    let itemCode = $("#Item_id").val();
    let itemName = $("#item_Name").val();
    let price = $("#item_Price").val();
    let qty = $("#itemQuantity").val();

    let itemObj = new ItemModel(itemCode, itemName, price, qty);
    Items.push(itemObj);
    alert("Item Saved!!");
    clearFields();
    loadItemTable();
});

function clearFields() {
    $("#Item_id").val("");
    $("#item_Name").val("");
    $("#item_Price").val("");
    $("#itemQuantity").val("");
}
