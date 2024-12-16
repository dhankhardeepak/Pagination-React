import Pagination from "./Pagination";
import { useState } from "react";
import "./style.css";

const PaginationTest = () => {
  const itemsperPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  const lastItemIndex = currentPage * itemsperPage;
  const startItemIndex = lastItemIndex - itemsperPage;

  const currentListOfItem = dummyData.slice(startItemIndex, lastItemIndex);

  const handleChangePage = (currentPage) => {
    setCurrentPage(currentPage);
  };

  return (
    <>
      <h1>Pagination Project</h1>
      <ul>
        {currentListOfItem.map((value) => (
          <li key={value.id}>{value.name}</li>
        ))}
      </ul>
      <Pagination
        totalPages={Math.ceil(dummyData.length / itemsperPage)}
        currentPage={currentPage}
        onChangePage={handleChangePage}
      />
    </>
  );
};

export default PaginationTest;
