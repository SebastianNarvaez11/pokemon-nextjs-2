import { FC, DragEvent } from "react"

import { Card, Container, Grid, Image, Row, Text } from "@nextui-org/react"
import { SmallPokemon } from "../../interfaces"
import { set_is_dragging, set_pokemon_selected } from "../../redux/slices/uiSlice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getPokemonSelectedFull } from "../../redux/actions"

interface Props {
    pokemon: SmallPokemon
}


export const PokemonCardFavorite: FC<Props> = ({ pokemon }) => {


    const { isDragging } = useAppSelector(state => state.ui)

    const dispatch = useAppDispatch()

    const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setData('pokemon', JSON.stringify(pokemon))
        dispatch(set_is_dragging("pokemon_card_favorite"))
    }

    const onDragEnd = () => {
        dispatch(set_is_dragging(''))
    }


    return (
        <Card draggable
            isHoverable
            isPressable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            onClick={() => dispatch(getPokemonSelectedFull(pokemon))}
            css={{ display: 'inline-table', marginRight: 50, padding: 10, opacity: isDragging === 'pokemon_card_favorite' ? 0.2 : 1, transition: 'all .3s'}}>

            <Card.Body css={{ padding: 1 }}>
                <Image 
                    draggable={false}
                    src={pokemon.img}
                    width={100}
                    height={100} />
            </Card.Body>
            <Card.Footer>
                <Row justify='space-between'>
                    <Text transform='capitalize'>{pokemon.name}</Text>
                </Row>
            </Card.Footer>
        </Card>
    )
}
