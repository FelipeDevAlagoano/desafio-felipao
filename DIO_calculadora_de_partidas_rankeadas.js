let saldoRankeadas 
let nivel

function calculoRanked(vitoria,derrota) {
    saldoRankeadas = vitoria - derrota
    
    if (saldoRankeadas < 10) {
        nivel = "Ferro" 
    } else if (saldoRankeadas >= 11 && saldoRankeadas <= 20){
        nivel = "Bronze"
    } else if (saldoRankeadas >= 21 && saldoRankeadas <= 50){
        nivel = "Prata"
    } else if (saldoRankeadas >= 51 && saldoRankeadas <= 80){
        nivel = "Ouro"
    } else if (saldoRankeadas >= 81 && saldoRankeadas <= 90){
        nivel = "Diamante"
    } else if (saldoRankeadas >= 91 && saldoRankeadas <= 100){
        nivel = "Lendário"
    } else if (saldoRankeadas >= 101){
        nivel = "Imortal"
    }
    return(nivel)
}

let vitoria = Math.floor(Math.random() * 150 + 1)
let derrota = Math.floor(Math.random() * 150 + 1)

calculoRanked(vitoria,derrota)

if (saldoRankeadas < 0) {
    saldoRankeadas = 0
}

console.log(`O Herói tem de saldo de  ${saldoRankeadas} e está no nível de ${nivel}`)