import { Router } from 'express'
import PokemonsControllers from '../controllers/pokemons.controllers.js'

const pokemonsRouter = Router()
const pokemonsControllers = new PokemonsControllers()

pokemonsRouter.get('/all-pokemons', pokemonsControllers.allPokemons)
pokemonsRouter.get('/pokemon/:id', pokemonsControllers.chosenPokemons)
pokemonsRouter.post('/create-pokemon', pokemonsControllers.createNewPokemon)
pokemonsRouter.put('/update-pokemon/:id', pokemonsControllers.updatePokemon)
pokemonsRouter.delete('/delete-pokemon/:id', pokemonsControllers.deletePokemon)

export default pokemonsRouter
