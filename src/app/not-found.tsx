import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='pt-[7rem] flex flex-col justify-center items-center text-entrustBlue h-screen'>
            <h1 className='text-3xl font-bold'>404 Not Found</h1>
            <h2 className='text-xl'>The resource you are looking for is not found or under development!</h2>
            <Link className='text-lg underline' href="/">Return Home</Link>
        </div>
    )
}