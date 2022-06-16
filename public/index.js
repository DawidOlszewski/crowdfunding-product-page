const bookmarkContainer = document.querySelector('[bookmark-container]')
const bookmarkCheckbox = document.querySelector('[bookmark-checkbox]')
const bookmarkLabel = document.querySelector('[bookmark-label]')
// const bookmarkImg = document.querySelector('[bookmark-img]')

const radios = [...document.querySelectorAll('input[type="radio"]')]

const buttonSelect0 = document.querySelector('[btn-select-0]')
const buttonSelect1 = document.querySelector('[btn-select-1]')
const buttonSelect2 = document.querySelector('[btn-select-2]')
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
const buttonBackList = [buttonSelect0, buttonSelect1, buttonSelect2]

bookmarkLabel.addEventListener('click', (e) => {
    bookmarkContainer.classList.toggle('bookmarked', bookmarkCheckbox.checked)
    bookmarkContainer.querySelector('p').innerText = bookmarkCheckbox.checked
        ? 'Bookmarked'
        : 'Bookmark'
})

buttonContinueList.forEach((btn) =>
    btn.addEventListener('click', ({ target }) => {
        // target.previousElementSibling.setCustomValidity('incorrect value')
        let input = target.parentElement.querySelector('input')

        if (input.reportValidity()) {
            closeModals()
            openModal(thankYouModal)
        }
    })
)

modalBackdrop.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeModals()
    }
})

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
        tempRadio.parentElement.classList.toggle('product-checked', false)
    })
}

function addCheckedClassToContainer(target) {
    target.checked = true
    target.parentElement.classList.toggle('product-checked', true)
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
