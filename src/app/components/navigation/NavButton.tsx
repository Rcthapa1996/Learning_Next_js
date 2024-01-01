'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const NavButton = () => {
    const router = useRouter();
  return (
    <button onClick={()=>router.push("/")}>Take me to Home</button>
  )
}

export default NavButton