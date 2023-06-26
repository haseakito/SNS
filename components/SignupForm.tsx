import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NoticeModal } from './NoticeModal'
import { useLoginModal } from '@/hooks/useLoginModal'
import { useRegisterModal } from '@/hooks/useRegisterModal'
import { Modal } from './Modal'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './auth/Firebase'

// TODO ConfirmPassword in Typescript
type UserModel = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export function SignupForm() {

    const { register, watch, handleSubmit, formState: { errors } } = useForm<UserModel>({ mode: 'onSubmit' })

    // Hooks handling the state of LoginForm being open or not
    const loginModal = useLoginModal()

    // Hooks handling the state of SignupForm being open or not
    const registerModal = useRegisterModal()

    // Boolean state handling whether the terms and conditions is open or not 
    const [ noticeOpen, setNoticeOpen ] = useState(false)

    // Boolean state handling whether users agree to the terms and conditions
    const [ isAgreed, setIsAgreed ]= useState(false)

    // Boolean state handling whether the action is being loaded or not
    const [ isLoading, setIsLoading ] = useState(false)

    // Function handling when the users agree to the terms and conditions
    const onAgree = () => {
        setNoticeOpen(false)
        setIsAgreed(true)
    }

    // Function handling when the users disagree to the terms and conditions
    const onDisagree = () => {
        setNoticeOpen(false)
        setIsAgreed(false)
    }

    // Function handling if the user already have an account
    const onToggle = useCallback(() => {
        if (isLoading) {
            return
        }

        registerModal.onClose()
        loginModal.onOpen()

    }, [isLoading, registerModal, loginModal])

    // Function handling the submit user input
    const onSubmit = useCallback(async () => {
        try{

            setIsLoading(true)

            // ADD SIGN IN

            registerModal.onClose()

        } catch(error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }, [registerModal])

    const onGoogle = () => {
        signInWithPopup(auth, provider)
    }

    const bodyContent = (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='md:flex md:flex-wrap md:items-center -mx-3 pt-4'>
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                    <label className='block uppercase text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                        First Name
                    </label>                            
                    <input type='text' placeholder='Michael' 
                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    {...register("firstName", {
                        required: { value:true, message: "First name is required"},
                        minLength: { value: 1, message: "First name should be more than 1 character" }
                    })}
                     />
                </div>
                { errors.firstName && <p className='text-red'>{ errors.firstName.message }</p>}
                <div className='w-full md:w-1/2 px-3'>
                    <label className='block uppercase text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                        Last Name
                    </label>                
                    <input type='text' placeholder='Jackson' {...register('lastName', {
                        required: { value:true, message: "Last name is required"},
                        minLength: { value: 1, message: "Last name should be more than 1 character" }
                    })}
                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' />
                </div>
                { errors.lastName && <p className='text-red'>{ errors.lastName.message }</p>}
            </div>            
            <div className='mb-6'>
                <label className='block uppercase text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Email
                </label>
                <input type='email' placeholder='example@gmail.com' {...register('email', {
                    required: { value:true, message: "Email address is required"},
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format!"
                    }
                })}
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' />
            </div>
            { errors.email && <p className='text-red'>{ errors.email.message }</p>}
            <div className='mb-6'>
                <label className='block uppercase text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Password
                </label>
                <input type='password' placeholder='*************' {...register('password', {
                    required: { value:true, message: "Password is required"},
                    minLength: { value: 8, message: "Password must have at least 8 characters" }
                })}
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'/>
            </div>
            { errors.password && <p className='text-red'>{ errors.password.message }</p>}
            <div className='mb-6'>
                <label className='block uppercase text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Confirm Password
                </label>
                <input type='password' placeholder='*************' {...register('password', {
                    required: { value:true, message: "Confirm Password is correct"},
                    validate: (val: string) => {
                        if (watch('password') != val) {
                            return "Your passwords do not match"
                        }
                    }
                })}
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'/>
            </div>
            { errors.password && <p className='text-red'>{ errors.password.message }</p>}
            <div className='flex items-start mb-6'>
                <div className='flex items-center h-5'>
                    <input type="checkbox" className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800' 
                    onClick={() => setIsAgreed(!isAgreed)}/>
                </div>
                <label className='ml-2 text-sm font-medium text-white dark:text-gray-300'>I agree with the <a onClick={() => setNoticeOpen(true)} className='cursor-pointer text-blue-600 hover:underline dark:text-blue-500'>terms and conditions</a></label>
            </div>
            <div className='md:flex md:items-center'>
                <button type='submit' className='w-full md:w-1/5 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' >
                    Sign Up
                </button>
                <button type='reset' className='flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded' >
                    Cancel
                </button>
            </div>
        </form>
    )

    const footerContent = (
        <div className='pl-4 pb-4 text-slate-800 md:text-center'>
            <p className='italic'>
                Already have an account?  
                <span className='cursor-pointer hover:text-lg hover:font-medium hover:underline hover:text-white ml-2'
                onClick={onToggle}>
                    Sign in
                </span>
            </p>
        </div>
    )

  return (
    <Modal 
    disable={isLoading}
    isOpen={registerModal.isOpen}
    onClose={registerModal.onClose}
    onSubmit={onSubmit}
    title='Sign Up'
    body={bodyContent}
    footer={footerContent}
    />
  )
}
