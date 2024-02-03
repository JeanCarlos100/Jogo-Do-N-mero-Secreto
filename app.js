let numeroMaximo = 50;
let listaDeNumerosSorteador = [];
let numeroAleatorio = geraNumeroAleatorio();
let tentativa = 1;

function exibirTexteNTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});

}

function exibirMessagemInicial() {

    exibirTexteNTela('h1','jogo do número secreto');
    exibirTexteNTela('p',`Você precisa adivinhar um número entre 1 e ${numeroMaximo}`);

}

exibirMessagemInicial();

function verificarChute() {

    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio){

        exibirTexteNTela('h1', 'Acertou!');

        let palavraTentativar = tentativa > 1 ? 'tentativas' : 'tentativa';
        let menssagemTentativar = `'Você descobriu o número secreto com ${tentativa} ${palavraTentativar}!`;

        exibirTexteNTela('p', menssagemTentativar);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{

        if (chute > numeroAleatorio) {
            exibirTexteNTela('p', 'O número secreto é menor');
        } else{
            exibirTexteNTela('p', 'O número secreto é maior');
        }
        tentativa++;
        limpaTela();
    }
}

function geraNumeroAleatorio () {

    let numeroEscolidor = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElemeontoNaLista = listaDeNumerosSorteador.length;

    if (quantidadeDeElemeontoNaLista == numeroMaximo){
        listaDeNumerosSorteador = [];
    }

    if (listaDeNumerosSorteador.includes(numeroEscolidor)){
        return geraNumeroAleatorio();
    } else {
        listaDeNumerosSorteador.push(numeroEscolidor);
        return numeroEscolidor;
    }
      
}

function limpaTela() {

    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {

    numeroAleatorio = geraNumeroAleatorio();
    limpaTela();
    tentativa = 1;
    exibirMessagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}