import { DragEvent } from 'react'
import { Container, Text } from '@nextui-org/react'

import styles from '../../styles/Dragging.module.css'
import { SmallPokemon } from '../../interfaces'
import { useAppDispatch } from '../../redux/hooks'
import { deleteFavoritePokemon } from '../../redux/actions'
import { set_is_dragging } from '../../redux/slices/uiSlice'


export const DeleteFavorite = () => {

    const dispatch = useAppDispatch()

    const onDrop = (event: DragEvent) => {
        const pokemon: SmallPokemon = JSON.parse(event.dataTransfer.getData('pokemon'))
        dispatch(deleteFavoritePokemon(pokemon))
        dispatch(set_is_dragging(''))
    }

    return (
        <Container
            onDrop={onDrop}
            onDragOver={(e) => e.preventDefault()}
            className={styles.dragging_delete}
            css={{ height: 100, marginTop: 30 }}>
            <Text>Eliminar de favoritos</Text>
        </Container>
    )
}
