import React from 'react'
import AddIcon from '@mui/icons-material/Add'

export default function SidebarTweet() {
  return (
    <div onClick={() => ''}>
        <div className='mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer'>
            <AddIcon />
        </div>
        <div className='mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition'>
            <p className='hidden lg:block text-center font-semibold text-white text-[20px]'>
                Tweet
            </p>
        </div>
    </div>
  )
}
