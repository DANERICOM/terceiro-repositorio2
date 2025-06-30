const numeroSenha = document.querySelector('.parametro-senha__texto');//puxar o documento do html
//variaveis
let tamanhoSenha = 12;
let tamanhoMaxSenha = 20;
let tamanhoMinSenha = 8;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

//definindo os botões
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

//aumentar e diminuir a quantidade de caracteres na senha
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
//GERAR OS CARACTERES
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');//puxar as checkboxs e gravar na variavel seus valores
    //tipos de caracteres
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '1234567890';
    const simbolos = 'u!@#$%&*?';
geraSenha();
function geraSenha(){
    //só gerar determinados caracteres caso a checkbox deles estejam positivos
    let alfabeto = '';
        //maiusculas 
        if(checkbox[0].checked){
            alfabeto = alfabeto + letrasMaiusculas;
        }
        //minusculas
        if(checkbox[1].checked){
            alfabeto = alfabeto + letrasMinusculas;
        }
        //numeros
        if(checkbox[2].checked){
            alfabeto = alfabeto + numeros;
        }
        //simbolos
        if(checkbox[3].checked){
            alfabeto = alfabeto + simbolos;
        }

    //realmente gerar a senha
    let senha = '';
    for(let i=0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
}