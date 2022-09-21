import { FC, useEffect, useState } from 'react'

import { Layout } from '../components/layouts'
import { Grid, Image, Loading, NextUIProvider } from '@nextui-org/react'
import { PokemonCard } from '../components/pokemon'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { getThemeLocalStorage } from '../redux/actions'
import { darkTheme, lightTheme } from '../themes'
import { GetStaticProps } from 'next'
import { pokeApi } from '../api'
import { set_pokemons } from '../redux/slices/pokemonSlice'

interface Props {
  pokemons : SmallPokemon[]
}


const HomePage: FC<Props> = ({pokemons}) => {

  const { theme } = useAppSelector(state => state.ui)
  // const { pokemons } = useAppSelector(state => state.pokemon)

  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(getThemeLocalStorage())
    dispatch(set_pokemons(pokemons))
  }, [])


  return (
    <NextUIProvider theme={theme ? lightTheme : darkTheme}>
      <Layout title='Listado de Pokemons'>
        <Grid.Container gap={2} className='style_scrooll' css={{ height: '250px', width: '100%', overflow: 'auto', overflowY: 'hidden', flexWrap: 'nowrap', paddingBottom: 70, paddingRight: 70 }}>
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>
      </Layout>
    </NextUIProvider>
  )
}



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
