"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearch = () => {
    
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("search", search.toLowerCase());
    } else {
      params.delete("search");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="mt-5 flex items-center justify-center">
      <div className="join">
        <input
          type="text"
          placeholder="Search your book name"
          className="input join-item border border-gray-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch} className="btn bg-orange-500 text-white join-item">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;