import React from 'react'

export function Trendbar() {
  return (
    <div className='hidden lg:block px-6 py-4 '>
        <div className='bg-white py-2 px-4 rounded-xl '>
            <h2 className='font-bold text-black border-b-2 pb-1'>
                Trend for you
            </h2>
            {/* TODO TREND LIST */}
            <div className='font-semibold mt-3 py-1 px-2 hover:bg-slate-200 rounded-md cursor-pointer' 
            onClick={() => ''}>
                Alcohol
            </div>
            <div className='font-semibold mt-3 py-1 px-2 hover:bg-slate-200 rounded-md cursor-pointer' 
            onClick={() => ''}>
                Gun and Drag 
            </div>
            <div className='font-semibold mt-3 py-1 px-2 hover:bg-slate-200 rounded-md cursor-pointer' 
            onClick={() => ''}>
                Sex machine
            </div>
        </div>
    </div>
  )
}
