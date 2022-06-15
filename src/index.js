const radios = [...document.querySelectorAll('input[type="radio"]')]

const buttonBack0 = document.querySelector(['btn-back-0'])
const buttonBack1 = document.querySelector(['btn-back-1'])
const buttonBack2 = document.querySelector(['btn-back-2'])
const buttonContinue = [...document.querySelectorAll(['btn-continue'])]

radios.forEach((radio) => {
    radio.addEventListener(
        'click',
        ({ target }) => {
            removeCheckedClassInContainers()
            AddCheckedClassToContainer(target)
        },
        false
    )
})

function removeCheckedClassInContainers() {
    radios.forEach((tempRadio) => {
        tempRadio.parentElement.parentElement.classList.toggle(
            'product-checked',
            false
        )
    })
}

function AddCheckedClassToContainer(target) {
    target.parentElement.parentElement.classList.toggle(
        'product-checked',
        target.checked
    )
}
