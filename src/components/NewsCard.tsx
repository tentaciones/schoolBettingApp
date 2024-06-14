import Image from 'next/image'
import React from 'react'
import newsImage from "@/assets/Frame 12.svg"
import externalLink from "@/assets/externalLink.svg"
type Props = {}

const NewsCard = (props: Props) => {
  return (
    <div className='w-[380px] text-black h-[380px] bg-white rounded-md -2xl'>
      <div className='w-full flex justify-center pt-5'>
      <Image src={newsImage} alt="newImage" width={0} height={0} className='w-[350px] h-[150px] object-cover'/>
      </div>
      <div className='flex justify-end px-5 pt-3'>
      <Image src={externalLink} alt="external Link" width={0} height={0} className='cursor-pointer' />
      </div>
     
     <p className='px-5 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus eligendi inventore nemo, ut expedita enim saepe consequatur itaque magni aliquam esse labore! Possimus, aperiam reprehenderit adipisci culpa ut expedita!</p>
    </div>
  )
}

export default NewsCard