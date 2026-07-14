/**
 * Facebook Clone - Sign Up Modal Controller
 * Handles interactive presentation layer for registration workflow
 */

// Core DOM Elements
const openModalButton  = document.getElementById('open-modal-btn');
const closeModalButton = document.getElementById('close-modal-btn');
const registerModal    = document.getElementById('register-modal');
const firstNameInput   = document.querySelector('.modal-form input[placeholder="First name"]');

/**
 * Toggles visibility of the registration popup box
 * @param {Boolean} shouldOpen 
 */
function toggleModal(shouldOpen) {
    if (shouldOpen) {
        registerModal.classList.add('active');
        // Accessibility / UX: autofocus the first name box immediately once it displays
        if (firstNameInput) {
            setTimeout(() => firstNameInput.focus(), 50);
        }
    } else {
        registerModal.classList.remove('active');
    }
}

// Global Event Listeners
if (openModalButton) {
    openModalButton.addEventListener('click', () => toggleModal(true));
}

if (closeModalButton) {
    closeModalButton.addEventListener('click', () => toggleModal(false));
}

// UX Safeguard: Dismiss popup if the user clicks anywhere outside the card wrapper
window.addEventListener('click', (e) => {
    if (e.target === registerModal) {
        toggleModal(false);
    }
});

// Accessibility: Close on Escape key press
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && registerModal.classList.contains('active')) {
        toggleModal(false);
    }
});