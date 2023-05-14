import React from 'react'

type SidebarItemProps = {
    title: string,
    link: string,
    icon: React.ReactNode
    onClick?: () => void
}

export function SidebarItem(props: SidebarItemProps) {

    const { title, link, icon} = props


  return (
    <div className='flex flex-row items-center'>
        <div className='relative rounded-full h-14 w-14 flex items-center justify-center p-4 text-white hover:bg-slate-300 bg-opacity-10 cursor-pointer lg:hidden'>
            { icon }
        </div>
        <div className='relative hidden lg:flex items-center gap-4 p-4 rounded-full text-white hover:bg-slate-300 cursor-pointer'>
            { icon }
            <p className='hidden lg:block text-white text-xl'>
                { title }
            </p>
        </div>
    </div>
  )
}
