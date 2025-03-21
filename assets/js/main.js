/**
 * Main JavaScript file for Liceo María Teresa Quidiello website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar tooltips de Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Botón volver arriba
    var backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }

    // Contador de estadísticas (para la sección de estadísticas si se implementa)
    document.querySelectorAll('.counter').forEach(function(counter) {
        let counted = false;
        
        window.addEventListener('scroll', function() {
            if (isInViewport(counter) && !counted) {
                const target = parseInt(counter.getAttribute('data-target'));
                let count = 0;
                const interval = setInterval(function() {
                    counter.innerText = count;
                    if (count >= target) {
                        clearInterval(interval);
                    }
                    count += Math.ceil(target / 100);
                    if (count > target) count = target;
                }, 20);
                counted = true;
            }
        });
    });

    // Función para verificar si un elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animación para elementos cuando entran en viewport
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length > 0) {
        window.addEventListener('scroll', function() {
            animatedElements.forEach(function(element) {
                if (isInViewport(element)) {
                    element.classList.add('animated');
                }
            });
        });
    }

    // Filtro para galería de imágenes (si se implementa)
    const filterButtons = document.querySelectorAll('.filter-button');
    const filterItems = document.querySelectorAll('.filter-item');
    
    if (filterButtons.length > 0 && filterItems.length > 0) {
        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                // Remover clase activa de todos los botones
                filterButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                
                // Agregar clase activa al botón clickeado
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filtrar elementos
                filterItems.forEach(function(item) {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Validación de formularios
    const forms = document.querySelectorAll('.needs-validation');
    
    if (forms.length > 0) {
        Array.from(forms).forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                
                form.classList.add('was-validated');
            }, false);
        });
    }
});