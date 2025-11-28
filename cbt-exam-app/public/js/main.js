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
});