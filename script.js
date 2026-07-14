const openModalButton  = document.getElementById('open-modal-btn');
const closeModalButton = document.getElementById('close-modal-btn');
const registerModal    = document.getElementById('register-modal');
const firstNameInput   = document.querySelector('.modal-form input[placeholder="First name"]');

function toggleModal(shouldOpen) {
    if (shouldOpen) {
        registerModal.classList.add('active');
        if (firstNameInput) {
            setTimeout(() => firstNameInput.focus(), 50);
        }
    } else {
        registerModal.classList.remove('active');
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
    if (e.key === 'Escape' && registerModal.classList.contains('active')) {
        toggleModal(false);
    }
});