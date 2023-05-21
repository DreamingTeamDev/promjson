import React, { useState } from "react";
import products from "../data/products.json";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div
      style={{
        width: "80%",
        padding: 10,
        margin: "0 auto",
        // outline: "1px solid tomato",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap ",
      }}
    >
      {currentProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
