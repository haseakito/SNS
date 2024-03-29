import Followbar from './Followbar'
import { Searchbar } from './Searchbar'
import { Trendbar } from './Trendbar'

export function SidebarRight() {
  return (
    <div className='grid grid-row-4 h-full'>
        <Searchbar />
        <div className='row-span-2'>
            <Trendbar />
        </div>
        <Followbar />
    </div>
  )
}
