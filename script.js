// JS para el carrusel 
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-prev');
const dotsNav = document.querySelector('.carousel-dots');

let currentIndex = 0;

  // Crear los puntos dinámicamente
slides.forEach((_, index) => {
    const dot = document.createElement('button');
    if (index === 0) dot.classList.add('active');
    dotsNav.appendChild(dot);
});

const dots = Array.from(dotsNav.children);

function updateCarousel(index) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});
// Variable global para el carrito por si se va a necesitar
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
    /* verifica que exista un elemento toastElement */
    
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

// Opcional: Ejecutar la actualización al cargar la página para asegurar que el contador se oculte si está vacío
document.addEventListener('DOMContentLoaded', updateCartCount);
