import { FC } from 'react'
import { Button } from '@nextui-org/react'
import { Layout } from '../components/layouts'



const HomePage: FC = () => {
  return (
    <>
      <Layout title='Listado de Pokemons'>
        <Button color={'gradient'}>Hola Mundo</Button>
      </Layout>
    </>
  )
}

export default HomePage
