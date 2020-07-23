//

const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'content-type': 'application/json' });

        let salida = {
            nombre: 'isa',
            edad: 23,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        //res.write('hola webServer');
        res.end();


    })
    .listen(8080);


console.log('Viendo el Puerto 8080');