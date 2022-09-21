import { Grid, Image, Text } from "@nextui-org/react"
import Head from "next/head"
import { FC, ReactNode } from "react"
import { useAppSelector } from "../../redux/hooks"
import { Navbar } from "../ui"
import { Sidebar } from "../ui/Sidebar"

interface Props {
    title?: string
    children?: ReactNode
}

export const Layout: FC<Props> = ({ title, children }) => {

    const { pokemonSelected } = useAppSelector(state => state.ui)

    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Sebas Narvaez" />
                <meta name="description" content="Informacion sobre el pokemon xxxxx" />
                <meta name="keywords" content="xxxxx, pokemon, pokedex" />
            </Head>

            <Grid.Container>
                <Grid xs={0} sm={0} md={1} lg={1} xl={1} css={{padding: 20, boxShadow: '1px -2px 5px 0px #0000001f'}}>
                    <Sidebar />
                </Grid>

                <Grid xs={12} sm={8} md={7} lg={7} xl={7} css={{ flexDirection: 'column'}}>
                    <Navbar />
                    <main style={{ padding: 20 }}>
                        {children}
                    </main>
                </Grid>

                <Grid xs={12} sm={4} md={4} lg={4} xl={4} css={{padding: 20, boxShadow: '-1px -2px 5px 0px #0000001f'}}>
                    {pokemonSelected.id !== 0 ?
                        <Image src={pokemonSelected.img} width={'500px'} height={'500px'} />
                        :
                        <Text>Seleccione un pokemon</Text>}
                </Grid>

            </Grid.Container>
        </>
    )
}
