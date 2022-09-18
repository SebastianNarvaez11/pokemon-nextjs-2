import { FC, useContext } from 'react'
import { GetStaticProps } from 'next'
import { Layout } from '../components/layouts'
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { Grid, Image } from '@nextui-org/react'
import { PokemonCard } from '../components/pokemon'
import { UIContext } from '../context/ui'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: FC<Props> = ({ pokemons }) => {

  const { pokemonSelected } = useContext(UIContext)
  
  return (
    <>
      <Layout title='Listado de Pokemons'>

        <Grid.Container gap={2} css={{ height: '350px', width: '100%', overflow: 'auto', overflowY: 'hidden', flexWrap: 'nowrap', paddingBottom: 70, paddingRight: 70 }}>
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Grid.Container>

        <Grid.Container css={{ backgroundColor: 'Blue' }}>
          {pokemonSelected.id !== 0 && <Image src={pokemonSelected.img} width={100} height={100}/>}
          
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

export default HomePage
