/**
 * Ice Cream Decorator class
 * "Decorates" Ice Creams with additional ingredients such as chocolate sauce or sprinkles
 * Overriding the getIceCream method of the IceCream class
 */
class IceCreamDecorator {
    constructor(iceCream) {
        this.iceCream = iceCream;
    }

    getIceCream() {
        return this.iceCream.getIceCream();
    }
}

/**
 * Overriding the getIceCream method of the IceCream class
 */
class ChocolateSauceDecorator extends IceCreamDecorator {
    getIceCream() {
        return `${this.iceCream.getIceCream()} with chocolate sauce`;
    }
}

/**
 * Overriding the getIceCream method of the IceCream class
 */
class ChocolateSprinklesDecorator extends IceCreamDecorator {
    getIceCream() {
        return `${this.iceCream.getIceCream()} with chocolate sprinkles`;
    }
}

export { ChocolateSauceDecorator, ChocolateSprinklesDecorator };
