import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"
import { SmallPokemon } from "../../interfaces"

interface Props {
    pokemon: SmallPokemon
}


export const PokemonCard: FC<Props> = ({ pokemon }) => {

    const router = useRouter()

    const onClick = () => {
        router.push(`name/${pokemon.name}`)
    }


    return (
        <Card isHoverable isPressable onPress={onClick} key={pokemon.id} css={{display: 'inline-table', marginRight: 80}}>
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
