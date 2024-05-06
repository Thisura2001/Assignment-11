import { Items } from "../Db/Db.js";
import ItemModel from "../Model/ItemModel.js";

let itemTableClick;
function loadItemTable() {
    $("#itemTableBody").empty();
    Items.forEach((item) => {
        var record = `<tr>
            <td class="itemCode">${item.itemCode}</td>
            <td class="NameItem">${item.itemName}</td>
            <td class="itemPrice">${item.price}</td>
            <td class="itemQty">${item.qty}</td>
        </tr>`;
        $("#itemTableBody").append(record);
    });
}
$("#itemTableBody").on('click','tr',function (){
    let index = $(this).index();
    itemTableClick = index;

    let itemCode = $(this).find(".itemCode").text();
    let itemName =$(this).find(".NameItem").text();
    let price = $(this).find(".itemPrice").text();
    let qty =$(this).find(".itemQty").text();

    $("#Item_id").val(itemCode);
    $("#item_Name").val(itemName);
    $("#item_Price").val(price);
    $("#itemQuantity").val(qty);

});
$("#btnItemSave").on('click', function () {
    let itemCode = $("#Item_id").val();
    let itemName = $("#item_Name").val();
    let price = $("#item_Price").val();
    let qty = $("#itemQuantity").val();

    let itemObj = new ItemModel(itemCode, itemName, price, qty);

    // Display the custom confirmation dialog
    $("#customConfirmMessage").text("Are you sure you want to save this item?");
    $("#nav").hide();
    $("#customConfirm").show();

    // Event listener for the Yes button in the custom confirmation dialog
    $("#confirmYesButton").on("click", function() {
        // Add the item to the list and close the dialog
        Items.push(itemObj);
        clearFields();
        loadItemTable();
        $("#customConfirm").hide();
    });

    // Event listener for the Cancel button in the custom confirmation dialog
    $("#confirmNoButton").on("click", function() {
        // Close the dialog without saving the item
        $("#customConfirm").hide();

    });
});

$("#btnItemUpdate").on('click', function (){
    let itemCode = $("#Item_id").val();
    let itemName = $("#item_Name").val();
    let price = $("#item_Price").val();
    let qty = $("#itemQuantity").val();

    Items[itemTableClick].itemName = itemName;
    Items[itemTableClick].price = price;
    Items[itemTableClick].qty = qty;
    alert("Item Updated !!");
    clearFields();
    loadItemTable();
});
$("#itemBtnDelete").on('click', function (){
    Items.splice(itemTableClick,1);
    alert("item Deleted!!");
    clearFields();
    loadItemTable();
});
$("#itemBtnReset").on('click', function (){
    $("#Item_id").val("");
    $("#item_Name").val("");
    $("#item_Price").val("");
    $("#itemQuantity").val("");
});
function clearFields() {
    $("#Item_id").val("");
    $("#item_Name").val("");
    $("#item_Price").val("");
    $("#itemQuantity").val("");
}
