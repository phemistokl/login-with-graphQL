import React, { useState } from "react";
import { useFetch } from "./useFetch"
import { useMeasure } from "./useMeasure"
import { useCountRenders } from "./useCountRenders";

export const Hello = React.memo(({ increment }) => {

    const [count, setCount] = useState(0);

    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

    const [divRef, width] = useMeasure(data);

    useCountRenders();
    return (
        <div style={{ display: 'flex' }}>
            <div ref={divRef}>{loading ? 'loading...' : data}</div>
            {JSON.stringify(width, null, 2)}
            <button onClick={() => setCount(c => c + 1)}>Click me god</button>
            <button onClick={() => increment(5)}>Click me god2</button>
        </div>
    )});