import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

type NoticeModalProps = {
    setNoticeOpen: (noticeOpen: boolean) => void,
    onAgree: () => void,
    onDisagree: () => void
}

export function NoticeModal(props: NoticeModalProps) {

    const { setNoticeOpen, onAgree, onDisagree } = props

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-black/50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'>
        <div className='fixed top-1/3 left-1/2 bg-white -translate-x-2/4 -translate-y-2/4 z-50'>
            <div className='relative rounded-lg shadow dark:bg-gray-700'>
                <div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                        Terms and Conditions
                    </h3>
                    <button className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                    onClick={() => setNoticeOpen(false)}>
                        <CloseIcon />
                    </button>
                </div>
                <div className='p-6 space-y-6'>
                    <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                        The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                </div>
                <div className='flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    onClick={onAgree}>
                        Agree
                    </button>
                    <button className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
                    onClick={onDisagree}>
                        Disagree
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
