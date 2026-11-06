class PasswordCopier {
  constructor(options = {}) {
    this.options = {
      animation: true,
      container: 'container',
      trigger: 'hover focus',
      customClass: 'custom-tooltip',
      ...options,
    }

    // Selectors
    this.passwordElement = document.querySelector('.show-password')
    this.button = document.querySelector('.btn-copy')

    // Initialize if elements exist
    if (this.button && this.passwordElement) {
      this.bindCopyEvent()
    }
  }

  bindCopyEvent() {
    this.button.addEventListener('click', async () => {
      try {
        const password = this.passwordElement.textContent.trim()
        await navigator.clipboard.writeText(password)

        if (this.tooltip) {
          this.tooltip.setContent({
            '.tooltip-inner': 'Password copied!',
          })

          this.tooltip.show()

          setTimeout(() => {
            this.tooltip.setContent({
              '.tooltip-inner': 'Copy password',
            })
          }, 1500)
        }
      } catch (error) {
        console.error('Failed to copy password:', error)
      }
    })
  }
}


new PasswordCopier()