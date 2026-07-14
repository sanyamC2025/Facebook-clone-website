const openModalButton  = document.getElementById('open-modal-btn');
const closeModalButton = document.getElementById('close-modal-btn');
const registerModal    = document.getElementById('register-modal');
const firstNameInput   = document.querySelector('.modal-form input[placeholder="First name"]');

function toggleModal(shouldOpen) {
    if (shouldOpen) {
        if (registerModal) registerModal.classList.add('active');
        if (firstNameInput) {
            setTimeout(() => firstNameInput.focus(), 50);
        }
    } else {
        if (registerModal) registerModal.classList.remove('active');
    }
}

if (openModalButton) {
    openModalButton.addEventListener('click', () => toggleModal(true));
}

if (closeModalButton) {
    closeModalButton.addEventListener('click', () => toggleModal(false));
}

window.addEventListener('click', (e) => {
    if (e.target === registerModal) {
        toggleModal(false);
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && registerModal && registerModal.classList.contains('active')) {
        toggleModal(false);
    }
});

const loginForm = document.querySelector('.card form');
const signupForm = document.querySelector('.modal-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Log In button clicked! Form submission intercepted successfully.');
    });
}

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sign Up form submitted successfully!');
        toggleModal(false);
    });
}