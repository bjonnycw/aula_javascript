
function clicou(){
    document.getElementById('agradecimento').innerHTML = '<b>Obrigado por clicar</b>';
}

function redirecionar(){
    window.open('https://winkapp.com.br/');
    // abre em outra janela

    // window.location.href = 'https://winkapp.com.br/';
    // abre na mesma janela
}

function trocar(elemento){
    elemento.innerHTML = 'Obrigado por passar o mouse!';
    // alert('trocar texto');
}

function voltar(elemento){
    elemento.innerHTML = 'Passe o mouse aqui';
}

function load(){
    alert('Página carregada!');
}

function funcChange(elemento){
    console.log(elemento.value);
}