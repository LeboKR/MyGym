/*
const firstNameEl = document.getElementById('firstName')
const lastNameEl = document.getElementById('lastName')
const userEmailEl = document.getElementById('email')
const userPasswordEl = document.getElementById('password')
const signUpBtnEl = document.getElementById('signUpBtn')


signUpBtnEl.addEventListener('click', event =>{
    event.preventDefault() 
    const firstName = firstNameEl.value
    const lastName = lastNameEl.value
    const userEmail = userEmailEl.value
    const userPassword = userPasswordEl.value

    if(firstName.trim() && lastName.trim() && userEmail.trim() && userPassword.trim())
    {
        console.log('New Account successfully created.')
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        localStorage.setItem('userEmail', userEmail)
        localStorage.setItem('userPassword', userPassword)
        
    } else {
        console.log('Please enter all fields.')
    }
})


*/