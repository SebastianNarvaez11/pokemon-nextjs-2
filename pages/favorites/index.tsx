import { Container, Text } from "@nextui-org/react"
import { FC } from "react"
import { Layout } from "../../components/layouts"


const Favorites: FC = () => {

  return (
    <Layout title="Favoritos">
      <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      }}>
        <Text h1>No hay favoritos</Text>
      </Container>
    </Layout>
  )
}

export default Favorites