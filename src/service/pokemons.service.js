import pokemons from '../database/pokemons.js'

class PokemonsService {
    allPokemons()  {
        return pokemons
        
    }
    
    chosenPokemons({id}) {
        const pokemonEscolhido = pokemons.find((element) => element.id === id)

        if (pokemonEscolhido == undefined){
            throw { status: 404, message: 'Pokemon não encontrado!' }
        }

        return pokemonEscolhido
    }

    createNewPokemon({nome, profissao, idade}) {
        const novoPokemon = {
            id: pokemons[pokemons.length -1].id + 1,
            nome,
            profissao,
            idade,
        }

        if (!nome||!profissao||!idade){
            throw { status: 404, message: 'Pokemon não encontrado!' }
        }

        pokemons.push(novoPokemon)
        console.log(pokemons)
        return novoPokemon
    }

    updatePokemon({ nome, profissao, idade, id }) {
        
        const pokemonAtualizado = {
            id,
            nome,
            profissao,
            idade,
        }

        const indexPokemon = pokemons.findIndex((element) => element.id == id)
        pokemons[indexPokemon] = pokemonAtualizado

        if (!nome||!profissao||!idade){
            throw { status: 404, message: 'Pokemon não encontrado!' }
        }

        console.log(pokemons)

        return pokemonAtualizado
    }

    deletePokemon({ id }) {
        const indexPokemon = pokemons.findIndex((element) => element.id == id)

        pokemons.splice(indexPokemon, 1)

        console.log(pokemons)
    }

}

export default PokemonsService