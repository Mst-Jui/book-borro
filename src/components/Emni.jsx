
"use clien"
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Category = async () => {
  const res = await fetch("http://localhost:3000/category.json");
  const categories = await res.json();

  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  categories.map(category => { 
    const value = category.name.toLowerCase();
    const isActive = activeCategory === value;

    return (
      <div>
        <div className='flex flex-wrap sm:flex-row md:flex-col gap-2'>
          {
            categories.map(category => <Link
              href={`?category=${category.name.toLowerCase()}`}
              key={category.id}
              className='flex-1 sm:flex-none'>
              <Button className={`w-full justify-center   border border-orange-500
            text-orange-500
             bg-transparent
            hover:bg-orange-500
            hover:text-white
             transition-colors ${isActive
                  ? "bg-orange-500 text-white"
                  : "bg-transparent text-orange-500"
                }`}
                variant="outline">
                {category.name}
              </Button>
            </Link>)
          }
        </div>
      </div>
    );
  };

  export default Category;