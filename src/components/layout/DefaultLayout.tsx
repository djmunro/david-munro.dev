import React, { ReactElement } from "react"

import Navigation from "./Navigation"

interface Props {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: Props): ReactElement {
  return (
    <div className="h-screen min-h-full">
      <Navigation />
      <main className="h-full">{children}</main>
    </div>
  )
}
