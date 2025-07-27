import React from "react";

function Paginition() {
  return (
    <div className="flex justify-center mt-6 space-x-2">
      {[1, 2, 3, 4, 5].map((page,index) => (
        <button
          key={index}
          className={`px-4 py-2 border rounded-lg text-sm font-medium transition duration-200`}
        >{page}
        </button>
      ))}
    </div>
  );
}

export default Paginition;
