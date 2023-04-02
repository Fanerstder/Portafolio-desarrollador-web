

const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#correo')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      $buttonMailto.setAttribute('href', `mailto:fanerstder@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}  tema ${form.get('tema')} &body= ${form.get('message')}`)
      $buttonMailto.click()
    }