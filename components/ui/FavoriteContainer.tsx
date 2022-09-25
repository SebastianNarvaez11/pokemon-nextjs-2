import { useEffect, DragEvent } from 'react'
import { Grid, Text } from '@nextui-org/react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { PokemonCardFavorite } from '../pokemon'
import { SmallPokemon } from '../../interfaces'
import { addFavoritePokemon, loadFavoritesLocalStorage } from '../../redux/actions'

import styles from '../../styles/Dragging.module.css'


export const FavoriteContainer = () => {

    const dispatch = useAppDispatch()

    const { isDragging } = useAppSelector(state => state.ui)
    const { pokemonFavorites } = useAppSelector(state => state.pokemon)



    const onDropPokemon = (event: DragEvent) => {
        const pokemon: SmallPokemon = JSON.parse(event.dataTransfer.getData('pokemon'))
        dispatch(addFavoritePokemon(pokemon))
    }



    const onDragOver = (event : DragEvent) => {
        if(isDragging === 'pokemon_card'){
            return event.preventDefault()
        }
    }
 


    useEffect(() => {
        dispatch(loadFavoritesLocalStorage())
    }, [])

    return (
        <Grid.Container
            onDrop={onDropPokemon}
            onDragOver={onDragOver}
            gap={2}
            className={isDragging === 'pokemon_card' ? `${styles.dragging} style_scrooll` : 'style_scrooll'}
            css={{
                height: '250px',
                width: '100%',
                overflow: 'auto',
                overflowY: 'hidden',
                flexWrap: 'nowrap',
                padding: 20,
                paddingBottom: 80,
                marginTop: 10,
                backgroundColor: '#F0EBE6',
                borderRadius: 10
            }}>

            {pokemonFavorites.length === 0 ?
                <Text>Arrastra un pokemon para guardarlo en favoritos</Text>
                :
                <>
                    {pokemonFavorites.map(pokemon => (
                        <PokemonCardFavorite key={pokemon.id} pokemon={pokemon} />
                    ))}
                </>
            }
        </Grid.Container>
    )
}
