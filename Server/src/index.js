//const http = require("http");
//const {getCharById} = require("./controllers/getCharById")

//http
//.createServer((request, response) => {
    //response.setHeader('Access-Control-Allow-Origin', '*');

    //if(request.url.includes("/rickandmorty/character")){

        //const id = request.url.split("/").at(-1); //para que nos de lo ultimo que qedaba en el array

        //getCharById(response, +id); //el (+) para que se convierta en un numero
    //}
//})

//.listen(3005, "localhost")

const express = require('express')
const server = express();
const router = require('./routes/index')
const PORT = 3001;
const morgan = require('morgan')

server.use(express.json());
server.use(morgan('dev'));


    server.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Credentials', 'true');
        response.header(
           'Access-Control-Allow-Headers',
           'Origin, X-Requested-With, Content-Type, Accept'
        );
        response.header(
           'Access-Control-Allow-Methods',
           'GET, POST, OPTIONS, PUT, DELETE'
        );
        next();
    });
        
    server.use('/rickandmorty', router);
    
    server.listen(PORT, () => {
        console.log(`Server raised in port: ${PORT}`);
        
    });