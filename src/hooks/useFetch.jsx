import { useEffect, useState } from "react";

/**
 * Fait une requete pour recuperer des donnees
 * @param {string} url
 * @param {FetchEventInit} options
 */
export function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);

    const fetchData = () => {
        fetch(url, {
            ...options,
            headers: {
                'Accept': 'application/json; charset=UTF-8',
                ...options.headers
            }
        })
        .then(r => r.json())
        .then(data => {
            setData(data);
        })
        .catch((e) => {
            setErrors(e);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, errors, fetchData };
}