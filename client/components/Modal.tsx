import React, { useCallback } from 'react'
import CloseIcon from '@mui/icons-material/Close'

type ModalProps = {
    isOpen: boolean,
    onClose: () => void,
    onSubmit: () => void,
    title: string,
    body: React.ReactElement,
    footer: React.ReactElement,
    disable: boolean
}

export function Modal(props: ModalProps) {
    
    const { isOpen, onClose, onSubmit, title, body, footer, disable } = props

    // Function handling closing the modal
    const handleClose = useCallback(() => {
        if (disable) {
            return
        }

        onClose()

      },[disable])

    // Function handling submitting the user input  
    const handleSubmit = useCallback(() => {
        if (disable) {
            return
        }

        onSubmit()

    }, [disable]) 
    
    if (!isOpen) {
        return null
    }
  return (
    <div className='flex justify-between items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-700 bg-opacity-70'>
        <div className='relative w-full lg:w-3/6 my-5 mx-auto h-5/6 lg:h-auto'>
            { /* Content */ }
            <div className='h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none'>
                {/* Header */}
                <div className='flex justify-between p-10 rounded-t border-b-[1px] border-b-white'>
                    <h3 className='text-white text-3xl'>{ title }</h3>
                    <button className='p-1 rounded-lg hover:bg-neutral-700 transition'
                    onClick={(handleClose)}>
                        <CloseIcon className='text-white text-3xl hover:text-4xl' />
                    </button>
                </div>
                {/* body */}
                <div className='px-10 mt-3'>
                    { body }
                </div>
                {/* footer */}
                <div className='flex justify-center gap-2 mt-10 pb-10'>
                    { footer }
                </div>
            </div>
        </div>
    </div>
  )
}
