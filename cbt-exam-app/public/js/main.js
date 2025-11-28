// Main JavaScript file for CBT Exam System

document.addEventListener('DOMContentLoaded', function() {
    // Add any global JavaScript functionality here
    
    // Example: Confirmation for important actions
    const deleteForms = document.querySelectorAll('form[method="POST"]');
    deleteForms.forEach(form => {
        const methodInput = form.querySelector('input[name="_method"]');
        if (methodInput && methodInput.value === 'DELETE') {
            form.addEventListener('submit', function(e) {
                const confirmDelete = confirm('Are you sure you want to delete this item? This action cannot be undone.');
                if (!confirmDelete) {
                    e.preventDefault();
                }
            });
        }
    });
    
    // Timer functionality for exam pages
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        // Timer is handled in the exam/take.ejs page
        console.log('Exam timer initialized');
    }
    
    // Add responsive behavior for mobile
    if (window.innerWidth < 768) {
        document.body.classList.add('mobile-view');
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
        }
    });
    
    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to cards on page load
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});