import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import { Toaster } from 'react-hot-toast'
import { Layout } from '@/components/layout'

import '@/styles/globals.css'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Toaster />
    </SessionProvider>
  )
}
