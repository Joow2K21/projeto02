const form = document.getElementById('form-contato');
const contatos = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeDoContato = document.getElementById('nome-do-contato');
    const inputTelefoneDoContato = document.getElementById('numero-do-contato');

    if (numero.includes(inputNomeDoContato.value)) {
        alert(`O contato: ${inputNomeDoContato.value} ja foi inserido`);
    } else {
        contatos.push(inputNomeDoContato.value);
        numero.push(parseFloat(inputTelefoneDoContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeDoContato.value}</td>`;
        linha += `<td>${inputTelefoneDoContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeDoContato.value = '';
    inputTelefoneDoContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.getElementById('tbody');
    corpoTabela.innerHTML = linhas; 
}

