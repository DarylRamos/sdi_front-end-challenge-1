import { useState } from "react";

function Pagination({ newsPerPage, totalNews, paginate }: any) {
  const pageNumbers = [];

  //setting up the number of pages
  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  //highlights the current page
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (number: any) => {
    setActivePage(number);
  };

  return (
    <div>
      <nav>
        <ul className="flex justify-center">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`my-4 mx-1 border border-gray-200 ${
                activePage === number ? "text-white bg-[#EB0A1E]" : ""
              }`}
            >
              <button
                className="py-2 px-4"
                onClick={() => {
                  handlePageClick(number);
                  paginate(number);
                }}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
