import { useEffect, useState } from "react";
/**
 * Fait une requette pour recuperer des donnees
 * @param {string} url
 * @param {FetchEventInit} options
 */
export function useFetch(url, options = {}) {
    const [data, setData] = useState(null)
    const [erros, setErrors] = useState(null)

    useEffect(() => {
        fetch(url, {
            ...options,
            headers: {
                'Accept': 'application/json; charset=UTF-8',
                ...options.headers
            }
        }).then(r => r.json()).then(data => {
            setData(data)
        }).catch((e) => {
            setErrors(e)
        })
    }, [])

    return {data, erros}
}