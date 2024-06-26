document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {
    e.preventDefault()
})

document.getElementsByTagName('button')[0].addEventListener('click', function () {
    localStorage.setItem('Username', document.getElementById('userName').value)
    localStorage.setItem('Email', document.getElementById('email').value)
    localStorage.setItem('Phone Number', document.getElementById('phoneNumber').value)
})