function solucao(palpite, palavra) {
    let quantidade = 0;
    for(let letra of palavra) {
        if(letra === palpite) {
            quantidade += 1;
        }
    }

    console.log(quantidade)
}

solucao('a', 'aviao')