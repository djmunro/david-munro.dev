import React, { ReactElement } from "react"

import Link from "next/link"
import { useRouter } from "next/router"

interface Props {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: Props): ReactElement {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <li
      className={`${
        isActive && "bg-green-500 "
      } hover:bg-green-500 px-3 py-2 ml-2 rounded text-white font-bold`}
    >
      <Link href={href}>{children}</Link>
    </li>
  )
}
