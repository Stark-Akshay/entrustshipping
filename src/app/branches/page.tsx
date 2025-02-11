import { Metadata } from 'next'
import React from 'react'

type Props = {}


export const metadata: Metadata = {
    title: "Branches"
}

const branches = (props: Props) => {
    return (
        <div className='pt-[7rem] h-screen'>branches</div>
    )
}

export default branches