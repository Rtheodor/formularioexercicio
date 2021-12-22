


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
}

listaUser = localStorage.getItem('listaUser');

var obj = JSON.parse(listaUser);

var ConteudoDoCampo = obj;
table = "";

for (let i in ConteudoDoCampo) {

  table += " <div class='label-float'>" +
    "<input type='text' id='nome' value=" + ConteudoDoCampo[i]['nomeCad'] + ">" +
    "<label id='labelNome' for='nome'>Nome</label>" +
    "</div>";

  table += " <div class='label-float'>" +
    "<input type='text' id='email' value=" + ConteudoDoCampo[i]['emailCad'] + ">" +
    "<label id='labelNome' for='email'>Email</label>" +
    "</div>";

  table += " <div class='label-float'>" +
    "<input type='text' id='cpf'  value=" + ConteudoDoCampo[i]['cpfCad'] + ">" +
    "<label id='labelNome' for='cpf'>CPF</label>" +
    "</div>";

  table += " <div class='label-float'>" +
    "<input type='text' id='telefone'  value=" + ConteudoDoCampo[i]['telefoneCad'] + ">" +
    "<label id='labelNome' for='telefone'>Telefone</label>" +
    "</div>";

  table += "<div class='justify-center'>" +
    "<button onclick='editar(" + ConteudoDoCampo[i]['cpfCad'] + ")'>Editar</button>" +
    "<button type='button' onclick=excluir('" + ConteudoDoCampo[i]['cpfCad'] + "')>Excluir </button>" +
    "</div>";
}

document.getElementById('sovai').innerHTML = table;

//Ainda não mostra o telefone completo no LocalStorage e o excluir sem exito.
function excluir(telefone) {
  alert(telefone);

  let listaUser = localStorage.getItem('listaUser');
  var obj = JSON.parse(listaUser);

  var estaaqui = obj;

  for (let i in estaaqui) {
    if (telefone === estaaqui[i]['telefoneCad']) {
      localStorage.removeItem('telefoneCad')
    }
  }
}