import * as React from 'react'
import {Heading} from "@/components/common";

export const CustomH1: React.FC = ({ children }) => {
    return <Heading level="1">{children}</Heading>
}

export const CustomH2: React.FC = ({ children }) => (
    <Heading level="2" className="mt-7">
        {children}
    </Heading>
)

export const CustomH3: React.FC = ({ children }) => (
    <Heading level="3" className="mt-7">
        {children}
    </Heading>
)

export const CustomH4: React.FC = ({ children }) => (
    <Heading level="4" className="mt-7">
        {children}
    </Heading>
)

export const CustomP: React.FC = ({ children }) => (
    <p className="text-md mt-3 text-gray-900 dark:text-white">{children}</p>
)
