import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';

import { darkTheme, lightTheme } from '../themes';
import { store } from '../redux/store';

import '../styles/globals.css'




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <NextUIProvider theme={lightTheme}>
          <Component {...pageProps} />
        </NextUIProvider>
    </Provider>
  )
}

export default MyApp
