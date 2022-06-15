const dialog = document.querySelector('dialog')
const radios = [...document.querySelectorAll('input[type="radio"]')]

radios.forEach((radio) => {
    radio.addEventListener(
        'click',
        ({ target }) => {
            radios.forEach((tempRadio) => {
                tempRadio.parentElement.parentElement.classList.toggle(
                    'product-checked',
                    false
                )
            })

            target.parentElement.parentElement.classList.toggle(
                'product-checked',
                target.checked
            )
        },
        false
    )
})

dialog.showModal()

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        if (dialog.hasAttribute('open')) {
            console.log('dialog open')
            dialog.close()
        } else {
            dialog.showModal()
        }
    }
})
