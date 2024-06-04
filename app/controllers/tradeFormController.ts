import Trade from "../models/trade.js";

export class TradeFormController {
  private form: HTMLFormElement;

  private tickerInput: HTMLInputElement;
  private quantityInput: HTMLInputElement;
  private valueInput: HTMLInputElement;

  constructor() {
    this.form = <HTMLFormElement> document.getElementById('trade-form');
    this.tickerInput = <HTMLInputElement> document.getElementById('ticker');
    this.quantityInput = <HTMLInputElement> document.getElementById('quantity');
    this.valueInput = <HTMLInputElement> document.getElementById('value');

    this.form.addEventListener('submit', (event) => this.onSubmit(event));
  }

  onSubmit(event: Event) {
    const trade: Trade = this.create();
    console.log(trade);
    console.log(trade.volume);
    
    event.preventDefault();
    this.clear();
  }

  create(): Trade {
    return new Trade(
      this.tickerInput.value,
      parseInt(this.quantityInput.value),
      parseFloat(this.valueInput.value),
    );
  }

  clear(): void {
    this.tickerInput.value = '';
    this.quantityInput.value = '';
    this.valueInput.value = '';
  }
}

export default TradeFormController;
