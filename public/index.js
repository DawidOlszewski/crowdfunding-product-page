const radios = [...document.querySelectorAll('input[type="radio"]')]

const buttonBack0 = document.querySelector('[btn-back-0]')
const buttonBack1 = document.querySelector('[btn-back-1]')
const buttonBack2 = document.querySelector('[btn-back-2]')
const buttonEnd = document.querySelector('[btn-end]')
const buttonCloseModal = document.querySelector('[btn-close-modal]')
const buttonContinueList = [...document.querySelectorAll('[btn-continue]')]
const buttonMenu = document.querySelector('[btn-menu]')

const modalBackdrop = document.querySelector('[modal-backdrop]')
const backProjectModal = document.querySelector('[back-project-modal]')
// prettier-ignore
const thankYouModal = document.querySelector('[thank-you-modal]')
const menu = document.querySelector('[menu]')

// prettier-ignore
const buttonBackList = [buttonBack0, buttonBack1, buttonBack2]

buttonContinueList.forEach((btn) =>
    btn.addEventListener('click', () => {
        closeModals()
        openModal(thankYouModal)
    })
)

buttonBackList.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        checkProduct(index)
        openModal(backProjectModal)
        window.scrollTo(0, 0)
    })
})

buttonEnd.addEventListener('click', closeModals)

buttonCloseModal.addEventListener('click', closeModals)

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('invisible', buttonMenu.checked)
})

radios.forEach((radio) => {
    radio.addEventListener(
        'click',
        ({ target }) => {
            removeCheckedClassFromContainers()
            addCheckedClassToContainer(target)
        },
        false
    )
})

function removeCheckedClassFromContainers() {
    radios.forEach((tempRadio) => {
        tempRadio.parentElement.parentElement.classList.toggle(
            'product-checked',
            false
        )
    })
}

function addCheckedClassToContainer(target) {
    target.checked = true
    target.parentElement.parentElement.classList.toggle('product-checked', true)
}

function checkProduct(index) {
    removeCheckedClassFromContainers()
    addCheckedClassToContainer(radios[index + 3])
}

function openModal(modal) {
    modalBackdrop.classList.toggle('invisible', false)
    modal.classList.toggle('invisible', false)
}

function closeModals() {
    modalBackdrop.classList.toggle('invisible', true)
    backProjectModal.classList.toggle('invisible', true)
    thankYouModal.classList.toggle('invisible', true)
}
