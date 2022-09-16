import { Card, Container, Grid, Text } from "@nextui-org/react"
import { FC, useEffect, useState } from "react"
import { Layout } from "../../components/layouts"
import { FavoritePokemons } from "../../components/pokemon"
import { NoFavorites } from "../../components/ui"
import { localFavorites } from "../../utils"


const Favorites: FC = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons)
  }, [])


  return (
    <Layout title="Favoritos">
      {favoritesPokemons.length === 0
        ?
        <NoFavorites />
        :
        <FavoritePokemons pokemons={favoritesPokemons}/>
      }

    </Layout>
  )
}

export default Favorites