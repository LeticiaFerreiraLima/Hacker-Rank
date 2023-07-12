// const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];


function solucao(notas) {
    let somaNotas = 0;
    let notasAtualizadas = 0;
    let notaFinal = 0;

    for(i = 0; i < notas.length; i++) {
        somaNotas = somaNotas + notas[i];
    }

    notasAtualizadas = somaNotas - Math.min(...notas) - Math.max(...notas);
    notaFinal = notasAtualizadas / (notas.length - 2)

    console.log(notaFinal)
}

solucao([100, 100, 100, 20, 50, 30, 14, 100, 100, 100])