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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formFields = document.querySelectorAll('.form-control');
    const successMessage = document.querySelector('.success-message');

    // Validación en tiempo real
    formFields.forEach(field => {
        field.addEventListener('input', () => {
            if (field.value.trim() === "") {
                field.classList.add('invalid');
                field.classList.remove('valid');
            } else {
                field.classList.add('valid');
                field.classList.remove('invalid');
            }
        });
    });

    // Mostrar mensaje de éxito cuando se "envíe" el formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Evitar el envío real del formulario

        // Simulación de tiempo de envío (ej. animación o delay)
        setTimeout(function() {
            form.reset();  // Resetear el formulario
            formFields.forEach(field => {
                field.classList.remove('valid', 'invalid');  // Limpiar la validación
            });

            successMessage.classList.add('show');  // Mostrar mensaje de éxito con animación

            // Ocultar el mensaje después de 3 segundos
            setTimeout(function() {
                successMessage.classList.remove('show');  // Quitar la clase 'show' para ocultar el mensaje
            }, 3000); // 3 segundos de visibilidad
        }, 1000); // El mensaje aparece después de 1 segundo
    });
});

