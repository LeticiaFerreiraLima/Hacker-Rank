// const precos = [20, 15, 8, 2, 12]
function solucao(precos) {

    let menorPrejuizo = 999999;

    for(i = 0; i < precos.length; i++) {
            for (let j = i + 1; j < precos.length; j++) {
                const compra = precos[i];
                const venda = precos[j];
                const prejuizo = compra - venda;

                if (prejuizo > 0) {
                    if (prejuizo < menorPrejuizo) {
                        menorPrejuizo = prejuizo
                    }
                }
            }
    }
       console.log(menorPrejuizo) 
}

solucao([20, 15, 8, 2, 12])
// criação de uma variável j para armazenar a posição seguinte (i+1)