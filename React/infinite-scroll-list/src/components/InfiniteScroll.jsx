import React, { useEffect } from "react";
import axios from "axios";
const InfiniteScroll = () => {
  const [data, setData] = React.useState([]);
  const [skip, setSkip] = React.useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await axios.get(
          "https://dummyjson.com/products?limit=10&skip=0"
        );
        console.log(apiData);
      } catch (e) {}
    };
  }, []);

  return <div></div>;
};

export default InfiniteScroll;
