import { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [data, setData] = usestate(null);
  const [error, setError] = usestate(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = response.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { data, error, loading };
};
