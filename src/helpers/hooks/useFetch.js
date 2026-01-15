import { useEffect, useState } from 'react';

export const useFetch = (fetchFuction, params) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const stringParams = params ? new URLSearchParams(params).toString() : '';

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFuction(params);

        setData(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFuction, stringParams]);

  return { data, isLoading, error };
};
