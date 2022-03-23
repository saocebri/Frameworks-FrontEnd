//Vamos criar nossa primeira classe em typescript

class Saudacao {
    //escopo da classe ou class scope
    constructor(paramNome: string, paramIdade: number) {

        var nome = paramNome
        var idade = paramIdade

    }
    saudacao(): void {
        console.log('Olá mundo a partir do POO TS')
    }
    adeus(): void {
        console.log('Au revoir')

    }
    meuNome(): void {
        var nome: string = "Eduardo"
    }
}

//Vamos criar nosso primeirp objeto a partir da classe Saudacao, assim podemos fazer uso do metodo saudacao

var obj = new Saudacao('Eduardo', 42)
obj.saudacao()
obj.meuNome()
obj.adeus()