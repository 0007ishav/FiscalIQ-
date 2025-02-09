import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const HeaderLogo = () => {
  return (
    <Link href="/">
        <div className='items-center hidden lg:flex'>
            <Image src="fms-cropped.svg" height={40} width={40} alt='logo'/>
            <p className='font-bold text-white text-2xl ml-2.5'>FMS</p>
        </div>
    </Link>
  )
}

export default HeaderLogo