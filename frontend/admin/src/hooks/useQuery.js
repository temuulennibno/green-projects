import React from 'react';
import { useLocation } from 'react-router-dom';

export default function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => {
    const params = new URLSearchParams(search);
    let result = {};
    console.log(params.keys().next());
    return result;
  }, [search]);
}
