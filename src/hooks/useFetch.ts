import { useCallback, useEffect, useState } from 'react';

function useFetch<t>(func: any, args?: any) {
    const [data, setData] = useState<t>();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const getData = useCallback(async () => {
        try {
            const response = await func(args && args);
            setData(response);
            setLoading(false);
        } catch (error: any) {
            setError(error);
            setLoading(false);
        }
    }, [func, args]);
    useEffect(() => {
        getData();
    }, [getData]);

    return { data, error, loading };
}

export default useFetch;
