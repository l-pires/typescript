export class Trade {
  private _ticker: string;
  private _quantity: number;
  private _value: number;
  private _date: Date;

  constructor(ticker: string, quantity: number, value: number) {
    this._ticker = ticker;
    this._quantity = quantity;
    this._value = value;
    this._date = new Date();
  }

  get ticker() {
    return this._ticker;
  }
  
  get quantity() {
    return this._quantity;
  }
  
  get value() {
    return this._value;
  }

  get date() {
    return this._date;
  }

  get volume() {
    return this.quantity * this.value;
  }
}

export default Trade;
