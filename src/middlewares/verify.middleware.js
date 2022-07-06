import pokemons from '../database/pokemons.js'

const verifyMiddleware = (req, res, next) => {
    const id = pokemons.find((element)=> element.id === id)

    if (!pokemon) {
        return res.status(404).send('Personagem não encontrado!')
    }

    next()
}

export default verifyMiddleware