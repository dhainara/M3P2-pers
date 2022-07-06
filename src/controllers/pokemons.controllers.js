import { response } from 'express'
import PokemonsService from '../service/pokemons.service.js'

const pokemonsService = new PokemonsService()

class PokemonsControllers {
    allPokemons(req, res) {
        const pokemons = pokemonsService.allPokemons()
        if (pokemons.length === 0) {
        res.status(404).send(`Não há pokemons para exibir!`)
        } else {
             res.send(pokemons)
        }
    }

    chosenPokemons(req, res) {
        const id = +req.params.id
            const pokemonEscolhido = pokemonsService.chosenPokemons({ id })

            res.send(pokemonEscolhido)
    }

    createNewPokemon(req, res) {
        
        const { nome, profissao, idade } = req.body

        try {
            const novoPokemon = pokemonsService.createNewPokemon({
            nome,
            profissao,
            idade,
            })
            res.send(novoPokemon)
        } catch (error) {
            res.status(error.status).send(error.message)
        } 
    }


    updatePokemon(req, res) {
        const id = +req.params.id

        try {
            const { nome, profissao,idade} = req.body
            const pokemonAtualizado = pokemonsService.updatePokemon({
                nome,
                profissao,
                idade,
                id,
            })

            res.send(pokemonAtualizado)
            
        } catch (error) {
            res.status(error.status).send(error.message)
        } 

    }

    deletePokemon(req, res) {
        const id = req.params.id

       pokemonsService.deletePokemon(id)

       res.status(204).send(`Pokemon nº${id} foi deletado!`)
    }
}

export default PokemonsControllers