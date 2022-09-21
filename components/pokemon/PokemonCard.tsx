import { FC } from "react"

import { Card, Grid, Row, Text } from "@nextui-org/react"
import { SmallPokemon } from "../../interfaces"
import { set_pokemon_selected } from "../../redux/slices/uiSlice"
import { useAppDispatch } from "../../redux/hooks"

interface Props {
    pokemon: SmallPokemon
}


export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const dispatch = useAppDispatch()


    return (
        <Card isHoverable isPressable onPress={() => dispatch(set_pokemon_selected(pokemon))} key={pokemon.id} css={{ display: 'inline-table', marginRight: 80 }}>
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
