// const letraSorteada = 'm';
// const palavras = ['mamao', 'maca', 'melao', 'melancia', 'laranja'];


function solucao(palavras, letraSorteada) {
    let erros = 0;

    for(let palavra of palavras) {
            if(palavra[0] !== letraSorteada) {
                erros++;
            } 
        } 
        console.log(erros)
    }


solucao(['mamao', 'maca', 'melao', 'melancia', 'laranja'], 'm')