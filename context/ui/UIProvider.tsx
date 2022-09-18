import { FC, PropsWithChildren, useReducer } from "react";
import { SmallPokemon } from "../../interfaces";
import { UIContext } from "./UIContext";
import { UIReducer } from "./UIReducer";


// tipado para el estado inicial
export interface UIState {
    pokemonSelected: SmallPokemon
}


// estado inicial
const UI_INITIAL_STATE: UIState = {
    pokemonSelected: {
        name: '',
        url: '',
        id: 0,
        img: ''
    }
}


export const UIProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)


    const setPokemonSelected = (payload: SmallPokemon) => {
        dispatch({ type: 'UI - Selected Pokemon', payload: payload })
    }


    return (
        <UIContext.Provider value={{
            ...state,

            // Methods
            setPokemonSelected
        }}>

            {children}
        </UIContext.Provider>
    )
}
