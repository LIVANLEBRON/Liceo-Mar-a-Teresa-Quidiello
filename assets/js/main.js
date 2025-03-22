/**
 * Main JavaScript file for Liceo María Teresa Quidiello website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Back to Top button
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

    // Statistics counter (for statistics section if implemented)
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

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animation for elements when they enter viewport
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length > 0) {
        window.addEventListener('scroll', function() {
            animatedElements.forEach(function(element) {
                if (isInViewport(element)) {
                    element.classList.add('visible');
                }
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Initialize carousel
    const carousel = document.querySelector('#carouselExampleIndicators');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 5000,
            ride: 'carousel'
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