import React from 'react'
import { useForm } from 'react-hook-form'
import SearchIcon from '@mui/icons-material/Search'

export function Searchbar() {

    const { register, handleSubmit } = useForm()

    // Function handling submit the user input
    const onSubmit = () => {
        console.log()
    }

  return (
    <form className='hidden px-6 py-4 lg:block' onSubmit={handleSubmit(onSubmit)}>
        <div className='absolute mt-4 flex items-center pl-3 pointer-events-none'>
            <SearchIcon className='text-black' />
        </div>
        <input type='text' placeholder='Search Tweets...' className='block w-full p-4 pl-12 text-base text-gray-900 rounded-lg bg-gray-50 ' />
    </form>
  )
}
