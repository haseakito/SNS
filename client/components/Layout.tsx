import React from 'react'
import { SidebarLeft } from './SidebarLeft/SidebarLeft'
import { SidebarRight } from './SidebarRight/SidebarRight'

type LayoutProps = {
    children: React.ReactNode
}

export function Layout(props: LayoutProps) {

    const { children } = props

  return (
    <div className='h-screen bg-black'>
        <div className='container h-full mx-auto xl:px-30 max-w-6xl'>
            <div className='grid grid-cols-4 h-full'>
                <SidebarLeft />
                <div className='col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800'>
                    { children }
                </div>
                <SidebarRight />
            </div>
        </div>
        
    </div>
  )
}
