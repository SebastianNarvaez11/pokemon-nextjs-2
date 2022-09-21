import { Spacer, Text, useTheme, Link, Switch } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { setThemeSwitch } from '../../redux/actions'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

export const Navbar = () => {

    const { theme } = useAppSelector(state => state.ui)
    const dispatch = useAppDispatch()


    const toggleTheme = (checked: boolean) => {
        dispatch(setThemeSwitch(checked))
    }

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            // backgroundColor: theme?.colors.gray100.value
        }}>
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt='icono de la app'
                width={70}
                height={70} />

            <NextLink href="/" passHref>
                <Link>
                    <Text h2>P</Text>
                    <Text h3>okémon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <Switch checked={theme} onChange={(e) => toggleTheme(e.target.checked)} />

            <Spacer css={{ flex: 1 }} />


            <NextLink href="/favorites" passHref>
                <Link>
                    <Text>Favoritos</Text>
                </Link>
            </NextLink>
        </div>
    )
}
