import React from 'react';
import CategoryFetch from './CategoryFetch';

const Category = async () => {
  const res = await fetch("http://localhost:3000/category.json", {
    cache: "no-store",
  });
  const categories = await res.json();

  return (
    <div className='flex flex-wrap sm:flex-row md:flex-col gap-2'>
      {
        categories.map(category => (
          <CategoryFetch key={category.id} category={category} />
        ))
      }
    </div>
  );
};

export default Category;