
import Link from 'next/link'
import React from 'react'

const MenuItem = ({title, icon, address}) => {
  return (
    <div>
      <Link href={address} >
        <div className='rounded-full hover:text-amber-600'>
          <span className='sm:hidden text-2xl '>{icon}</span>
          <span className='uppercase font-semibold hidden sm:inline '>{title}</span>
        </div>
      </Link>
    </div>
  )
}

export default MenuItem 