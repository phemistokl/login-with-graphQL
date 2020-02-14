import React, { useRef, useState, useLayoutEffect, useCallback } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { withRouter } from "next/router"
import { useForm } from "./useForm"
// import { useFetch } from "./useFetch"
import { Hello } from "./hello2"

const AboutPage = ({ router }: any) => {

  const [values, handleChange] = useForm({ email: "", password: ""});

  const [showHello, setShowHello] = useState(true);

  const [count, setCount] = useState(0);

  // const { data, loading } = useFetch('http://numbersapi.com/30/trivia');

  const inputRef = useRef();

  const {
    query: { tab }
  } = router
  
  useLayoutEffect(() => {
    // @ts-ignore
    console.log(inputRef.current.getBoundingClientRect());
  }, []);

  const increment = useCallback((n) => {
    setCount(c => c + n);
  }, [setCount])

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      {/* {loading ? 'loading...' : data} */}
      {/* {console.log('props', router)} */}
      <p>This is the about page</p>
      <p>
        <Link href={{ pathname: "/about", query: { tab: "1" } }}>
          <a>Tab 1</a>
        </Link>
        <Link href={{ pathname: "/about", query: { tab: "2" } }}>
            <a>Tab 2</a>
        </Link>
        {isTabOne && <React.Fragment>This is tab one content</React.Fragment>}
        {isTabTwo && <React.Fragment>This is tab two content</React.Fragment>}
        <Link href="/">
          <a>Go home</a>
        </Link>
        // @ts-ignore
        {showHello && <Hello increment={increment} />}
        count: {count}
      <p>
        // @ts-ignore
        <input ref={inputRef} type="text" name="email" value={values.email} onChange={handleChange} />
        <input type="password" name="password" value={values.password} onChange={handleChange} />
        <button onClick={() => console.log(inputRef.current)}>Click me</button>
      </p>
      <p>
        <button onClick={() => setShowHello(!showHello)}>show hello</button>
      </p>
      </p>
    </Layout>
)};

export default withRouter(AboutPage)
