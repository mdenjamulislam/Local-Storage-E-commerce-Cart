const addToCart = () => {
    // console.log("Add To Cart");
    const productField = document.getElementById('product');
    const product = productField.value;
    const quentityField = document.getElementById('quentity');
    const quentity = quentityField.value;
    productField.value = '';
    quentityField.value = '';

    dispalyProduct(product, quentity);
    setItemLocalStorage(product, quentity)
}

function dispalyProduct(product, quantity) {
    const ul = document.getElementById('product_list');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

const getStoredShopingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');

    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const setItemLocalStorage = (product, quentity) => {
    cart = getStoredShopingCart();
    cart[product] = quentity;
    const toStringify = JSON.stringify(cart);
    localStorage.setItem('cart', toStringify);

}

const dispalyProductsFormLocalStorage = () => {
    const savedCart = getStoredShopingCart();
    for (const product in savedCart) {
        const quantity = savedCart[product];
        dispalyProduct(product, quantity);
    }
};
dispalyProductsFormLocalStorage();