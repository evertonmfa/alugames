
let alugados = 1;

function alterarStatus(id) {



    if (id == 1) {
        alterarStatusBotao(`game-${id}`)


    }
    else if (id == 2) {

        alterarStatusBotao(`game-${id}`)


    }
    else if (id == 3) {

        alterarStatusBotao(`game-${id}`)

    }
}

function alterarStatusBotao(btn) {


    let gameClicado = document.getElementById(btn);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');


    if (botao.classList.contains('dashboard__item__button--return')) {

        if (confirm('Deseja realmente devolver o jogo?')) {
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            imagem.classList.remove('dashboard__item__img--rented');
        }
        alugados --;



    }
    else {

        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented')
        alugados ++;
                

    }
    console.log(`Toatal de jogos alugados ${alugados}`)
}