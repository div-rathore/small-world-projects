import React from "react";

const Pagination = ({ pageNo, setPageNo }) => {
  const prevThreeArr = Array.from(
    { length: 3 },
    (_, index) => pageNo - 1 - index
  )
    .filter((value) => value > 0)
    .reverse();
  const nextFourArr = Array.from({ length: 4 }, (_, index) => pageNo + index);
  const paginationArr = [...prevThreeArr, ...nextFourArr];

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePrevious = () => {
    setPageNo(pageNo - 1);
  };
  return (
    <div className="pagination-container">
      {pageNo > 1 ? (
        <div className="page-btn" onClick={handlePrevious}>
          {"<"}
        </div>
      ) : (
        ""
      )}
      {paginationArr.map((value, index) => {
        return (
          <div key={index}
            onClick={() => setPageNo(value)}
            className={value == pageNo ? "prev-btn active" : "page-btn"}
          >
            {value}
          </div>
        );
      })}

      <div className="page-btn" onClick={handleNext}>
        {">"}
      </div>
    </div>
  );
};

export default Pagination;
