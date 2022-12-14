import { FC, useEffect, useState } from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '../components/layouts'
import { Grid, Text } from '@nextui-org/react'
import { PokemonCard } from '../components/pokemon'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { pokeApi } from '../api'
import { set_pokemons } from '../redux/slices/pokemonSlice'
import { FavoriteContainer } from '../components/ui/FavoriteContainer'
import { DeleteFavorite } from '../components/ui/DeleteFavorite'

interface Props {
  pokemons: SmallPokemon[]
}


const HomePage: FC<Props> = ({ pokemons }) => {

  const { isDragging } = useAppSelector(state => state.ui)
  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(set_pokemons(pokemons))
  }, [dispatch])


  return (
    <Layout title='Listado de Pokemons'>
      <Grid.Container gap={2} className='style_scrooll'
        css={{
          height: '250px',
          width: '100%',
          overflow: 'auto',
          overflowY: 'hidden',
          flexWrap: 'nowrap',
          padding: 20,
          paddingBottom: 80,
          marginBottom: 20
        }}>

        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}

      </Grid.Container>
      <Text>Favoritos</Text>
      <FavoriteContainer />
      {isDragging === 'pokemon_card_favorite' && <DeleteFavorite />}

    </Layout>
  )
}


// se hace el fetch de los datos en el servidor antes de rendizar
export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon/?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({ ...pokemon, id: index + 1, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg` }))

  return {
    props: {
      pokemons: pokemons
    }
  }
}



export default HomePage
