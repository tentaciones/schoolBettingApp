import React from 'react'
import NewsCard from './NewsCard'

type Props = {}

const Latest = (props: Props) => {
  return (
    <div className='w-full md:px-20 px-5   bg-[#CDCDD2] h-[700px]'> 
    
    <p className='text-5xl font-bold text-black text-center py-20'>Latest News</p>
    <div className='flex  overflow-y-scroll'>
    {Array.from({ length: 15 }).map((_, index) => (
        <div key={index} className='px-5'>
    <NewsCard/> 
        </div>

    ))}
    </div>



    </div>
  )
}

export default Latest