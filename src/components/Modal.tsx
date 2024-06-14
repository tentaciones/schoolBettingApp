import React, { Dispatch, FC, SetStateAction } from 'react'
import close from "@/assets/Vector.svg"
import Image from 'next/image'
type Props = {
    setShowBet: Dispatch<SetStateAction<boolean>>
}

const Modal:FC<Props> = ({setShowBet}) => {
  return (
    <div className="h-screen text-sm  px-2 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  flex items-center justify-center text-white ">
    <div className='md:w-1/3 w-full h-1/2 bg-white p-5 text-black'>
    <div className='w-full h-full bg-white p-10 -xl flex flex-col justify-between items-center  border-[#CDCDD2] border-[2px]'>
        <div className='w-full justify-end flex'>
        <Image 
        onClick={()=>setShowBet(false)}
        src={close} 
        alt="close" width={0} height={0} className='' />
        </div>
        <p className='text-xl'>Premier League</p>
        <p className='text-3xl font-bold'>Man City Vs Man U</p>
        <p>Results will be sent to your email</p>
        <form action="" className='border w-full h-[60px] rounded-xl flex items-center px-5'>
            <input type="email"  placeholder='enter email' className='w-full h-full outline-none '/>
            <button className='flex-shrink-0 bg-[#D00000] text-white py-3 px-5 rounded-md'>    Place bet</button>
        </form>
    </div>
        </div>
    </div>
  )
}

export default Modal