//Getting the keycode of the button clicked on the keyboard.
window.addEventListener('keydown', getKeyCode);

function getKeyCode(e) {
    const keyCodeContainer = document.querySelector('.keyCode');
    const word = document.querySelector('#word');
    // e.preventDefault();

    keyCodeContainer.textContent = e.which;
    keyCodeContainer.classList.add('getKey');
    const output = `<span>${e.key}</span>`;
    word.innerHTML = `${output} key has been clicked.`;

    // Checking out if the space key has been clicked...
    if (e.key === ' ') {
        word.innerHTML = `${output.replace(' ', 'SPACE')} key has been clicked.`;
    }
}