import React, { useState, useEffect } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { MessageItem } from './MessageItem'


export function Message() {

    // Array state handling conversation partners
    const [ partners, setPartners ] = useState([])

    // TODO: Fetch the users and store it
    useEffect(() => {

    }, [])

    // TODO: Replace the MessageData with data fetched with useEffect
    const MessageData = [
        {
            name: 'bryan',
            icon: <AccountCircleIcon />,
            message: 'hello'
        },
        {
            name: 'john',
            icon: <AccountCircleIcon />,
            message: 'hi'
        },
        {
            name: 'frank',
            icon: <AccountCircleIcon />,
            message: 'hello'
        }
    ]

  return (
    <div className='h-auto '>
        { MessageData.map((value, key) => {
            return (
                <MessageItem
                    key={ key }
                    name={ value.name }
                    icon={ value.icon }
                    message={ value.message }
                />
            )
        })}
    </div>
  )
}
