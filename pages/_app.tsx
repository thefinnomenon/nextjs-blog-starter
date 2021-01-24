import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
