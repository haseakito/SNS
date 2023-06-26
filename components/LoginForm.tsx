import React, { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useLoginModal } from '@/hooks/useLoginModal'
import { useRegisterModal } from '@/hooks/useRegisterModal'
import { Modal } from './Modal'


export function LoginForm() {
    
    const { register, handleSubmit, formState } = useForm({ mode: 'onSubmit' })
    const { errors } = formState

    // Hooks handling the state of LoginForm being open or not
    const loginModal = useLoginModal()

    // Hooks handling the state of SignupForm being open or not
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

    }, [isLoading, loginModal, registerModal])

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

    // body content to pass to Modal
    const bodyContent = (
        <form>
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
            <p>{}</p>
            <div className='mb-6'>
                <label className='block uppercase text-gray-700 text-sm font-bold mb-2'>
                    Password
                </label>
                <input type='password' placeholder='Password'
                className='shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                {...register('password', {
                    required: true,
                    minLength: { value: 8, message: "Password must have at least 8 characters" }
                })}
                />
            </div>
            <div className='md:flex items-center justify-center mb-6'>
                <button className='w-full md:w-1/5 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold md:py-2 py-3 px-4 mr-4 rounded-xl md:rounded'
                >
                    Login
                </button>
                <a className='font-bold text-sm text-blue-500 hover:text-blue-800'
                href='#'>
                    Forgot Password?
                </a>
            </div>
        </form>
    )

    const footerContent = (
        <div>
            <div className='pl-4 text-slate-800 md:text-center'>
                <p className='italic'>
                    Did not have an account? 
                    <span className='cursor-pointer hover:text-lg hover:font-medium hover:underline hover:text-white ml-2'
                    onClick={onToggle}>
                        Create an account
                    </span>
                </p>
            </div>
        </div>
    )

  return (
    <Modal
    disable={isLoading}
    isOpen={loginModal.isOpen}
    title='Login'
    onClose={loginModal.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
    footer={footerContent}
    />
  )
}
