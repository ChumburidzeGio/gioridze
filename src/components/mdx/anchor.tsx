import * as React from 'react'
import { Link } from "gatsby"

export interface AnchorProps {
    href: string
}

export const Anchor: React.FC<AnchorProps> = ({ href, children }) => {
    const isInternal = href.startsWith('/')

    return isInternal ? (
        <Link to={href} className="text-blue-500 font-semibold">
            {children}
        </Link>
    ) : (
        <a
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 font-medium"
            href={href}
        >
            {children}
        </a>
    )
}
