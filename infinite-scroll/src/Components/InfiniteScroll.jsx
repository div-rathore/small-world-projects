import React, { useEffect, useState } from "react";
import Post from "./Post";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [pageno, setPageno] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${pageno}&limit=3`
        );
        const arr = await response.json();
        // console.log(data);
        setData((prev)=>[...prev, ...arr])
        console.log(data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [pageno]);
  return <Post data={data} setPageno={setPageno} />;
};

export default InfiniteScroll;
