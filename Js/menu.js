// funcionalidad modo claro-oscuro

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('white');
    btnSwitch.classList.toggle('active');
})