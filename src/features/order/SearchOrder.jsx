import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <Form onSubmit={handleSubmit}>
      <input
        className=" focus-ring w-28  rounded-full bg-yellow-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50  sm:w-64 sm:focus:w-72"
        type="text"
        placeholder="Search food #"
        onChange={(e) => setQuery(e.target.value)}
      />
    </Form>
  );
}

export default SearchOrder;
