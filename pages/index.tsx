import { FC, useEffect, useState } from 'react'
import { GetStaticProps } from 'next'

import { Layout } from '../components/layouts'
import { Grid } from '@nextui-org/react'
import { PokemonCard } from '../components/pokemon'

import { useAppDispatch } from '../redux/hooks'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { pokeApi } from '../api'
import { set_pokemons } from '../redux/slices/pokemonSlice'

interface Props {
  pokemons : SmallPokemon[]
}


const HomePage: FC<Props> = ({pokemons}) => {


  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(set_pokemons(pokemons))
  }, [dispatch])


  return (
      <Layout title='Listado de Pokemons'>
        <Grid.Container gap={2} className='style_scrooll' css={{ height: '250px', width: '100%', overflow: 'auto', overflowY: 'hidden', flexWrap: 'nowrap', paddingBottom: 70, paddingRight: 70 }}>
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>
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
