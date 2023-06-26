import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

type HeaderProps = {
    label: string,
    isArrowBackIcon?: boolean
}

export function Header(props: HeaderProps) {

    const { label, isArrowBackIcon } = props

  return (
    <div className='border-b-[1px] border-neutral-700 p-5'>
        <div className='flex flex-row items-center gap-2'>
            {
                isArrowBackIcon ?
                <button onClick={() => ''} className='hover:opacity-70 transition'>
                    <ArrowBackIcon className='text-white' />
                </button>
                :
                null
            }
            <h1 className='text-white text-xl font-semibold'>{ label }</h1>
        </div>
    </div>
  )
}
