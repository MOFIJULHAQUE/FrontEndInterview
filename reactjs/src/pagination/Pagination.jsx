import React, { useState } from "react";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const renderPageNumbers = () => {
        let pageNumbers = [];

        for (let i = 1; i <= 10; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map((number) => {
            return (
                <li key={number} id={number} onClick={handleClick}>{number}</li>
            );
        });
    };

    return (
        <div>
            <ul>{renderPageNumbers()}</ul> Current Page: {currentPage}
        </div>
    );
}; export default Pagination;



