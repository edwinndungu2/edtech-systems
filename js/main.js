// Products data
const products = [
  { id: 1, name: 'CCTV Camera', price: 50, image: 'images/cctv.jpg' },
  { id: 2, name: 'Drone', price: 150, image: 'images/drone.jpg' },
  { id: 3, name: 'Smartwatch', price: 80, image: 'images/watch.jpg' },
];

// Load products into HTML
const productsContainer = document.getElementById('products');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayProducts() {
  productsContainer.innerHTML = '';
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart`);
}

document.getElementById('goToCheckout').addEventListener('click', () => {
  window.location.href = 'checkout.html';
});

displayProducts();
