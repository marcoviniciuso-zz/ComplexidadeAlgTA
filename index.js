/*const http = require('http');
const express = require('express');

var app = express();

app.get('/', function(request, response){
    response.send('Hello World');
});

app.listen(8080);*/

console.time('EXECUÇÃO');

var numerosEncontrados = 0;
var numero             = 0;
while(numerosEncontrados < 15){
    numero++;

    var numeroAnterior    = numero - 1;
    var somatorioAnterior = 0;
    while(numeroAnterior != 0){
        somatorioAnterior = somatorioAnterior + numeroAnterior;
        numeroAnterior--;
    }

    var numeroPosterior    = numero;
    var somatorioPosterior = 0;
    
    do{
        numeroPosterior++;
        somatorioPosterior = somatorioPosterior + numeroPosterior;
    }while(somatorioPosterior < somatorioAnterior);

    if(somatorioAnterior == somatorioPosterior){
        console.log("Número Inicial: " + numero + " / Número Final: " + numeroPosterior + " / Somatório Base: " + somatorioAnterior);
        numerosEncontrados++;
    }
}

console.timeEnd('EXECUÇÃO');