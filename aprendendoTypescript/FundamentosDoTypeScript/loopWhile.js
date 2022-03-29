console.log("O Fatorial é uma opração muito importante para o estudo e desenvolvimento da análise combinatoria");
console.log('Conhecemos como fatorial de um numero natural a multiplicação desse número por seus antecessores com excessão do zero');
/*
Fatorial de um numero qualquer =n
3! => 3.2.1 => 6
*/
//Primeiro Looping While
var numero = 10;
var fatorial = 1;
while (numero >= 1) {
    fatorial = fatorial * numero;
    numero--;
}
console.log("O Fatorial de ".concat(numero, " \u00E9 ").concat(fatorial));
