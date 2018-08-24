
console.time('EXECUÇÃO');

var numerosEncontrados = 0;
var numero             = 0;
var somatorioAnterior  = 0;
var numeroPosterior    = 1;
var somatorioPosterior = 1;
while(numerosEncontrados < 15){
    numero++;
    numeroPosterior++;

    somatorioAnterior += (numero - 1);
    somatorioPosterior += (numeroPosterior - numero);

    while(somatorioPosterior < somatorioAnterior){
        numeroPosterior++;
        somatorioPosterior += numeroPosterior
    }

    if(somatorioAnterior == somatorioPosterior){
        console.log("Número Inicial: " + numero + " / Número Final: " + numeroPosterior + " / Somatório Base: " + somatorioAnterior);
        numerosEncontrados++; 
    }
}

console.timeEnd('EXECUÇÃO');