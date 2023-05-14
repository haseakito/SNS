import React from 'react'
import { useForm } from 'react-hook-form'

export function LoginForm() {
    
    const { register, handleSubmit, formState: { errors }} = useForm({ mode: 'onSubmit' })

    // Function handling the submit user input
    const onSubmit = () => {

    }
  return (
    <div className='w-full max-w-xs'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
                <label className='block uppercase text-gray-700 text-sm font-bold mb-2'>
                    Email
                </label>
                <input type='email' placeholder='Email Address'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                {...register('email', { 
                    required: true,
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format!"
                    }
                })}
                />
            </div>
            <div className='mb-6'>
                <label className='block uppercase text-gray-700 text-sm font-bold mb-2'>
                    Password
                </label>
                <input type='password' placeholder='Password'
                className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                {...register('password', {
                    required: true,
                    minLength: { value: 8, message: "Password must have at least 8 characters" }
                })}
                />
            </div>
            <div className='md:flex md:items-center mb-6'>
                <div className='md:w-1/3"></di'>
                    <label className='md:w-2/3 block text-gray-500 font-bold'>
                        <input className='mr-2 leading-tight" type="checkbox' />
                        <span className='text-sm'>
                            Remember me!
                        </span>
                    </label>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'>
                    Login
                </button>
                <a className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
                href='#'>
                    Forgot Password?
                </a>
            </div>
        </form>
    </div>
  )
}
