import IceCreamShop from './IceCreamShop.js';
import IceCreamFactory from './IceCreamFactory.js';
import { ChocolateSauceDecorator, ChocolateSprinklesDecorator } from './IceCreamDecorator.js';
import { ConsumeInShop, ConsumeInPark, ConsumeOnBeach } from './ConsumingStrategy.js';
import Customer from './Customer.js';

const shop = IceCreamShop;

console.log('Flavors:', shop.getFlavors());

const factory = new IceCreamFactory();
const vanillaIceCream = factory.createIceCream('vanilla');
const chocoIceCream = factory.createIceCream('chocolate');
const strawberryIceCream = factory.createIceCream('strawberry');

const vanillaIceCreamWithChocolateSauce = new ChocolateSauceDecorator(vanillaIceCream);
const chocoIceCreamWithChocolateSprinkles = new ChocolateSprinklesDecorator(chocoIceCream);

const consumeInShopStrategy = new ConsumeInShop();
const consumeInParkStrategy = new ConsumeInPark();
const consumeOnBeachStrategy = new ConsumeOnBeach();

const customer1 = new Customer(vanillaIceCreamWithChocolateSauce, consumeInShopStrategy);
const customer2 = new Customer(chocoIceCreamWithChocolateSprinkles, consumeInParkStrategy);
const customer3 = new Customer(strawberryIceCream, consumeOnBeachStrategy);

customer1.getIceCream();
customer1.consume();

customer2.getIceCream();
customer2.consume();

customer3.getIceCream();
customer3.consume();
