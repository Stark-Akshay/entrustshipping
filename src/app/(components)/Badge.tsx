import React from 'react'

type Props = {
    children: React.ReactNode,
    className: string,
}

const Badge = ({ children, className }: Props) => {
    return (
        <div className={`rounded-full min-w-max px-4 py-1 ${className} border-entrustBlue border-2 w-[20px]`}>
            {children}
        </div>
    )
}

export default Badge