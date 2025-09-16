import { useState } from "react";


const useFetch = (cb) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setErrors(null);
    try {
      const response = await cb(...args);
      setData(response);
      return response; 
    } catch (error) {
      setErrors(error);
      
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, errors, setData, setLoading, setErrors, fn };
};

export default useFetch;