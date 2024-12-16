const Pagination = ({ totalPages = 10, currentPage, onChangePage }) => {
  console.log(totalPages);
  function setPagination() {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }

  console.log(setPagination());
  return (
    <div className="pagination">
      <button
        className="prevBtn"
        disabled={currentPage == 1}
        onClick={() => onChangePage(currentPage - 1)}
      >
        Prev
      </button>
      {setPagination().map((v) => (
        <button
          key={v}
          onClick={() => onChangePage(v)}
          className={currentPage == v ? "active" : ""}
        >
          {v}
        </button>
      ))}
      <button
        className="nextBtn"
        disabled={currentPage == totalPages}
        onClick={() => onChangePage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
