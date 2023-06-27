import React, { FormEvent, useState } from 'react'

export function Chat() {

    // String state handling the user input
    const [ inputValue, setInputValue ] = useState('')

    // Function handling submitting input to Firebase
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        // TODO: Add value to Firebase
    }

  return (
    <div>
        <div className='fixed bottom-5 p-2 lg:p-0 w-full max-w-lg lg:max-w-xl '>
            <form className='flex' onSubmit={handleSubmit}>
                <input
                    placeholder='Please enter your messages here'
                    className='w-1/2 md:w-full p-2 focus:ring-2 ring-white'
                    onChange={(e) => setInputValue(e.target.value)}/>
                <button
                    className='w-1/5 p-2 text-center bg-violet-300 border-none text-white  disabled:opacity-50 disabled:cursor-not-allowed'
                    type='submit'
                    disabled={!inputValue}
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}
