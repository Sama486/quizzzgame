import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from '../redux/actions'

const SelectField = ({ label, options }) => {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setValue(e.target.value)
        switch (label) {
            case 'Category':
                dispatch(handleCategoryChange(e.target.value))
                break
            case 'Difficulty':
                dispatch(handleDifficultyChange(e.target.value))
                break
            case 'Type':
                dispatch(handleTypeChange(e.target.value))
                break
            default:
                return
        }
    }

    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{label}</label>
            <select value={value} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-white">
                <option value={''}>Any</option>
                {options.map(({ id, name }) => (
                    <option value={id} key={id}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectField
