export default class PlaceOrderModel {
    constructor(order_id, Item_ID, ItemName, Unite_Price, Quantity, Total) {
        this._order_id = order_id;
        this._Item_ID = Item_ID;
        this._ItemName = ItemName;
        this._Unite_Price = Unite_Price;
        this._Quantity = Quantity;
        this._Total = Total;
    }

    get order_id() {
        return this._order_id;
    }

    set order_id(value) {
        this._order_id = value;
    }

    get Item_ID() {
        return this._Item_ID;
    }

    set Item_ID(value) {
        this._Item_ID = value;
    }

    get ItemName() {
        return this._ItemName;
    }

    set ItemName(value) {
        this._ItemName = value;
    }

    get Unite_Price() {
        return this._Unite_Price;
    }

    set Unite_Price(value) {
        this._Unite_Price = value;
    }

    get Quantity() {
        return this._Quantity;
    }

    set Quantity(value) {
        this._Quantity = value;
    }

    get Total() {
        return this._Total;
    }

    set Total(value) {
        this._Total = value;
    }
}