const { getCharById } = require('../controllers/getCharById')
const { login } = require('../controllers/login')
const {postFav, deleteFav} = require('../controllers/handlefavorites')
const router = require('express').Router();

router.get('/character/:id', (request, response) => {
    getCharById(request, response);
})

router.get('/login', login)

router.post('/fav', (request, response) => {
    postFav(request, response)
})

router.delete('/fav:id', (request, response) => {
    deleteFav(request, response)
})

module.exports = router