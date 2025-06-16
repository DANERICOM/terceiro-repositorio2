const numeroSenha = document.querySelector('.parametro-senha__texto');//puxar o documento do html
let tamanhoSenha = 12;
const tamanhoMaxSenha = 20;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        tamanhoSenha -= tamanhoSenha;
    }
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho(){
    if(tamanhoSenha < tamanhoMaxSenha){
        tamanhoSenha += 1;
    }
    numeroSenha
}