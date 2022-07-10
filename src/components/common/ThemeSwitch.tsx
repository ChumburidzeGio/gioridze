import React, { useState } from "react"
import { Switch } from "@headlessui/react"
import { MoonIcon, SunIcon } from "@heroicons/react/outline"
import { EmptyProps } from "@/definitions"
import { getTheme, setDarkMode, setLightMode } from "@/utils/fns"

const ThemeSwitch: React.FC<EmptyProps> = () => {
  const [isDark, toggleDark] = useState(getTheme() === "dark")
  const changeTheme = () => {
    toggleDark(!isDark)
    if (isDark) {
      setLightMode()
    } else {
      setDarkMode()
    }
  }

  return (
    <Switch
      checked={isDark}
      onChange={changeTheme}
      className="bg-blue-800 z-10 relative flex justify-between items-center flex-shrink-0 h-7 w-14 sm:h-8 sm:w-16 px-1 border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-skin-focus focus-visible:ring-opacity-75"
    >
      {isDark && <SunIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white dark:text-amber-300" />}
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className="bg-white
        pointer-events-none inline-block h-4 w-4 sm:h-5 sm:w-5 rounded-full shadow-lg transform ring-0 transition-colors ease-in-out duration-500"
      />
      {!isDark && <MoonIcon className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" />}
    </Switch>
  )
}

export default ThemeSwitch
