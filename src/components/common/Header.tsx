import React  from "react"
import { Link } from "gatsby"
import { ArrowLeftIcon } from "@heroicons/react/outline"
import { EmptyProps } from "@/definitions"
import {ThemeSwitch} from "@/components/common/index";

const Header: React.FC<EmptyProps> = () => {
  return (
      <div className="bg-gray-900 dark:bg-black">
          <div className="max-w-7xl mx-auto px-8 py-4 sm:px-6 md:py-6 w-full">
              <div className="flex justify-between text-white">
                <Link
                  to="/"
                  className="mt-1 flex flex-row rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-300"
                >
                  <ArrowLeftIcon className="flex h-4 w-auto mt-0.5" />
                  <div className="flex ml-3 font-bold text-sm">Go Home</div>
                </Link>
                <ThemeSwitch />
            </div>
          </div>
      </div>
  )
}

export default Header
