import { FC, useEffect } from 'react'

import { Layout } from '../components/layouts'
import { Grid, Image } from '@nextui-org/react'
import { PokemonCard } from '../components/pokemon'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { SmallPokemon } from '../interfaces'
import { fetchPokemons } from '../redux/actions'




const HomePage: FC = () => {

  const { pokemonSelected } = useAppSelector(state => state.ui)
  const { pokemons } = useAppSelector(state => state.pokemon)

  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(fetchPokemons())
  }, [])


  return (
    <>
      <Layout title='Listado de Pokemons'>

        <Grid.Container gap={2} css={{ height: '350px', width: '100%', overflow: 'auto', overflowY: 'hidden', flexWrap: 'nowrap', paddingBottom: 70, paddingRight: 70 }}>
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>

        <Grid.Container css={{ height: 500 }}>
          {pokemonSelected.id !== 0 && <Image src={pokemonSelected.img} width={'500px'} height={'500px'} />}
        </Grid.Container>

      </Layout>
    </>
  )
}



export default HomePage
