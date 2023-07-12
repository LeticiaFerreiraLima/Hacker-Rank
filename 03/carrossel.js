//Solucao:
//1. Varrer sequencia de inputs 
//2. se for >, soma 1
//3. se for <, subtrai um
//4. se indice > 6, indice = 0;
//5. se indice < 0, indice = 6;


// const sequencia = '>>><>'

function solucao(sequencia) {
    
    let indice = 0;
    for(let item of sequencia) {
        if(item === '>') {
            indice++;
        } else {
            indice--;
        }

        if(indice > 6) {
            indice = 0;
        } 
        if(indice < 0) {
            indice = 6;
        }
        }

        console.log(indice)
    } 

solucao('>>><>')