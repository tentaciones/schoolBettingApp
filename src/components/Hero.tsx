import React, { Dispatch, FC, SetStateAction } from 'react'
import heroImage from "@/assets/Rectangle 5.svg"
import PredictionBox from './PredictionBox'
import Image from 'next/image'
type Props = {
  setShowBet: Dispatch<SetStateAction<boolean>>
}

const Hero :FC<Props> = ({setShowBet}) => {
  return (
    <div className='w-full md:px-20 px-5  flex-col-reverse md:flex-row flex items-center gap-3  pt-5'>
        <div className='md:w-1/2 w-full'>
        <PredictionBox setShowBet={setShowBet} game={"AL Hilal vs Al Nassr"}/>
        </div>
        <div className='md:w-1/2 w-full'>
        <Image src={heroImage} alt="heroImage" width={0} height={0} className='h-[300px] w-full object-cover'/>
        </div>
    

    </div>
  )
}

export default Hero