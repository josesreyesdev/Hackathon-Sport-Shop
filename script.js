// Variable global para el carrito (usando un Array para almacenar los artículos)
const cart = [];

/**
 * Actualiza el contador numérico del carrito en el header.
 */
function updateCartCount() {
    const count = cart.length;
    const cartCountElement = document.getElementById('cartCount');

    if (cartCountElement) {
        cartCountElement.textContent = count; // Establece el número de artículos

        if (count > 0) {
            // Muestra el contador si hay productos (Mercado Libre style)
            cartCountElement.style.display = 'block'; 
        } else {
            // Oculta el contador si está vacío
            cartCountElement.style.display = 'none'; 
        }
    }
}


/**
 * Muestra una notificación Toast de Bootstrap al añadir un artículo al carrito
 * @param {string} toastId - El ID del elemento del toast.
 * @param {string} message - El mensaje a mostrar en el cuerpo del toast.
 */
function showToast(toastId, message) {
    const toastElement = document.getElementById(toastId);
    
    if (toastElement) {
        const toastBody = document.getElementById('toast-text-product');
        if (toastBody) {
            toastBody.textContent = message;
        }
        // Inicializa o obtiene la instancia de Bootstrap Toast
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElement);
        toastBootstrap.show();
    }
}

/**
 * Añade un producto al carrito, actualiza el contador y muestra el toast.
 * Esta función es llamada por los botones "Agregar al carrito" en el carrusel.
 * @param {string} item - El nombre del artículo.
 */
function addToCart(item) {
    // 1. Añadir el artículo al carrito
    cart.push(item); 
    
    // 2. Actualizar el contador en el header
    updateCartCount(); 

    // 3. Mostrar la notificación
    showToast('productAddedToast', '¡' + item + ' añadido con éxito al carrito!');
}

// Opcional: Ejecutar la actualización al cargar la página para asegurar que el contador se oculte si está vacío
document.addEventListener('DOMContentLoaded', updateCartCount);