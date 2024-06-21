/**
 * Ice Cream Shop in Singleton
 */
class IceCreamShop {
    constructor() {
        if (IceCreamShop.instance == null) {
            this.flavors = ['vanilla', 'chocolate', 'strawberry'];
            IceCreamShop.instance = this;
        }
        return IceCreamShop.instance;
    }

    getFlavors() {
        return this.flavors;
    }
}

const instance = new IceCreamShop();
Object.freeze(instance);
export default instance;
