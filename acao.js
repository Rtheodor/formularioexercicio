let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false


let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false


let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')
let validTelefone = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')




//campo nome
nome.addEventListener('keyup', () => {
  if(nome.value.length <= "2" || nome.value.length == ""){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = ' *Digite seu nome completo!'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: #14abec')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: #14abec')
    validNome = true
  }
})

//Campo Email
email.addEventListener('keyup', () => {
  if(email.value.length <= "2" || nome.value.length == ""){
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = ' *Digite seu email completo!'
    email.setAttribute('style', 'border-color: red')
    validEmail = false
  } else {
    labelEmail.setAttribute('style', 'color: #14abec')
    labelEmail.innerHTML = 'Email'
    email.setAttribute('style', 'border-color: #14abec')
    validEmail = true
  }
})



//campo CPF
cpf.addEventListener('keyup', () => {
   if(isNaN(cpf.length - 1)){
     labelCpf.setAttribute('style', 'color: red')
    labelCpf.innerHTML = ' *Digite seu CPF corretamente!'
    cpf.setAttribute('style', 'border-color: red')
    validCpf = false
  } else {
    labelCpf.setAttribute('style', 'color: #14abec')
    labelCpf.innerHTML = 'CPF'
    cpf.setAttribute('style', 'border-color: #14abec')
    validCpf = true
  }
})

function campoCpf(cpf) {

  const numeroCpf = cpf.value;

  /*if (isNaN(numeroCpf[numeroCpf.length - 1])) { // impede entrar outro caractere que não seja número
    cpf.value = numeroCpf.substring(0, numeroCpf.length - 1);
    return;
  }*/

  cpf.setAttribute("maxlength", "14");
  if (numeroCpf.length == 3 || numeroCpf.length == 7) cpf.value += ".";
  if (numeroCpf.length == 11) cpf.value += "-";

}

// Campo telefone 

document.getElementById("telefone").addEventListener('keyup', mtel)

function mtel(e) {
  v = e.target.value
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  
  //console.log(v);
  return e.target.value = v;
}


//criar storage
function gravar(){
  
}


