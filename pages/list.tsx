import { FC } from 'react'
import { GetStaticProps } from 'next'
import { useSelector } from 'react-redux'
import { Layout } from '../components/layouts'
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { Grid, Image } from '@nextui-org/react'
import { PokemonCard } from '../components/pokemon'
import { RootState } from '../redux/store'

interface Props {
  pokemons: SmallPokemon[]
}

const List: FC<Props> = ({ pokemons }) => {

  const { pokemonSelected } = useSelector((state: RootState) => state.ui)

  return (
    <>
      <Layout title='Listado de Pokemons'>

        <Grid.Container gap={2} css={{ height: '350px', width: '100%', overflow: 'auto', overflowY: 'hidden', flexWrap: 'nowrap', paddingBottom: 70, paddingRight: 70 }}>
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>

        <Grid.Container css={{height: 500}}>
          {pokemonSelected.id !== 0 && <Image src={pokemonSelected.img} width={'500px'} height={'500px'}/>}
        </Grid.Container>

      </Layout>
    </>
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

export default List
