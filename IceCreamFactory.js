import IceCream from './IceCream.js';

/**
 * IceCreamFactory class
 * Creates Ice Creams based on the specified flavor
 */
class IceCreamFactory {
    createIceCream(flavor) {
        switch (flavor) {
            case 'vanilla':
            case 'chocolate':
            case 'strawberry':
                return new IceCream(flavor);
            default:
                throw new Error('No such flavor');
        }
    }
}

export default IceCreamFactory;
