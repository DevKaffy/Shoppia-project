import React, { useState } from "react";
import NavigationButtons from "./NavigationButtons";


const ProductListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Replace with the actual total number of pages
  const handlePreviousPage = () => {
    // Logic to navigate to the previous page
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    // Logic to navigate to the next page
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  // Function to fetch products for the current page
  const fetchProducts = () => {
    // Fetch logic here based on the currentPage state
    // Example: Fetch products for currentPage from an API
  };

  // Call fetchProducts whenever currentPage changes
  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  return (
    <div>
      {/* Product list */}
      {/* ... */}
      <NavigationButtons
        onPrevious={handlePreviousPage}
        onNext={handleNextPage}
      />
    </div>
  );
};

export default ProductListPage;
