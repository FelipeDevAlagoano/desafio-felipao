const nomeHeroi = "Felipe"
let exp = 999
let nivel 

while (nivel == null) {
    let expq = exp*(Math.floor(Math.random() * 11+1))
    console.log(expq)
    if (expq < 1000){
        nivel = "Ferro"
    } else if (expq >= 1001 && expq <= 2000) {
        nivel = "Bronze"
    } else if (expq >= 2001 && expq <= 5000) {
        nivel = "Prata"
    } else if (expq >= 6001 && expq <= 7000) {
        nivel = "Ouro"
    } else if (expq >= 7001 && expq <= 8000) {
        nivel = "Platina"
    } else if (expq >= 8001 && expq <= 9000) {
        nivel = "Ascendente"
    } else if (expq >= 9001 && expq <= 10000) {
        nivel = "Imortal"
    } else if (expq >= 10001) {
        nivel = "Radiante"
    }
}

console.log("O Herói de nome " + nomeHeroi + " está no nivel " + nivel)

