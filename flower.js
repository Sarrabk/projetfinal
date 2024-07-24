document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.getAttribute('data-name');
            const productPrice = parseFloat(productElement.getAttribute('data-price')); // Convert to number

            addToCart(productId, productName, productPrice);
        });
    });

    function addToCart(id, name, price) {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${name} - ${price}.00 TND`;
        cartItems.appendChild(cartItem);

        total += price;
        totalElement.textContent = `Total: ${total.toFixed(2)} TND`;
    }
});

