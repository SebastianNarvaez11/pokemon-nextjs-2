import { FC, ReactNode, useEffect } from "react"
import Head from "next/head"

import { Grid, Image, NextUIProvider, Text } from "@nextui-org/react"
import { Navbar, Sidebar } from "../ui"

import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getThemeLocalStorage } from "../../redux/actions"
import { darkTheme, lightTheme } from "../../themes"
import { getColorByType } from "../../utils"


interface Props {
    title?: string
    children?: ReactNode
}

export const Layout: FC<Props> = ({ title, children }) => {

    const dispatch = useAppDispatch()

    const { pokemonSelected, theme } = useAppSelector(state => state.ui)


    useEffect(() => {
        dispatch(getThemeLocalStorage())
    }, [dispatch])

    return (
        <NextUIProvider theme={theme ? lightTheme : darkTheme}>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Sebas Narvaez" />
                <meta name="description" content="Informacion sobre el pokemon xxxxx" />
                <meta name="keywords" content="xxxxx, pokemon, pokedex" />
            </Head>

            <Grid.Container css={{ height: 'calc(100vh)' }}>
                <Grid xs={0} sm={0} md={1} lg={1} xl={1} css={{ padding: 20, boxShadow: '1px -2px 5px 0px #0000001f' }}>
                    <Sidebar />
                </Grid>

                <Grid xs={12} sm={8} md={7} lg={7} xl={7} css={{ flexDirection: 'column' }}>
                    <Navbar />
                    <main style={{ padding: 20, paddingLeft: 40 }}>
                        {children}
                    </main>
                </Grid>

                <Grid xs={12} sm={4} md={4} lg={4} xl={4} css={{ padding: 20, boxShadow: '-1px -2px 5px 0px #0000001f', backgroundColor: getColorByType(pokemonSelected.full?.types[0].type.name) }}>
                    {pokemonSelected.id !== 0 ?
                        <Image src={pokemonSelected.img} width={'500px'} height={'500px'} />
                        :
                        <Text>Seleccione un pokemon</Text>}
                </Grid>
            </Grid.Container>
        </NextUIProvider>
    )
}
