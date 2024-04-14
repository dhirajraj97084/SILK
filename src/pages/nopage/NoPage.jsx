import React from 'react'
import Layout from '../../component/layout/Layout'

function NoPage() {
  return (
    <Layout>
      <div className="containe  mx-auto">
        <div className="box h-screen flex justify-center items-center">
            <h1 className='text-xl md:text-2xl lg:text-4xl font-serif font-semibold'> 404 not found your page</h1>
        </div>

      </div>
    </Layout>
  )
}

export default NoPage
