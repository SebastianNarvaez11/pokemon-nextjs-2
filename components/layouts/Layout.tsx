import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from "../ui"
import { Sidebar } from "../ui/Sidebar"

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

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Sidebar />
                <main style={{ width: '90%', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: '80%' }}>
                        <Navbar />
                        {children}
                    </div>
                    <div style={{ width: '20%', height: '100%' }}>
                        <h1>hola</h1>
                    </div>
                </main>
            </div>
        </>
    )
}
