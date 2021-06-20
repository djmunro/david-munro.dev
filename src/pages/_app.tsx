import React from "react"

import { NextPage } from "next"

import "../styles/tailwind.scss"
import DefaultLayout from "@components/layout/DefaultLayout"

type GetLayoutFunc = (page: React.ReactElement) => React.ReactElement

export type NextPageWithLayout = NextPage & {
  getLayout: GetLayoutFunc
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
