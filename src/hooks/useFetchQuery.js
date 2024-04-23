import { useState, useEffect } from "react";
import axios from "axios";

function useFetchQuery(url){

    const [data, setData] = useState([]);
    const [error, setError]= useState(false);
    const [loading, setLoading]= useState(false);

    useEffect(() => {
        ;(async ()=>{
          try {
            setError(false);
            setLoading(true);
            const responce = await axios.get(url);
            setData(responce.data)
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
        })()
      }, []);
      return [
        data,
        loading,
        error
      ];
};

export { useFetchQuery };