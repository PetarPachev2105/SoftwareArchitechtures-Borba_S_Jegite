class Customer {
    constructor(iceCream, consumingStrategy) {
        this.id = Math.floor(Math.random() * 1000);
        this.name = `Customer ${this.id}`;
        this.iceCream = iceCream;
        this.consumingStrategy = consumingStrategy;
    }

    getIceCream() {
        console.log(`I am ${this.name} and I have ${this.iceCream.getIceCream()}`);
    }

    consume() {
        console.log(`${this.name} is consuming ${this.iceCream.getIceCream()} ${this.consumingStrategy.getPlace()}`);
    }
}

export default Customer;
