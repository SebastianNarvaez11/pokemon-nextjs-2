import { FC, DragEvent } from "react"

import { Card, Grid, Row, Text } from "@nextui-org/react"
import { SmallPokemon } from "../../interfaces"
import { set_is_dragging, set_pokemon_selected } from "../../redux/slices/uiSlice"
import { useAppDispatch } from "../../redux/hooks"
import { getPokemonSelectedFull } from "../../redux/actions"

interface Props {
    pokemon: SmallPokemon
}


export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const dispatch = useAppDispatch()

    const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setData('pokemon', JSON.stringify(pokemon))
        dispatch(set_is_dragging(true))
    }

    const onDragEnd = () => {
        dispatch(set_is_dragging(false))
    }


    return (
        <Card draggable
            isHoverable
            isPressable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onClick={() => dispatch(getPokemonSelectedFull(pokemon))}
            key={pokemon.id}
            css={{ display: 'inline-table', marginRight: 50, padding: 10 }}>
                
            <Card.Body css={{ padding: 1 }}>
                <Card.Image
                    draggable={false}
                    src={pokemon.img}
                    width={100}
                    height={100} />
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
