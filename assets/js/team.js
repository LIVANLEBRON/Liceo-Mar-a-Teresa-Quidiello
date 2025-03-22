/**
 * Team page functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Team filtering functionality
    const filterButtons = document.querySelectorAll('.team-filter .btn');
    const teamSections = document.querySelectorAll('section[id^="docentes-"], section[id="direccion"], section[id="coordinacion-academica"], section[id="coordinacion-administrativa"], section[id="psicologos-escolares"], section[id="secretarias-y-digitadores"]');
    
    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide sections based on filter
            if (filter === 'all') {
                teamSections.forEach(section => {
                    section.style.display = 'block';
                });
            } else if (filter === 'direccion') {
                teamSections.forEach(section => {
                    if (section.id === 'direccion') {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });
            } else if (filter === 'academica') {
                teamSections.forEach(section => {
                    if (section.id === 'coordinacion-academica') {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });
            } else if (filter === 'administrativa') {
                teamSections.forEach(section => {
                    if (section.id === 'coordinacion-administrativa' || section.id === 'secretarias-y-digitadores') {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });
            } else if (filter === 'docentes') {
                teamSections.forEach(section => {
                    if (section.id.startsWith('docentes-')) {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 'none';
                    }
                });
            }
        });
    });
    
    // Add animation to team cards
    const teamItems = document.querySelectorAll('.team-item');
    
    // Add animation class when scrolling
    window.addEventListener('scroll', function() {
        teamItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100) {
                item.classList.add('animate');
            }
        });
    });
    
    // Trigger scroll event on page load to animate visible items
    window.dispatchEvent(new Event('scroll'));
});