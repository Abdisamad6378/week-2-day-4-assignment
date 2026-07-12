// Modal System
const modals = document.querySelectorAll('.modal-overlay');
const triggerButtons = document.querySelectorAll('[data-modal]');
const closeButtons = document.querySelectorAll('.modal-close, .btn-close-modal');

// Open modal
triggerButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.dataset.modal;
        const modal = document.getElementById(modalId);
        openModal(modal);
    });
});

// Close modal functions
function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close buttons
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = this.closest('.modal-overlay');
        closeModal(modal);
    });
});

// Close on overlay click
modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal(this);
        }
    });
});

// Close on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            if (modal.classList.contains('active')) {
                closeModal(modal);
            }
        });
    }
});

