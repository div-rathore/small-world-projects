import React, { useEffect } from "react";

const Post = ({ data, setPageno }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        if (param[0].isIntersecting) {
          observer.unobserve(lastImage);
          setPageno((pageno) => pageno + 1);
        }
      },
      { threshold: 0.5 }
    );
    const lastImage = document.querySelector(".image-post:last-child");
    if (!lastImage) return;
    observer.observe(lastImage);

    return(()=>{
        if(lastImage){
            observer.unobserve(lastImage)
            
        }
        observer.disconnect()
    })
  }, [data]);
  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <img className="image-post" key={index} src={item.download_url}></img>
        );
      })}
    </div>
  );
};

export default Post;
