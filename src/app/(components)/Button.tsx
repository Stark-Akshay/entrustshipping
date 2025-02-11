
import Link from 'next/link'
import React from 'react'

type Props = {
  size?: string,
  borderColor?: string,
  bg?: string,
  textColor?: string,
  children: React.ReactNode,
  className?: string
}

const Button = ({ size, borderColor, bg, textColor, children, className }: Props) => {

  return (
    <Link aria-label="Go to Contact Us Page" href="/contactus" className={`text-${size} border-2 border-${borderColor} bg-${bg} text-${textColor} ${className} rounded-full min-w-max px-4 py-2`}>
      {children}
    </Link>
  )
}

export default Button