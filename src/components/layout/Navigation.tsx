import React, { ReactElement } from "react"

import NavLink from "./NavLink"

interface Props {}

export default function Navigation({}: Props): ReactElement {
  return (
    <header className="bg-green-400">
      <nav>
        <ul className="flex flex-row p-4">
          <NavLink href="/">Dashboard</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>
        </ul>
      </nav>
    </header>
  )
}
