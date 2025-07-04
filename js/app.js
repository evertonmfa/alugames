let botao1 = '1'
function alterarStatus(botao1){

    alterarStatusBotao()
  
//alert('Teste ok')
}

function alterarStatusBotao() {

    
    let botao = document.getElementById('game-1');
    if (botao.classList.contains('dashboard__item__button')) {
        alert('tem a class')
        botao.classList.remove('dashboard__item__button');
        botao.classList.add('dashboard__item__button dashboard__item__button--return')
    }   
    else{
        botao.classList.remove('dashboard__item__button dashboard__item__button--return');
        botao.classList.add('dashboard__item__button')
        alert('Na o tem a class')

    }
}