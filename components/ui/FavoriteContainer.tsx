import { useEffect, DragEvent } from 'react'
import { Grid, Text } from '@nextui-org/react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { PokemonCard } from '../pokemon'
import { SmallPokemon } from '../../interfaces'
import { addFavoritePokemon, loadFavoritesLocalStorage } from '../../redux/actions'


export const FavoriteContainer = () => {

    const dispatch = useAppDispatch()

    const { pokemonFavorites } = useAppSelector(state => state.pokemon)

    const onDropPokemon = (event: DragEvent) => {
        const pokemon: SmallPokemon = JSON.parse(event.dataTransfer.getData('pokemon'))
        dispatch(addFavoritePokemon(pokemon))
    }


    useEffect(() => {
        dispatch(loadFavoritesLocalStorage())
    }, [])
    



    return (
        <Grid.Container
            onDrop={onDropPokemon}
            onDragOver={(e) => e.preventDefault()}
            gap={2}
            className='style_scrooll'
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
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                </>
            }
        </Grid.Container>
    )
}
