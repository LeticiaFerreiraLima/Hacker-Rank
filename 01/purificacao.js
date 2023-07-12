// Solução:
// 1. Percorrer cada caractere da palavra;
// 2. verificar se o caractere é permitido;
// 3. Se permitido, escrever;
// 4. Se não, remover;
// 5. Exibir resultado final;


function solucao(stringCorrompida) {

    
    let stringPurificada = '';

    for(let caractere of stringCorrompida) {
        if (caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' || caractere === '*' || caractere === '%' || caractere === '&' || caractere === '(' || caractere === ')' || caractere === '.') {

        } else {
            stringPurificada = stringPurificada + caractere;
            
        } 
    } 
    console.log(stringPurificada);

}
solucao('*Canis %lupus )familiaris');
