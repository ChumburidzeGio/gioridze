import React  from "react"
import { Link } from "gatsby"
import { HomeIcon } from "@heroicons/react/outline"
import { EmptyProps } from "@/definitions"
import {ThemeSwitch} from "@/components/common/index";

const Header: React.FC<EmptyProps> = () => {
  return (
      <div className="bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 w-full">
              <div className="flex justify-between">
                <Link
                  to="/"
                  className="flex flex-row rounded-md text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-300"
                >
                  <HomeIcon className="flex h-8 w-auto" />
                  <div className="flex mt-1 ml-3">Go back</div>
                </Link>
                <ThemeSwitch />
            </div>
          </div>
      </div>
  )
}

export default Header
