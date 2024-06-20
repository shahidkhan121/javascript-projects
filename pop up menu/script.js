const popup = document.querySelector('.popup')
const button = document.querySelector('button')
const close = document.querySelector('.close-icon')


button.addEventListener('click', () => {
    popup.classList.add('open')
})
close.addEventListener('click', () => {
    popup.classList.remove('open')
})