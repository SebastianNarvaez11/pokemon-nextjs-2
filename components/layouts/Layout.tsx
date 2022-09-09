import Head from "next/head"
import { FC, PropsWithChildren, ReactNode } from "react"
import { Navbar } from "../ui"

interface Props {
    title?: string
    children?: ReactNode
}

export const Layout: FC<Props> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Sebas Narvaez" />
                <meta name="description" content="Informacion sobre el pokemon xxxxx" />
                <meta name="keywords" content="xxxxx, pokemon, pokedex" />
            </Head>

            <Navbar />

            <main style={{ padding: '0px 20px' }}>
                {children}
            </main>
        </>
    )
}
