const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center mt-6 text-white">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`mx-1 px-3 py-1 rounded ${
            index + 1 === currentPage
              ? "bg-white text-black"
              : "bg-gray-700 text-white"
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
