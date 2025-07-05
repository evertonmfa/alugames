

function alterarStatus() {

    alterarStatusBotao('btngame1')

    //alert('Teste ok')
}

function alterarStatusBotao(btn) {


    let botao = document.getElementById(btn);
    if (botao.classList.contains('dashboard__item__button--return')) {

        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';

    }
    else {

        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver';

    }
}