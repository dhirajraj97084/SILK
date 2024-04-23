import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Counter from '../components/Counter'
import QueriesList from '../components/QueriesList'
import { config } from "../../../constant";
import useAuth from '../../hooks/useAuth';
import { useFetchQuery } from '../../hooks/useFetchQuery';
import EnquiryList from '../components/EnquiryList';
const URL = config.url;

const AdminHome = () => {
  const {token} = useAuth();
  //const urlWithHeader = `${baseUrl}?token=${encodeURIComponent(token)}`;
    const url = `${URL}/api/getdata/getenquiries/?no=5&authTocken=${encodeURIComponent(token)}`
  const [enquiries, loading, error] = useFetchQuery(url)
  const url2 = `${URL}/api/getdata/getquery/?no=5&authTocken=${encodeURIComponent(token)}`
  const [queries, loading2, error2] = useFetchQuery(url2)
  const url3 = `${URL}/api/getdata/count/?authTocken=${encodeURIComponent(token)}`
  const [counts, loading3, error3] = useFetchQuery(url3)
  //console.log(counts)
  return (
    <>
    <div className='p-2 md:p-4'>
      <p className='text-2xl font-semibold'>Home</p>
      <div className='py-8 hidden'>
        <Counter counts={counts}/>
      </div>
      <div className='py-8'>
        <EnquiryList enquiries={enquiries}/>
      </div>
      <div className='py-8 hidden'>
        <QueriesList queries={queries}/>
      </div>
    </div>
    
    </>
  )
}

export default AdminHome