// const precos = [100, 100, 100, 100, 50]

function solucao(precos) {
    //ver se tem promocao
    // se tiver, somar precos e diminuir menor valor
    // se nao, somente soma  
    // fazer soma dos precs e retornar
    
    let somaPrecos = 0;
    for(let preco of precos) {
        somaPrecos += preco
    }
    if (precos.length >= 5) {
        somaPrecos = somaPrecos - Math.min(...precos);
        console.log(somaPrecos)
    } else {
        console.log(somaPrecos);
    }
    
}

solucao([100, 100, 100, 100, 50]);