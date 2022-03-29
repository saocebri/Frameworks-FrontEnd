//Vamos criar nossa primeira classe em typescript
var Saudacao = /** @class */ (function () {
    function Saudacao() {
    }
    //escopo da classe ou class scope
    Saudacao.prototype.saudacao = function () {
        console.log('Olá mundo a partir do POO TS');
    };
    return Saudacao;
}());
//Vamos criar nosso primeirp objeto a partir da classe Saudacao, assim podemos fazer uso do metodo saudacao
var obj = new Saudacao();
obj.saudacao();
