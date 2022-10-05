import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleAmountChange, handleCategoryChange, handleDifficultyChange, handleScoreChange } from '../redux/actions'


const FinalScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {score} = useSelector(state => state)

  const handleBackToSettings = () => {
    dispatch(handleCategoryChange(''))
    dispatch(handleDifficultyChange(''))
    dispatch(handleScoreChange(0))
    dispatch(handleAmountChange(10))
    navigate('/')
  }
  console.log(score);
  return (
    <div className='flex flex-col text-center mt-30'>
      <h1 className='mb-3'>Final Score {score}</h1>
      <button onClick={handleBackToSettings} className='bg-gray-700 w-full my-8 text-sm rounded-lg h-10 hover:bg-slate-500 focus:ring-white focus:ring-1'>back to settings</button>
    </div>
  )
}

export default FinalScreen