import Sidebar from '@/app/components/ShopSidebar'
import React from 'react'

const layout = ({ children }: { children: any; }) => {
    return (
        <div className='flex'>
            <div className='w-12 fixed'>
                <Sidebar />
            </div>
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}

export default layout