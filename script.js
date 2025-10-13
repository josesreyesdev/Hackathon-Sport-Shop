// Variable global para el carrito por si se va a necesitar
const cart = [];
/**
 * Muestra una notificación Toast de Bootstrap al añadir un artículo al carrito
 * @param {string} toastId - El ID del elemento del toast.
 * @param {string} message - El mensaje a mostrar en el cuerpo del toast.
 */
function showToast(toastId, message) {
    const toastElement = document.getElementById(toastId);
/* verifica que exista un elemento toastElement */
    if (toastElement) {
        const toastBody = document.getElementById('toast-text-product');
        if (toastBody) {
            toastBody.textContent = message;
        }
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElement);
        toastBootstrap.show();
    }
}

function addToCart(item) {
    cart.push(item);
    showToast('productAddedToast', '¡' + item + ' añadido con éxito al carrito!');
}