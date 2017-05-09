
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(
      (req, res) => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'text/html');
         console.log("Recu une requete ....")
        res.end('<h1>Avec Lambda - CSFT CiteAl Khadhra - Hello World from Nodejs</h1>');
     });

server.listen(port, hostname, 
     () => {
    console.log(`Server  running  at  http://${hostname}:${port}/`);
});
