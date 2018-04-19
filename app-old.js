const http = require('http');

http.createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        // response.write('Hola mundo');
        let salida = {
            nombre: 'Rodolfo Centeno',
            edad: 38,
            url: request.url
        }

        response.write(JSON.stringify(salida));
        response.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');