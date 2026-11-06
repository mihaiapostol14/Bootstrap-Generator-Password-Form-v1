const password = document.querySelector('.show-password').textContent
const Btncopy = document.querySelector('.btn-copy')

Btncopy.addEventListener('click', () => {
  if (!password) {
    Btncopy.disabled = true
    return
  }
})
