
//ENDPOINT - GET
/*function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
  }
  function criaLinha(usuario){
    /*linha = document.createElement("tr");
    tdNome = document.createElement("tr");
    tdEmail = document.createElement("tr");
    tdConfEmail = document.createElement("tr");
    tdCpf = document.createElement("tr");
    tdPhone = document.createElement("tr");
       
    tdNome.innerHTML = usuario.name
    tdEmail.innerHTML = usuario.email
    tdConfEmail.innerHTML = usuario.confirmEmail
    tdCpf.innerHTML = usuario.cpf
    tdPhone.innerHTML = usuario.phone
  
    linha.appendChild(tdNome);
    linha.appendChild(tdEmail);
    linha.appendChild(tdConfEmail);
    linha.appendChild(tdCpf);
    linha.appendChild(tdPhone);*/
/*   
 document.getElementById('nome').value = usuario.name;
 document.getElementById('email').value = usuario.email;
 document.getElementById('cpf').value = usuario.cpf;
 document.getElementById('telefone').value = usuario.telefone;
	
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
 
 main()*/
/*
let listaUser = localStorage.getItem('listaUser');
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Nome";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Email";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "CPF";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Telefone";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
thead.appendChild(row_1);

var obj = JSON.parse(listaUser);

var a = obj;

table.appendChild(thead);
table.appendChild(tbody);

for (let i in a) {

  let row_2 = document.createElement('tr');
  let row_2_data_1 = document.createElement('td');
  row_2_data_1.innerHTML = a[i]['nomeCad'];
  let row_2_data_2 = document.createElement('td');
  row_2_data_2.innerHTML = a[i]['emailCad'];
  let row_2_data_3 = document.createElement('td');
  row_2_data_3.innerHTML = a[i]['cpfCad'];
  let row_2_data_4 = document.createElement('td');
  row_2_data_4.innerHTML = a[i]['telefoneCad'];
  
  row_2.appendChild(row_2_data_1);
  row_2.appendChild(row_2_data_2);
  row_2.appendChild(row_2_data_3);
  row_2.appendChild(row_2_data_4);
  tbody.appendChild(row_2);
}*/

let listaUser = localStorage.getItem('listaUser');
var obj = JSON.parse(listaUser);

var a = obj;
table = "";

for (let i in a) {
  
  table += " <div class='label-float'>" +
  "<input type='text' id='nome' value="+a[i]['nomeCad']+">" +
  "<label id='labelNome' for='nome'>Nome</label>" +
  "</div>";

  table += " <div class='label-float'>" +
  "<input type='text' id='email' value="+a[i]['emailCad']+">" +
  "<label id='labelNome' for='email'>Email</label>" +
  "</div>";

  table += " <div class='label-float'>" +
  "<input type='text' id='cpf'  value="+a[i]['cpfCad']+">" +
  "<label id='labelNome' for='cpf'>CPF</label>" +
  "</div>";

  table += " <div class='label-float'>" +
  "<input type='text' id='telefone'  value="+a[i]['telefoneCad']+">" +
  "<label id='labelNome' for='telefone'>Telefone</label>" +
  "</div>";

  table += "<div class='justify-center'>" +
  "<button onclick='editar("+a[i]['cpfCad']+")'>Editar</button>" +
  "<button type='button' onclick=excluir('"+a[i]['cpfCad']+"')>Excluir </button>" +
  "</div>";
}

document.getElementById('sovai').innerHTML = table;


function excluir(cpf){
alert(cpf);
let listaUser = localStorage.getItem('listaUser');
var obj = JSON.parse(listaUser);

var a = obj;


for (let i in a) {
    if(cpf === a[i]['cpfCad'] ){
      localStorage.removeItem('cpfCad')
    }
}
}


