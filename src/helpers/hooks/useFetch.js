import { useEffect, useState } from 'react';

export const useFetch = (fetchFunc, params) => {
  const [data, setData] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const stringParams = params ? new URLSearchParams(params).toString() : '';
  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);
        const resp = await fetchFunc(params);
        setData(resp);
      } catch (error) {
        console.log('error: ', error.message);

        setError(error);
      } finally {
        setIsloading(false);
      }
    })();
  }, [fetchFunc, stringParams]);

  return { data, isloading, error };
};
