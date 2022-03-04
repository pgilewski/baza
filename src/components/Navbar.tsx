import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <div>
      <Link style={{ color: match ? '#4621ec' : '#d6d6d6' }} to={to} {...props}>
        {children}
      </Link>
    </div>
  )
}

const Navbar = () => {
  return (
    <div className="mediumShadow w-full bg-navyDark px-8 py-6 shadow-strong text-lg2">
      <div className="w-full md:max-w-screen-lg  flex flex-row justify-between m-auto font-semibold md:text-lg">
        <div className="flex flex-row sm:mr-0  ">
          <CustomLink
            to="/"
            className="mx-2 text-center flex items-center justify-center align-middle  font-mono"
          >
            about me
          </CustomLink>
          <CustomLink
            to="projects"
            className="mx-2 text-center flex items-center justify-center align-middle  font-mono"
          >
            my projects
          </CustomLink>
        </div>
        <CustomLink
          to="contact"
          className="flex flex-row items-center align-middle"
        >
          <div className="mx-2 text-center flex items-center justify-center align-middle  font-mono">
            contact
          </div>
        </CustomLink>
      </div>
    </div>
  )
}

export default Navbar
