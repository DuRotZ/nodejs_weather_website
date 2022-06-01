const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading message...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
               messageOne.textContent = data.Location
               messageTwo.textContent = data.forecast
            }
        })
    })
}) 

search.addEventListener('input', updateValue)

function updateValue(e) {
    if (location) {
        messageOne.textContent = e.target.value
        messageTwo.textContent = e.target.value
    }
}

