export const addItemToCart = (cartItems, itemToAdd) => {
    const itemExistsInCart = cartItems.find((item) => item.id === itemToAdd.id)

    if (itemExistsInCart) {
        return cartItems.map(item => {
            return item.id === itemExistsInCart.id ? {...item, quantity: item.quantity + 1 } : item
        })
    }

    return [...cartItems, {...itemToAdd, quantity: 1 }]
}