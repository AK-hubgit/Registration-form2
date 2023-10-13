const form = document.querySelector('#form')
const Username = document.querySelector('#Username')
const Email = document.querySelector('#Email')
const Password = document.querySelector('#Password')
const cpassword = document.querySelector('#cpassword')
/*
1.FORM =
submit,eventlistner.(e){receiving event as parameter}
e.preventDefault{prevernting form submission before validation}
CREATE BELOW FUNCTIONS
0.1 validatInputs(){
    const val =  Username.value.trim
}
0.2 setSuccess()
0.3 setError()
*/
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validatInputs();
})
function validatInputs() {
    const UsernameVal =  Username.value.trim()
    const EmailVal =  Email.value.trim()
    const PasswordVal =  Password.value.trim()
    const cpasswordVal =  cpassword.value.trim()

    if(UsernameVal===''){
        setError(Username,"username is required")
    }
    else{
        setSuccess(Username)
    }

    if(EmailVal===''){
        setError(Email,'Email id is required')
    }
    else if (!validateEmail(Email)){
        setError(Email,'please enter a valid E-mail id')
    }
    else{
        setSuccess(Email)
    }

    if(PasswordVal===''){
        setError(Password,'password is required')
    }
    else if (PasswordVal.length<8){
        setError(Password,'password must be 8 characters long')
    }
    else{
        setSuccess(Password)
    }

    
    if(cpasswordVal===''){
        setError(cpassword,'confirm password is required')
    }
    else if (cpasswordVal!==PasswordVal){
        setError(cpassword,'confirm password does not match')
    }
    else {
        setSuccess(cpassword)
    }

}

function setError(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText=message;
    inputGroup.classList.add("success")
    inputGroup.classList.remove("error")
}
function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText=' ';
    inputGroup.classList.add("error")
    inputGroup.classList.remove("success")
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

