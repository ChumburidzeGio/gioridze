import React, { ReactNode } from "react"
import { Location } from "history"

import { Header, Bio, ThemeSwitch } from "./common"
import {classNames} from "@/utils/class-names";

interface LayoutProps {
  location: Location
  title: string
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="w-full md:w-1/3 relative">
        <div className="md:h-full p-8 sm:p-8 flex flex-col justify-center bg-gray-900 dark:bg-black text-white transition-colors">
          <Bio />
        </div>
      </div>
    )
  } else {
    header = <Header />
  }

  return (
    <div
      className={`relative antialiased flex flex-col ${
        isRootPath ? "md:h-screen md:flex-row overflow-hidden" : ""
      } selection:bg-yellow-200 selection:text-black`}
    >
      <div
        className={`${isRootPath ? "" : "hidden"} absolute top-0 right-0 m-3 sm:m-5`}
      >
        <ThemeSwitch />
      </div>
      {header}
      <main className={classNames('flex-1 px-8 lg:px-24 py-8 md:py-16 overflow-y-auto', isRootPath ? 'bg-zinc-100 dark:bg-gray-900' : 'bg-white dark:bg-gray-900 text-black dark:text-white')}>
        {children}
      </main>
    </div>
  )
}

export default Layout
