import { useRef, useState, useLayoutEffect } from "react";

export const useMeasure = (data: any) => {
    const myRef = useRef();

    const [rect, setRect] = useState({});

    useLayoutEffect(() => {
        // @ts-ignore
        setRect(myRef.current.getBoundingClientRect());
    }, [data]);

    return [myRef, rect];

}