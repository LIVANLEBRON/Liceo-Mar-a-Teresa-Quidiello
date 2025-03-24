/**
 * Archivo específico para mejorar la compatibilidad con dispositivos Android
 */

document.addEventListener('DOMContentLoaded', function() {
    // Detectar si es un dispositivo Android
    const isAndroid = /Android/i.test(navigator.userAgent);
    
    if (isAndroid) {
        // Aplicar clases específicas para Android
        document.body.classList.add('android-device');
        
        // Ajustar carrusel para Android
        const carouselItems = document.querySelectorAll('.carousel-item');
        carouselItems.forEach(function(item) {
            const img = item.querySelector('img');
            if (img) {
                // Asegurar que las imágenes del carrusel se ajusten correctamente
                img.style.objectFit = 'cover';
                img.style.height = '100%';
                img.style.width = '100%';
            }
        });
        
        // Mejorar la interacción táctil en la navegación
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            // Aumentar el área táctil
            link.style.padding = '12px';
            
            // Agregar un pequeño retraso para evitar clics accidentales
            link.addEventListener('touchstart', function(e) {
                this.dataset.touchStarted = 'true';
            });
            
            link.addEventListener('touchend', function(e) {
                if (this.dataset.touchStarted === 'true') {
                    // Limpiar el estado
                    this.dataset.touchStarted = 'false';
                }
            });
        });
        
        // Ajustar el comportamiento del menú desplegable
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarToggler && navbarCollapse) {
            // Asegurar que el menú se cierre al hacer clic en un enlace
            const menuLinks = navbarCollapse.querySelectorAll('.nav-link');
            menuLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    // Cerrar el menú al hacer clic en un enlace
                    if (navbarCollapse.classList.contains('show')) {
                        navbarToggler.click();
                    }
                });
            });
        }
        
        // Ajustar el tamaño de fuente para textos largos
        const longTextElements = document.querySelectorAll('.navbar-brand h1, .carousel-caption h1');
        longTextElements.forEach(function(element) {
            if (element.textContent.length > 20) {
                element.style.fontSize = '0.9em';
                element.style.lineHeight = '1.2';
            }
        });
    }
});