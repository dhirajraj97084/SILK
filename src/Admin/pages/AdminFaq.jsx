import React from 'react'
import QueriesList from '../components/QueriesList'
import { config } from "../../../constant";
import useAuth from '../../hooks/useAuth';
import { useFetchQuery } from '../../hooks/useFetchQuery';
const URL = config.url;

const AdminFaq = () => {
  const {token} = useAuth();
  const url = `${URL}/api/getdata/getquery/?authTocken=${encodeURIComponent(token)}`
  const [queries, loading, error] = useFetchQuery(url)
  function formatDate(date) {
    var newdate = new Date(date);
    var day = newdate.getDate();
    var month = newdate.getMonth()+1;
    var year = newdate.getFullYear()
    var newdate = day + "-" + month + "-" + year;
    return newdate
  }
  
  return (
    <div className='p-2 md:p-4'>
      {
        loading?<p className='tetx-lg font-medium text-center'>Loading...</p>:
        <QueriesList queries={queries}/>
      }
    </div>
  )
}

export default AdminFaq