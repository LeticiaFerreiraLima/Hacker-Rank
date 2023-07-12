//Solucao
//1. Percorrer o array palavras
//2. Verificar se cada palavra começa com a letra igual a primeira letra
//3. Caso nao, imprimir 'NENHUMA'
//4. Caso sim, verificar a segunda letra
//5. Caso a segunda tambem seja igual, imprimir as palavras.
//6. Caso nao, imprimir 'NENHUMA


// const palavras = ["aveia", "manha", "ave"];
// const primeiraLetra = 'a';
// const segundaLetra = 'v';



function solucao(primeiraLetra, segundaLetra, palavras) {

    let palavraEcontrada = false;

    for(let palavra of palavras) {
        if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
            console.log(palavra);
            palavraEcontrada = true;             
        }

    } 
    
    if(palavraEcontrada === false) {
        console.log('NENHUMA')

    } 

}
solucao('a', 'v', ["aveia", "manha", "ave"])