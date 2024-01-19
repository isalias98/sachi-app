import ShirtList from '@/app/components/ShirtList'
import PantList from '@/app/components/PantList'
import CapList from '@/app/components/CapList'
import React from 'react'

function ShopPage() {
    return (
        <div className='pl-8'><ShirtList />
            <PantList />
            <CapList />
        </div>
    )
}

export default ShopPage