import React, { useEffect, useRef, useCallback, useState } from "react";
import axios from "axios";

const ListOne = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  // Fetch data effect
  useEffect(() => {
    const fetchData = async () => {
      if (loading) return;
      setLoading(true);
      try {
        const apiData = await axios.get(
          `https://dummyjson.com/products?limit=10&skip=${skip}`
        );
        const newProducts = apiData.data.products;

        if (newProducts.length === 0) {
          setHasMore(false);
        } else {
          setData((prevData) => [...prevData, ...newProducts]);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [skip]);

  // Setup the last element ref callback
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setSkip((prevSkip) => prevSkip + 10);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="list-one">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            // Apply ref only to the last element
            const isLastElement = index === data.length - 1;
            return (
              <tr
                className="list-row"
                key={item.id}
                ref={isLastElement ? lastElementRef : null}
              >
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {loading && <p>Loading more items...</p>}
      {!hasMore && <p>No more items to load</p>}
    </div>
  );
};

export default ListOne;
