import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode,
    className?: string,
    location: string
}

const SecondaryCTA = ({ children, className, location }: Props) => {

    return (

        <Link role='button' aria-label="Go to Contact Us Page" href={location} className={`flex flex-row w-[15rem] items-center justify-center  gap-2  border-2 bg-entrustBlue text-white ${className} rounded-full px-4 py-2`}>
            {children}
            <ArrowRight size={20} />
        </Link>



    )
}

export default SecondaryCTA