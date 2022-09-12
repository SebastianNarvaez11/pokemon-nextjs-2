import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import { Layout } from '../../components/layouts';
import { PokemonDatailResponse } from '../../interfaces';
import { pokeApi } from '../../api';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

interface Props {
    pokemon: PokemonDatailResponse
}

const PokemonPage: FC<Props> = ({ pokemon }) => {

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
                            <Button color='gradient' ghost>
                                Guardar En Favorios
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



// se especifica la cantidada de rutas/paginas que van a ser permitidas pra crearlas
export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value, index) => (`${index + 1}`))

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string }
    const { data } = await pokeApi.get<PokemonDatailResponse>(`pokemon/${id}`)

    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonPage