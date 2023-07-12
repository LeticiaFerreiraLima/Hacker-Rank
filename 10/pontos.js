function solucao(resultados) {

    let pontos = 0;

    for(item of resultados) {
        if(item === 'V') {
            pontos += 3;
        } 
        else if(item === 'E') {
            pontos += 1;
        }
    }

    console.log(pontos);
}

solucao(["V","V","V","D"])