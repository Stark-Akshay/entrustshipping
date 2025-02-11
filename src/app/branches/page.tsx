import { Metadata } from 'next'
import React from 'react'
import NotFound from '../not-found'

type Props = {}


export const metadata: Metadata = {
    title: "Branches"
}

const branches = (props: Props) => {
    return (
        <NotFound />
    )
}

export default branches