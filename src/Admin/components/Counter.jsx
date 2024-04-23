import React from 'react'

const Counter = (params) => {
    const {enquiriesCount, queryCount,} =  params.counts
  return (
    <div>
        <p className='text-2xl font-semibold'>Numbers</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 px-4'>
            <div className='bg-gray-100 rounded-xl p-4 flex flex-row sm:flex-col justify-center items-center cursor-pointer hover:shadow-lg'>
                <p className='text-2xl font-semibold'>{enquiriesCount?enquiriesCount:0}</p>
                <p className='text-xl font-semibold pl-4 md:pt-4'>Room Enquiries</p>
            </div>
            <div className='bg-gray-100 rounded-xl p-4 flex flex-row sm:flex-col justify-center items-center cursor-pointer hover:shadow-lg'>
                <p className='text-2xl font-semibold'>{queryCount?queryCount:0}</p>
                <p className='text-xl font-semibold pl-4 md:pt-4'>Queries</p>
            </div>
        </div>
    </div>
  )
}

export default Counter