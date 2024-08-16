export const AlertError = {
    alement: document.querySelector('.alert-error'),
    open() {
        AlertError.alement.classList.add('open')
    },
    close() {
        AlertError.alement.classList.remove('open')
    }
}

