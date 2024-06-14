import React, { Dispatch, FC, SetStateAction } from 'react'

type Props = {
  game:string
  setShowBet: Dispatch<SetStateAction<boolean>>
}

const PredictionBox:FC<Props> = ({game,setShowBet}) => {
  return (
    <div className='w-full bg-[#CDCDD2] p-1 text-black'>
    <div className='w-full bg-[#CDCDD2] p-10 shadow-xl flex flex-col justify-between items-center h-[300px] border-white border-[2px]'>
    <p className='text-3xl font-bold text-center'>Prediction of the day</p>
    <p className='text-xl font-bold'>{`< ${game} >`}</p>
    <button 
    onClick={()=>setShowBet(true)}
    className='bg-[#D00000] text-white p-3 rounded-md'>Place Bet</button>
    </div>
    </div>
  )
}

export default PredictionBox