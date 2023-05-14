import React, { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import CloseIcon from '@mui/icons-material/Close'
import { useLoginModal } from '@/hooks/useLoginModal'
import { useRegisterModal } from '@/hooks/useRegisterModal'

export function LoginForm() {
    
    const { register, handleSubmit, formState: { errors }} = useForm({ mode: 'onSubmit' })

    // Hooks handling the state of being open or not
    const loginModal = useLoginModal()

    // Hooks handling the state of being open or not
    const registerModal = useRegisterModal()

    // Boolean state handling whether the action is being loaded or not
    const [ isLoading, setIsLoading ] = useState(false)

    // Function handling if the user does not have an account
    const onToggle = useCallback(() => {

        if (isLoading) {
            return
        }

        loginModal.onClose()
        registerModal.onOpen()

    }, [loginModal, registerModal])

    // Function handling the submit user input
    const onSubmit = useCallback(async () => {
        try {

            setIsLoading(true)

        } catch(error) {
            console.log(error)
        }
        finally {

            setIsLoading(false)

        }
    }, [])

  return (
    <div className='bg-white rounded-md mr-4 lg:mr-0'>
        <form className='w-full shadow-md rounded px-8 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify-between border-b-[1px] pb-3 mb-8'>
                <h2 className='pt-4 text-2xl font-bold'>
                    Login
                </h2>
                <button className='mt-4 p-1 hover:bg-slate-200 rounded-xl focus:shadow-lg focus:border-slate-500 border-2' onClick={() => loginModal.onClose()}>
                    <CloseIcon  />
                </button>
            </div>    
            <div className='mb-6'>
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
            <div className='md:flex mb-6'>    
                <label className='block text-gray-500 font-bold'>
                    <input className='mr-2 leading-tight' type='checkbox' />
                    <span className='text-sm'>
                        Remember me!
                    </span>
                </label>
            </div>
            <div className='md:flex items-center justify-center mb-6'>
                <button className='w-full md:w-1/5 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold md:py-2 py-3 px-4 mr-4 rounded-xl md:rounded'>
                    Login
                </button>
                <a className='font-bold text-sm text-blue-500 hover:text-blue-800'
                href='#'>
                    Forgot Password?
                </a>
            </div>
            <div className='pl-4 text-slate-800 md:text-center'>
                <p className='italic'>
                    Did not have an account? 
                    <span className='cursor-pointer hover:text-lg hover:font-medium hover:underline ml-2'
                    onClick={onToggle}>
                        Create an account
                    </span>
                </p>
            </div>
        </form>
    </div>    
  )
}
