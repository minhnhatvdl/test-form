import { useState, useEffect } from "react";

export const useFetch = (initialUrl, initialData, setLoading, setError) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(initialData);
  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, [url, setLoading, setError]);
  return [data, setUrl];
};