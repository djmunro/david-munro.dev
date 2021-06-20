import React, { ReactElement } from "react"

import { Project } from "@prisma/client"
import { useRouter } from "next/router"

import prisma from "@lib/db"

import Projects from "../../projects"

interface Props {
  projects: Project[]
}

export const getServerSideProps = async ({ req, query }) => {
  let shouldRedirect = false
  if (req.url.includes("projects") && query.title) {
    await prisma.project.create({
      data: { title: query.title, authorId: 1 },
    })

    shouldRedirect = true
  }

  const projects = await prisma.project.findMany()

  return {
    props: { projects },
    redirect: shouldRedirect && {
      permanent: false,
      destination: "/projects",
    },
  }
}

export default function P({ projects }: Props): ReactElement {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="h-full flex flex-row">
      <Projects projects={projects} />
      <div className="p-6">{id}</div>
    </div>
  )
}
