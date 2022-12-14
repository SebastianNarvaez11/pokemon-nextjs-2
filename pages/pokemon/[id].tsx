import { FC, useState, useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout } from '../../components/layouts';
import { FullPokemon } from '../../interfaces';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { getPokemonInfo, localFavorites } from '../../utils';
import confetti from 'canvas-confetti'

interface Props {
    pokemon: FullPokemon
}

const PokemonPage: FC<Props> = ({ pokemon }) => {

    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        setIsFavorite(localFavorites.existInFavorites(pokemon.id))
    }, [pokemon.id])


    const toggleFavorite = () => {
        localFavorites.toggleFavorites(pokemon.id)
        setIsFavorite(!isFavorite)

        if (isFavorite) return

        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: {
                x: 1,
                y: 0
            }
        })
    }


    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: 5 }} gap={2}>
                <Grid lg={4} sm={12}>
                    <Card isHoverable css={{ padding: 30 }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || './image.png'}
                                alt={pokemon.name}
                                width='100%'
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid lg={8} sm={12}>
                    <Card css={{ padding: 30 }}>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform='capitalize'>
                                {pokemon.name}
                            </Text>
                            <Button color='gradient' ghost={isFavorite} onPress={toggleFavorite}>
                                {isFavorite ? 'En Favoritos' : 'Guardar En Favorios'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction='row' display='flex' gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}



// se especifica la cantidad de rutas/paginas que van a ser permitidas para crearlas
export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value, index) => (`${index + 1}`))

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: 'blocking',

    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string }

    const pokemon = await getPokemonInfo(id)

    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon: pokemon
        },
        revalidate: 86400
    }
}

export default PokemonPage