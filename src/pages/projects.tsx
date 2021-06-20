import React, { ReactElement } from "react"

import { Project } from "@prisma/client"
import Link from "next/link"

import prisma from "@lib/db"

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

export default function Projects({ projects }: Props): ReactElement {
  return (
    <section className="h-full flex flex-row">
      <nav className="p-4">
        <div className="mb-4">
          {projects.length === 0 && <p>No projects! Add some ⬇</p>}
          <ul className="flex-col">
            {projects.map((project) => (
              <Link key={project.id} href={`/project/${String(project.id)}`}>
                <li className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                  {project.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <form action="/projects" className="flex flex-row">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            aria-label="Project Title"
            className="rounded bg-gray-100 border-gray-200"
          />
          <button
            type="submit"
            className="px-3 bg-red-400 text-white ml-2 rounded"
          >
            ADD
          </button>
        </form>
      </nav>
      <hr className="border-0 bg-gray-200 w-px h-full m-0" />
      <div />
    </section>
  )
}
