
const numeroSenha = document.querySelector('.parametro-senha__texto');//puxar o documento do html
let tamanhoSenha = 12;
const tamanhoMaxSenha = 20;
const tamanhoMinSenha = 8;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > tamanhoMinSenha){
        tamanhoSenha -= 1;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if(tamanhoSenha < tamanhoMaxSenha){
        tamanhoSenha += 1;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function geraSenha(){
    let senha = '';
    for(let i=0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.irandom()*letrasMaiusculas.length;
        //numeroAleatorio = Math.floor(numeroAleatorio);
    }
    senha = senha + letrasMaiusculas[numeroAleatorio];
    campoSenha.value = letrasMaiusculas;
}