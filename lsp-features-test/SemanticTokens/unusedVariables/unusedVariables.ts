
function foo(used: number, unused: number) {
    return used;
}

function calculateTotal(price: number, quantity: number, discount: number, tax: number) {
    let subtotal = price * quantity;  // used variables
    let unusedLocal = 100;           // unused local variable
    return subtotal * (1 - discount) * (1 + tax);
}

function processOrder(orderId: string, items: number, shipping: string, priority: boolean) {
    const orderNumber = orderId;      // used variable
    const unusedStatus = "pending";   // unused variable
    
    if (items > 10) {
        let bulkDiscount = 0.1;      // used in nested scope
        let unusedDiscount = 0.2;    // unused in nested scope
        return calculateTotal(100, items, bulkDiscount, 0.2);
    }
    
    return calculateTotal(100, items, 0, 0.2);
}

function formatAddress(street: string, city: string, state: string, zip: string) {
    const formatted = `${street}, ${city}`;  // partial use of parameters
    return formatted;
}

function start() {
    const result = processOrder("123", 15, "express", true);  // unused parameter
    const address = formatAddress("123 Main", "Boston", "MA", "02108");
    console.log(result, address);
}

start();
