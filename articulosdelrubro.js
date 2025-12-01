// todo esto se ejecuta cuando se llama al <script> desde articulosdelrubro.html

// articulosdelrubro.js

// todo esto se ejecuta cuando se llama al <script> desde articulosdelrubro.html

// 1. Initialize the shopping cart
let cart = [];

// Function to add an item to the cart
function addToCart(articulo) {
    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.codigo === articulo.codigo);

    if (existingItem) {
        // If it exists, just increase the quantity
        existingItem.quantity++;
    } else {
        // If it's new, add it with a quantity of 1
        cart.push({ ...articulo, quantity: 1 });
    }

    // Update the visual representation of the cart
    updateCartDisplay();

    // Optional: Log the cart for debugging
    console.log('Current Cart:', cart);
}

// Function to simulate the final purchase
function buyNow() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Please add items before checking out.");
        return;
    }

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + (item.precio * item.quantity), 0).toFixed(2);

    // Display a confirmation message with the total
    alert(`¡Gracias por su compra! 🛍️\n\nArtículos totales: ${totalItems}\nMonto Total: $${totalPrice}\n\npreubas :).`);

    // Clear the cart after "purchase"
    cart = [];
    updateCartDisplay();
}


// Function to update the cart summary displayed on the page
function updateCartDisplay() {
    const cartSummary = document.getElementById('cart-summary');
    if (!cartSummary) return;

    if (cart.length === 0) {
        cartSummary.innerHTML = '🛒 Tu carrito está vacío.';
        return;
    }

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + (item.precio * item.quantity), 0).toFixed(2);

    // Create a detailed list of items in the cart
    let cartDetails = '<ul>';
    cart.forEach(item => {
        cartDetails += `<li>${item.descripcion} (${item.quantity}) - $${(item.precio * item.quantity).toFixed(2)}</li>`;
    });
    cartDetails += '</ul>';

    cartSummary.innerHTML = `
        <h2>🛒 Carro de la compra</h2>
        ${cartDetails}
        <p>Total items: <strong>${totalItems}</strong></p>
        <p>Total price: <strong>$${totalPrice}</strong></p>
        
        <button class="buy-now-btn" onclick="buyNow()">Comprar ahora y pagar</button>
    `;
}

//obtengo el rubro guardado
const rubro = localStorage.getItem('rubroSelecionado');

// mostrar artículos de ese rubro en la grilla de articulosdelrubro.html
fetch('https://bocajuniorfacu.onrender.com/articulosdelrubro', {

    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rubro })

})
    .then(resp => {
        if (!resp.ok) {
            throw new Error('Error en la respuesta');
        }
        return resp.json(); // Convertimos la respuesta a JSON
    })
    .then(data => {
        // obtenemos la grilla vacía del html
        const grilla = document.getElementById('grilla');

        // Recorremos la lista y agregamos los artículos a la grilla
        data.forEach(articulo => {
            // crear un elemento div en el body (una caja que contiene todos los datos)
            let caja = document.createElement("div");
            caja.className = "caja";   // definimos una clase "caja"

            let desc = document.createElement('p');           // creo un párrafo
            desc.className = "descripcion";                   // clase para formato en CSS
            desc.innerHTML = `${articulo.descripcion}`;       // muestra el campo descripcion de la tabla en el párrafo
            caja.appendChild(desc);                           // agrego desc a la caja

            let imagen = document.createElement("img");       // crear una imagen
            imagen.src = "imagenesropa/" + `${articulo.imagen}`; // definir el archivo a mostrar
            imagen.className = "imagen";                      // definir una clase para usar en CSS
            caja.appendChild(imagen);                         // agrego la imagen a la caja

            let codigo = document.createElement('p');          // creo un párrafo
            codigo.className = "codigo";                       // clase para formato en CSS
            codigo.innerHTML = `Code: ${articulo.codigo}`;     // muestra el campo codigoBarras de la tabla en el párrafo
            caja.appendChild(codigo);                          // agrego el código a la caja

            let venta = document.createElement('p');
            venta.className = "precio";
            venta.innerHTML = "$ " + `${articulo.precio}`;
            caja.appendChild(venta);

            // --- Cart Feature Addition: Add a Button ---
            let btnCart = document.createElement('button');
            btnCart.className = 'add-to-cart-btn';
            btnCart.innerHTML = 'Add to Cart 🛒';
            // Attach the click event to the function
            btnCart.onclick = () => addToCart(articulo);
            caja.appendChild(btnCart);
            // --- End Cart Feature Addition ---

            // agregar la caja entera en la grilla
            grilla.appendChild(caja);
        });

        // Initialize cart display when articles are loaded
        updateCartDisplay();
    })
    .catch(error => {
        // En caso de error, mostramos un mensaje
        const grilla = document.getElementById('grilla');
        grilla.innerHTML = 'Error al cargar los datos: ' + error;
        console.error('Error al obtener los datos:', error);
    });