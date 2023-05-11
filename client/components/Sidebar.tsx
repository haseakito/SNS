import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import TwitterIcon from '@mui/icons-material/Twitter'
import LogoutIcon from '@mui/icons-material/Logout';
import { SidebarItem } from './SidebarItem'
import SidebarTweet from './SidebarTweet'

export function Sidebar() {

    const SidebarData = [
        {
            title: 'Home',
            link: '/',
            icon: <HomeIcon />
        },
        {
            title: 'Notification',
            link: '/notification',
            icon: <CircleNotificationsIcon />
        },
        {
            title: 'Profile',
            link: '/user/',
            icon: <AccountCircleIcon /> 
        },
        {
            title: 'Settings',
            link: '/setting/',
            icon: <SettingsIcon /> 
        },
    ]
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
        <div className='flex flex-col items-end'>
            <div className='space-y-2 lg:w-[230px]' >
                <div className='rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition'>
                    <TwitterIcon className='text-white' />
                </div>
                { SidebarData.map((value, key) => {
                    return (
                        <SidebarItem
                        title={ value.title }
                        link={ value.link }
                        icon={ value.icon }
                         />
                    )
                })}
                <SidebarItem 
                title='Logout'
                link=''
                icon = { <LogoutIcon /> }
                onClick={() => ''}
                />
                <SidebarTweet />
            </div>
        </div>
    </div>
  )
}
