class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = ["mago", "guerreiro", "monge", "ninja"]
    }
    atacar(){
        for (let i = 0; i <= 3; i++) {
            let ih = Math.floor(Math.random() * 4)
            if(ih == 0) {
                console.log(`o ${this.tipo[ih]} atacou usando magia`)
                break
            } else if(ih == 1){
                console.log(`o ${this.tipo[ih]} atacou usando espada`)
                break
            } else if(ih == 2){
                console.log(`o ${this.tipo[ih]} atacou usando artes marciais`)
                break
            } else{
                console.log(`o ${this.tipo[ih]} atacou usando shuriken`)
                break
            }
        }

    }
}

let hero = new Heroi("Felipe", 21,)
hero.atacar()

