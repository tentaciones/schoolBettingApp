import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full uppercase font-bold text-base md:text-xl h-[100px] bg-[#D00000] md:px-20 px-5 flex items-center justify-between'>
      <p>Logo</p>
      <p>Faq</p>
      <p>About Us</p>
      <p>contact us</p>
    </div>
  )
}

export default Footer