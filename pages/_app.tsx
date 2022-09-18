import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';

import { UIProvider } from '../context/ui';
import { darkTheme, lightTheme } from '../themes';

import '../styles/globals.css'




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <NextUIProvider theme={lightTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </UIProvider>
  )
}

export default MyApp
