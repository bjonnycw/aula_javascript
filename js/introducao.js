/*

// INTRODUÇÃO

var nome = 'Jonny Eduardo Banach';
var idade = 19;
var idade2 = 10;

alert('Bem vindo ' + nome + ' (' + idade + ')');
alert(idade + idade2);

var frase = 'Japão é o melhor time do mundo';
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace('Japão', 'Brasil'));
console.log(frase.toUpperCase());

var n1 = 5;
var n2 = 3.1;
console.log(n1 * n2);

// ARRAYS

var lista = ['maça', 'pera', 'laranja'];
lista.pop();
lista.push('uva');

console.log(lista);
console.log(lista[1]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(' | '));

// DICIONÁRIOS

var fruta = {nome:'maça', cor:'vermelha'};
console.log(fruta);
console.log(fruta.nome);

var frutas = [
    {nome:'maça', cor:'vermelha'},
    {nome:'uva', cor:'roxa'},
];
console.log(frutas);
console.log(frutas[0].nome);

// CONDICIONAIS

var idade = prompt('Qual sua idade?');

if (idade >= 18){
    alert('maior de idade');
} else {
    alert('menor de idade');
};

// LAÇOS DE REPETIÇÃO

var count = 0;

while (count < 5){
    console.log(count);
    //count = count + 1;
    count++;
};

var count;
for (count = 0; count <= 5; count++){
    alert(count);
};

// DATE

var d = new Date();
alert(d.getMonth() + 1);
// JANEIRO = 0
alert(d.getMinutes());

// FUNÇÕES

function soma(n1, n2){
    return n1 + n2;
}

//alert(soma(5, 10));

// Variável global
var validar;

function validaIdade(idade){
    // Variável local
    var validar;
    
    validar;
    if(idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt('Digite a idade')
console.log(validaIdade(idade))

*/