import React,{useState,useEffect} from 'react'

function useFetchProduts(url) {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        const fetchData= async()=>{
            setLoading(true)
            try {
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error("network response was not ok")
                }
                const reslut = await response.json()
                setData(reslut)
            } catch (error) {
                setError(error.message)
                
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    },[url])
  return {data,loading,error}
   
  
}

export default useFetchProduts