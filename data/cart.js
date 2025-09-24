export const cart = [];


export function addToCart(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if(cartItem.productId === productId) {
            matchingItem = cartItem;
            //console.log('matching item found');
        }
    });

    //console.log(`matching item: ${matchingItem}`);
    if(matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({productId: productId, quantity: 1});
    }
}