import React from "react"

import { AppProps } from "next/app"

import "../styles/tailwind.scss"
import SiteLayout from "@components/layout/SiteLayout"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
