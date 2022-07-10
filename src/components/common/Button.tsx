import React from "react"
import {ButtonProps} from "@/definitions";

const IconButton: React.FC<ButtonProps> = ({
  href,
  label,
  children,
  isLarge,
}) => {
  const sizeClasses = isLarge ? "p-1 md:p-1.5" : "p-1 md:p-1.5"
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`${sizeClasses} inline-flex bg-white items-center rounded-md md:rounded-lg shadow-fg text-white focus:outline-none focus:ring-4 focus:ring-indigo-300`}
    >
      {children}
    </a>
  )
}

export default IconButton
