//Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

let diaDaSemana = 8

switch (diaDaSemana) {
    case 1 :
        console.log('O dia da semana é domingo')
        break
    case 2 :
        console.log('O dia da semana é segunda-feira')
        break
    case 3 :
        console.log('O dia da semana é terça-feira')
        break
    case 4 :
        console.log('O dia da semana é quarta-feira')
        break
    case 5 :
        console.log('O dia da semana é quinta-feira')
        break
    case 6 :
        console.log('O dia da semana é sexta-feira')
        break
    case 7 :
        console.log(' O dia da semana é sábado')    
    default: 
        console.log(`${diaDaSemana} não é um dia da semana.`)
}