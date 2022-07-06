import express from 'express'
import cors from 'cors'
import pokemons from './src/database/pokemons.js'
import pokemonsRouter from './src/routes/pokemons.routes.js'

const port = 3000
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Olá')
})

app.use('/pokemons', pokemonsRouter)

/*
app.get('/pokemons/all-pokemons', (req, res) => {
    if (pokemons.length === 0) {
        res.status(404).send(`Não há pokemons para exibir!`)
    } else {
        res.send(pokemons)
    }
})

app.get('/pokemons/pokemon/:id', (req, res) => {
    const idPokemon = req.params.id
    const pokemonEscolhido = pokemons.find((pokemon) => pokemon.id == idPokemon)

    if (pokemonEscolhido === undefined) {
        res.status(404).send(`Pokemon de ID ${idPokemon} não encontrado!`)
    } else {
        res.send(pokemonEscolhido)
    }
})
*/
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})