
//ENDPOINT 

function fazGet(url){
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

function criaLinha(usuarios){
  linha = document.createElement("tr");
  tdNome = document.createElement("tr");
  tdEmail = document.createElement("tr");
  tdConfEmail = document.createElement("tr");
  tdCpf = document.createElement("tr");
  tdPhone = document.createElement("tr");
     
  tdNome.innerHTML = usuarios.name
  tdEmail.innerHTML = usuarios.email
  tdConfEmail.innerHTML = usuarios.confirmEmail
  tdCpf.innerHTML = usuarios.cpf
  tdPhone.innerHTML = usuarios.telefone

  linha.appendChild(tdNome);
  linha.appendChild(tdEmail);
  linha.appendChild(tdConfEmail);
  linha.appendChild(tdCpf);
  linha.appendChild(tdPhone);
  
  
document.getElementById('nome').value = usuarios.name;
document.getElementById('email').value = usuarios.email;
document.getElementById('cpf').value = usuarios.cpf;
document.getElementById('telefone').value = usuarios.telefone;

 //return linha;
}


function main(){
  let data = fazGet("https://private-56d1e-charlesaraujodasilva.apiary-mock.com/users")
   let usuarios = JSON.parse(data);
     let formulario = document.getElementById("formulario")
       usuarios.forEach(element => {
       let linha = criaLinha(element);
       formulario.appendChild(linha);
     });
   //Para cada usuario
      //criar uma linha
      //adicionar na formulario
 }
 
 main()











