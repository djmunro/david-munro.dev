import React, { ReactElement } from "react"

import Navigation from "./Navigation"

interface Props {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: Props): ReactElement {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  )
}
