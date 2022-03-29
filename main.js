let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('form');
let textEmail = document.getElementById('textEmail');
let textPassword = document.getElementById('textPassword');
let textForm = document.getElementById('textForm')


form.addEventListener('submit', (event) => {

  if(email.value == '' && password.value == '') {
    textForm.textContent = 'Você precisa preencher todos os campos!'
  } else if (validatorEmail(email.value) !== true) {
    textEmail.textContent = "O campo e-mail deve estar no formato Ex: email@abc.com"
  } else if(passwordValidator(password.value) !== true) {
    textPassword.textContent = "A senha dever no minimo 6 caracteres, ao menos 1 numero e ao menos um caracter especial"
  } else {
    console.log(email.value);
    console.log(password.value);
    textEmail.textContent = '';
    textPassword.textContent = '';
    textForm.textContent = ''
    console.log('Você você será redirecionado para a página X');
    clear()
  }
  
  
  event.preventDefault()
})


function validatorEmail(email) {
  let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email)
}

function passwordValidator(password) {
  let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return passwordPattern.test(password)
}

function clear() {
  email.value = '';
  password.value = ''

}