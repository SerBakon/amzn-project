export const cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
}];


export function addToCart(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if(cartItem.productId === productId) {
            matchingItem = cartItem;
            //console.log('matching item found');
        }
    });

    //console.log(`matching item: ${matchingItem}`);
    let productQuantity = document.querySelector(`.js-quantity-selector-${productId}`).value;
    //console.log(productQuantity);
    if(matchingItem) {
        matchingItem.quantity += Number(productQuantity);
    } else {
        cart.push({productId: productId, quantity: Number(productQuantity)});
    }
}