import React from "react"

import { NextPage } from "next"

import "../styles/tailwind.scss"
import DefaultLayout from "@components/layout/DefaultLayout"

export type NextPageWithLayout = NextPage & {
  getLayout: (page: React.ReactElement) => React.ReactElement
}

type Props = {
  Component: NextPageWithLayout
  pageProps: any
}

function MyApp({ Component, pageProps }: Props): JSX.Element {
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
