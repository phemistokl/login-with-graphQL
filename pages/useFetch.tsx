import { useEffect, useState } from "react";

export const useFetch = (url: any) => {
    // const isCurrent = useRef(true);
    const [state, setState] = useState({ data: null, loading: true })
    useEffect(() => {
        setState({ data: null, loading: true });
        fetch(url)
        .then(res => res.text())
        .then(res => {
                   // @ts-ignore
                    setState({ data: res, loading: false }); 
        });
    }, [url])

    return state;
}