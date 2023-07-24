import { useState, useEffect } from "react";
import axios from "axios";

export const useApiRequest = (url, method, payload) => {
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
  useEffect(()=>{
    const apiCall = async() => {
        try {
            const response = await axios[method](url, payload)
            setData(response.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }
    apiCall();
  },[])
  return {data, error, loading}
}
