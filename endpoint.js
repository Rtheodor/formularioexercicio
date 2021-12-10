//ENDPOINT - GET

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
  }
  
  function criaLinha(usuario){
    linha = document.createElement("tr");
    tdNome = document.createElement("tr");
    tdEmail = document.createElement("tr");
    tdCpf = document.createElement("tr");
    tdPhone = document.createElement("tr");
    
      
    tdNome.innerHTML = usuario.name
    tdEmail.innerHTML = usuario.email
    tdCpf.innerHTML = usuario.cpf
    tdPhone.innerHTML = usuario.phone
  
    linha.appendChild(tdNome);
    linha.appendChild(tdEmail);
    linha.appendChild(tdCpf);
    linha.appendChild(tdPhone);
    
    return linha;
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