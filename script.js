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
//alerta para suscribirse
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.innerHTML = '';
    alertPlaceholder.append(wrapper);
}

const newsletterForm = document.getElementById('training-newsletter-form');
const emailInput = document.getElementById('training-email-subscribe');
// Verificacion para poder enviar el correo una vez que si haya correo 
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        
        e.preventDefault(); 
        appendAlert('¡Genial! Ahora eres parte de la Élite. Revisa tu correo.', 'success');
        emailInput.value = '';
    });
}