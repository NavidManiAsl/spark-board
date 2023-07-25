import { useState, useEffect } from "react";
import axios from "axios";

export const useApiRequest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiCall = async (url, method, formData) => {
    setLoading(true);
    try {
      const response = await axios[method](url, formData);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, apiCall };
};
