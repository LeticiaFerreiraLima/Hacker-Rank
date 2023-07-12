// const disparos = [0, 10, 50, 70, 80, 90];

function solucao(disparos) {

    let acertos = 0;

    for(i = 0; i < disparos.length; i++) {
        if(disparos[i] >= 70) {
            acertos += 1;
        } 
    }

    if(acertos < 3) {
        console.log('ELIMINADO');
    } else {
        console.log(`Você obteve ${acertos} acertos acima de 70 pontos`)
    }
}

solucao([0, 10, 50, 70, 80, 90]);