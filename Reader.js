//console.log('testtt');
// Crea si queres un archi en c:\ unot que se llame por ejemplo test.js 
// y otro que es el archivo de texto que va a leer por ejemplo texto.txt

//Para correr este script vas a tener que tener instalado primero Node.js
// y luego te vas c:\ donde creaste los archivos utilizando la consola de windows
// (pone el la lupa cmd y abrir el terminal de windos) y pones node test.js y 
// deberias de ver en la pantalla del terminal el texto que escribiste en tu archivo de texto

//Guardo en una variable fs el el Modulo que  voy a utilizar 
// para abrir el archivo ( un modulo es una libreria que tiene diferentes metodos para realizar las tareas)
var fs = require('fs');

//Entonces ahora puedo llamar a la funcion open, la cual
// recibe diferentes parametros, el 1 es el archivo a abrir, el 
// 2 es un flag , que es r por read y despues se le pasa una funcion que 
// a a realizar una tarea
fs.open('texto.txt', 'r', function(err, fileToRead){
    
    // si no hay error al abrir el archivo
    if (!err){
        // Aca es parecido a lo que explique arriba pero llama a la 
        // funcion readFile para leer el archivo
        fs.readFile(fileToRead, {encoding: 'utf-8'}, function(err,data){
            if (!err){
                // Aca imprimo el archivo por pantalla
            console.log(data);
            
            }else{
                console.log(err);
            }
        });
    }else{
        console.log(err);
    }
});
