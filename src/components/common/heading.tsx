import * as React from 'react'
import {classNames} from "@/utils/class-names";

interface HeadingProps {
    level: '1' | '2' | '3' | '4'
    className?: string
}

export const Heading: React.FC<HeadingProps> = ({
    children,
    level,
    className,
}) => {
    if (level === '1') {
        return (
            <h1
                className={classNames(
                    className,
                    'text-4xl mt-1 font-bold text-gray-900 dark:text-white'
                )}
            >
                {children}
            </h1>
        )
    }

    if (level === '2') {
        return (
            <h2
                className={classNames(
                    className,
                    'text-3xl font-semibold text-gray-800 dark:text-white'
                )}
            >
                {children}
            </h2>
        )
    }

    if (level === '3') {
        return (
            <h3
                className={classNames(
                    className,
                    'text-2xl font-semibold text-gray-800 dark:text-white'
                )}
            >
                {children}
            </h3>
        )
    }

    if (level === '4') {
        return (
            <h3
                className={classNames(
                    className,
                    'text-lg font-semibold text-gray-800 dark:text-white'
                )}
            >
                {children}
            </h3>
        )
    }

    return null
}
