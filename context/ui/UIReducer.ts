import { SmallPokemon } from './../../interfaces';
import { UIState } from './';


type UIActionType =
    | { type: 'UI - Selected Pokemon', payload: SmallPokemon | {} }
    | { type: 'UI - xxxxx' }


// el reducer devuelve un state, y el state es de tipo UIState
export const UIReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {

        case 'UI - Selected Pokemon':
            return {
                ...state,
                pokemonSelected: action.payload
            }


        default:
            return state;
    }
}