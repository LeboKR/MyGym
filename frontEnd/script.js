//Listen to the signUp button for a click
//Verify that all feilds are entered
//Save the data in local storage (for now)

const firstNameEl = document.getElementById('firstName')
const lastNameEl = document.getElementById('lastName')
const userEmailEl = document.getElementById('firstName')
const userPasswordEl = document.getElementById('firstName')
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
        
    } else {
        console.log('Please enter all fields.')
    }
})

