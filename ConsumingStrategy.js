/**
 * Represents a consuming strategy.
 * Customers can consume their food in different places like shop, park, beach, etc.
 */
class ConsumingStrategy {
    getPlace() {
        console.log('unknown place');
    }
}

class ConsumeInShop extends ConsumingStrategy {
    getPlace() {
        return 'in the shop';
    }
}

class ConsumeInPark extends ConsumingStrategy {
    getPlace() {
        return 'in the park';
    }
}

class ConsumeOnBeach extends ConsumingStrategy {
    getPlace() {
        return 'on the beach';
    }
}

export { ConsumeInShop, ConsumeInPark, ConsumeOnBeach };
