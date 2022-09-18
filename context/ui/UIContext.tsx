import { createContext } from "react";
import { SmallPokemon } from "../../interfaces";



interface PropsContext {
    pokemonSelected: SmallPokemon | {},
    setPokemonSelected: (payload: SmallPokemon) => void
}


export const UIContext = createContext({} as PropsContext)