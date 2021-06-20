import React, { ReactElement } from "react"

import Link from "next/link"

interface Props {}

export default function Navigation({}: Props): ReactElement {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
