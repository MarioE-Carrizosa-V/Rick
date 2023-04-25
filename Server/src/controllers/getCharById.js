//const axios = require("axios")

//const getCharById = (res, id) => {
    //axios(`https://rickandmortyapi.com/api/character/${id}`)
    //.then(response => response.data)
    //.then(({name, gender, species, origin, image, status}) => {
        //const character = {
            //id,
            //name,
            //gender, 
            //species, 
            //origin, 
            //image, 
            //status
        //}

        //return res
                    //.writeHead(200, {"Content-type" : "application/json"})
                    //.end(JSON.stringify(character))           
    //})
    //.catch(error => {
        //return res.writeHead(500, {"Content-type" : "text/plain"})
        //.end(error.message)
    //})
//} 

//module.exports = {getCharById}


const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')

const getCharById = (request, response) => {
    const { id } = request.params

    axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(({status, name, species, origin, image, gender}) => {
    if(name){
        const character = {
            id,
            name,
            species,
            origin,
            image,
            gender,
            status
        }
            return response.status(200).json(character)
        }

        return response.status(404).send('Not found');
    })
    .catch(error => response.status(500).send(error.message))
}


module.exports = {
    getCharById
}