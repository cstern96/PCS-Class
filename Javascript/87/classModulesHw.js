export default class House {
    constructor(address, price){
    this.address = address;
    this.price = price;
    }
    print() {
        console.log(`Address: ${this.address} Price: ${this.price}`);
      }
}
