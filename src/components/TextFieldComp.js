import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAmountChange } from '../redux/actions'

const TextFieldComp = () => {

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value))
    }

    return (

        <div className="">
            <input
                onChange={handleChange}
                type="number"
                className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-sm
          font-normal
          text-white
          bg-gray-700 bg-clip-padding
          dark:border-gray-600
          rounded
          transition
          ease-in-out
          m-0
          focus:border-white"
                placeholder="Amount of Questions" />
        </div>
    )
}

export default TextFieldComp
