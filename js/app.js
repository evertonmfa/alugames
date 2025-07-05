

function alterarStatus(valor) {

  

    if(valor == 1){
       alterarStatusBotao('btngame1')

    }
    else if (valor == 2){

        alterarStatusBotao('btngame2')
        

    }
    else if(valor ==3 ){
        
        alterarStatusBotao('btngame3')
      
    }
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