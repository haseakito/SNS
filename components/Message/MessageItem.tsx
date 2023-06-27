import React, { ReactElement} from 'react'

// TODO: Replace icon with profile image
// TODO: Add go to a chat room on click event
type MessageItemProps = {
    name: string,
    icon: ReactElement,
    message: string,
    onClick ?: () => void
}

export function MessageItem(props: MessageItemProps) {

    const { name, icon, message, onClick } = props
  return (
    <div className='p-2'>
        <div className='absolute p-4'>{ icon }</div>
        <div className='flex justify-between w-full rounded-full p-4 bg-white hover:bg-gray-200 cursor-pointer'>
            <p className='pl-10 font-semibold'>{ name }</p>
            <p className='pr-8'>{ message }</p>
        </div>
    </div>
  )
}
