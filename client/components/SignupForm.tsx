import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NoticeModal } from './NoticeModal'
import { useLoginModal } from '@/hooks/useLoginModal'
import { useRegisterModal } from '@/hooks/useRegisterModal'
import CloseIcon from '@mui/icons-material/Close'

export function SignupForm() {

    const { register, watch, handleSubmit, formState: { errors } } = useForm({ mode: 'onSubmit' })

    // Hooks handling the state of being open or not
    const loginModal = useLoginModal()

    // Hooks handling the state of being open or not
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

    }, [registerModal, loginModal])

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

  return (
    <div className='bg-white rounded-md mr-4 lg:mr-0'>
        <form className='w-full pr-2 pl-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify-between border-b-[1px] pb-3'>
                <h2 className='pt-4 text-2xl font-bold'>
                    Sign up
                </h2>
                <button className='mt-4 p-1 hover:bg-slate-200 rounded-xl focus:shadow-lg focus:border-slate-500 border-2' onClick={() => registerModal.onClose()}>
                    <CloseIcon  />
                </button>
            </div>            
            <div className='md:flex md:flex-wrap md:items-center -mx-3 mb-6 pt-4'>
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                    <label className='block uppercase text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                        First Name
                    </label>                            
                    <input type='text' placeholder='Michael' 
                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                    {...register('firstName', {
                        required: true,
                        minLength: { value: 1, message: "First name should be more than 1 character" }
                    })}
                     />
                </div>
                <p></p>
                <div className='w-full md:w-1/2 px-3'>
                    <label className='block uppercase text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                        Last Name
                    </label>                
                    <input type='text' placeholder='Jackson' {...register('lastName', {
                        required: true,
                        minLength: { value: 1, message: "Last name should be more than 1 character" }
                    })}
                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' />
                </div>
            </div>
            
            <div className='mb-6'>
                <label className='block uppercase text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Email
                </label>
                <input type='email' placeholder='example@gmail.com' {...register('email', {
                    required: true,
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format!"
                    }
                })}
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' />
            </div>
            <div className='mb-6'>
                <label className='block uppercase text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Password
                </label>
                <input type='password' {...register('password', {
                    required: true,
                    minLength: { value: 8, message: "Password must have at least 8 characters" }
                })}
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'/>
            </div>
            <div className='mb-6'>
                <label className='block uppercase text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
                    Confirm Password
                </label>
                <input type='password' {...register('confirmPassword', {
                    required: true,
                    validate: (val: string) => {
                        if (watch('password') != val) {
                            return "Your passwords do not match"
                        }
                    }
                })}
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'/>
            </div>
            <div className='flex items-start mb-6'>
                <div className='flex items-center h-5'>
                    <input type="checkbox" value="" className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800' 
                    onClick={() => setIsAgreed(!isAgreed)}/>
                </div>
                <label className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>I agree with the <a onClick={() => setNoticeOpen(true)} className='text-blue-600 hover:underline dark:text-blue-500'>terms and conditions</a></label>
            </div>
            <div className='mb-6 md:flex md:items-center'>
                <div className='md:w-1/3'></div>
                <div className='md:w-2/3'>
                    <button type='submit' className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' >
                        Sign Up
                    </button>
                    <button type='reset' className='flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded' >
                        Cancel
                    </button>
                </div>
            </div>
            <div className='pl-4 pb-4 text-slate-800 md:text-center'>
                <p className='italic'>
                    Already have an account?  
                    <span className='cursor-pointer hover:text-lg hover:font-medium hover:underline ml-2'
                    onClick={onToggle}>
                        Sign in
                    </span>
                </p>
            </div>
        </form>

        { noticeOpen ? 

        <NoticeModal 
            setNoticeOpen={ setNoticeOpen }
            onAgree={ onAgree }
            onDisagree={ onDisagree }
        /> 
        : 
        null }
    </div>
  )
}
