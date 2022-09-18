import { FC, useContext } from "react"

import { Card, Grid, Row, Text } from "@nextui-org/react"
import { UIContext } from "../../context/ui"
import { SmallPokemon } from "../../interfaces"

interface Props {
    pokemon: SmallPokemon
}


export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const { setPokemonSelected } = useContext(UIContext)


    return (
        <Card isHoverable isPressable onPress={() => setPokemonSelected(pokemon)} key={pokemon.id} css={{ display: 'inline-table', marginRight: 80 }}>
            <Card.Body css={{ padding: 1 }}>
                <Card.Image
                    src={pokemon.img}
                    width={200}
                    height={200} />
            </Card.Body>
            <Card.Footer>
                <Row justify='space-between'>
                    <Text transform='capitalize'>{pokemon.name}</Text>
                    <Text>#{pokemon.id}</Text>
                </Row>
            </Card.Footer>
        </Card>
    )
}
