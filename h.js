//exercicio-1

let preco = 100;
let desconto = preco * 0.20;
let precoComDesconto = preco - desconto;
console.log(precoComDesconto);


//exercicio-2

let nome = "Thiago";
let sobrenome = "Hunas";
let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);


//exercicio-3

let numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}


//exercicio-4

let frutas = ['maçã', 'banana', 'laranja'];
frutas.push('uva');
console.log(frutas);


//exercicio-5

let pessoa = {
    nome: "Hunas",
    idade: 17,
    cidade: "São Paulo"
};

console.log(pessoa.nome);
console.log(pessoa.idade);


//exercicio-6

let pessoa1 = {
    nome: "Hunas",
    idade: 30,
    cidade: "São Paulo"
};

pessoa1.email = "hunas@gmail.com";
console.log(pessoa);


//exercicio-7

let numeros1 = [1, 2, 3, 4, 5];
let dobros = numeros1.map(num => num * 2);
console.log(dobros);


//exercicio-8

let idades = [15, 22, 18, 30, 12];
let maioresDeDezoito = idades.filter(idade => idade > 18);
console.log(maioresDeDezoito);


//exercicio-9

let cores = ['vermelho', 'preto', 'azul'];
cores.forEach(cor => {
    console.log(cor);
});


//exercicio-10

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    especificacoes: {
        ano: 2014,
        cor: "prata"
    }
};

console.log(carro.especificacoes.cor);


//exercicio-11

let usuario = { nome: 'Thiago', idade: 30 };
let { nome1, idade } = usuario;

console.log(nome);
console.log(idade);


//exercicio-12

let animais = ['cachorro', 'gato', 'pássaro', 'gato'];
let contagemGato = animais.filter(animal => animal === 'gato').length;

console.log(contagemGato);


//exercicio-13

let nota = 9; 
let resultado = nota >= 7 ? "Aprovado parabéns" : "Reprovado ops";
console.log(resultado);


//exercicio-14

let texto = "Olá, mundo!";
let textoMinusculo = texto.toLowerCase();
console.log(textoMinusculo);


//exercicio-15

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let novoArray = [...array1, ...array2];

console.log(novoArray);


//exercicio-16

let numeros3 = [10, 20, 30, 40];
numeros.shift();

console.log(numeros3);


//exercicio-17

let produto = { nome: 'Notebook', preco: 4570 };

if ('preco' in produto) {
    console.log("A propriedade 'preco' existe.");
} else {
    console.log("A propriedade 'preco' não existe.");
}


//exercicio-18

let numeros7 = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros7[i];
}

console.log("Números:", numeros7);
console.log("Soma:", soma);


//exercicio-19

let usuario2 = { nome: 'Maria', idade: 25 };
let copiaUsuario = Object.assign({}, usuario, { cidade: 'São Paulo' });

console.log("Usuário Original:", usuario2);
console.log("Cópia do Usuário:", copiaUsuario);


//exercicio-20

let numeros6 = [1, 2, 3, 4];
let produto1 = numeros.reduce((acc, num) => acc * num, 1);

console.log(produto);


