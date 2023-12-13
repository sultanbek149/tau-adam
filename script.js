const url = 'https://script.google.com/macros/s/AKfycbwRF1RkdNGSvDBF72zuTJKnWfnLifefma_oL0wcDbCO4slksQTm2Et2sq30JKpnBVWc/exec'

const form = document.querySelector('#form')
const username = document.querySelector('#name')
const email = document.querySelector('#email')
const tel = document.querySelector('#tel')


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(url, { method: 'POST', body: new FormData(form) })
        .then(resp => {

            clearFields()
            showAlert('Сіздің сұрауыңыз қабылданды!', true)
            setTimeout(goTo, 3000)
            return resp
        })
        .catch(err => showAlert('Қате', false))
})


const showAlert = (message, isSuccess) => {
    const div = document.createElement('div')
    div.className = `alert ${isSuccess ? 'alert-success' : 'alert-danger'} alert-message`;
    div.appendChild(document.createTextNode(message));

    document.querySelector('.wrapper').appendChild(div);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 4000);
}


const clearFields = () => {
    username.value = '';
    email.value = '';
    tel.value = '';
}

const goTo = () => {
    const url =
        'https://wa.me/77786485054' + '?text=Сәлеметсіз бе?! ТАУ АДАМ конференциясына қатысқым келеді, толық ақпарат берсеңіз…%0a%0a';

    window.open(url, '_blank').focus()
}