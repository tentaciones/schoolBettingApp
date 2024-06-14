import Link from 'next/link'
import React from 'react'

type Props = {}
const links=["Home","predictions","Blog", "Donate to us"]

const Navbar = (props: Props) => {
  return (
    <div className='h-20  flex items-center justify-between shadow-xl md:px-20 px-5'>
<p>LOgo</p>

{links.map((link,index)=>{
    return(
        <Link className='md:block hidden' key={index} href="">{link}</Link>
    )
})}


<button className='bg-[#03071E] py-3 rounded-md w-32 '>Place bets</button>
    </div>
  )
}

export default Navbar