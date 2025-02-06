import React, { useEffect, useRef, useState } from "react";

const STATE = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

const TypeAhead = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState(STATE.LOADING);
  const cache = useRef({});
  console.log(cache);
  
  useEffect(() => {
    const  abortController = new AbortController();
    const fetchData = async () => {
     console.log(abortController);
     
        const {signal} = abortController
      try {
        if(cache.current[query]){
            setResult(Cache.current[query])
            setStatus(STATE.SUCCESS)
            return;
        }
        setStatus(STATE.LOADING);
        console.log("API CALL");

        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=10`,
          {signal}
        );
        const data = await res.json();
        // console.log(data);
        cache.current[query]= data.products;
        setStatus(STATE.SUCCESS);
        setResult(data.products);


      } catch (err) {
        if(err.name !== 'AbortError'){
            setStatus(STATE.ERROR);
        }
        // console.log(err);

      }
    };

    const timerid = setTimeout(fetchData, 1000);

    return () => {
      clearTimeout(timerid);
      abortController.abort()
    };
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {status === STATE.LOADING && <div>Loading...</div>}
      {status === STATE.ERROR && <div>Error occured</div>}
      {status === STATE.SUCCESS && (
        <ul>
          {result.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default TypeAhead;
