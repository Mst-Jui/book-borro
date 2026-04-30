"use client";

import React from 'react';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const CategoryFetch = ({ category }) => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  //  SAFETY CHECK
  if (!category || !category.name) return null;

  const value = category.name.toLowerCase();
  const isActive = activeCategory === value;

  return (
    <Link href={`?category=${value}`} className="flex-1 sm:flex-none">
      <Button
        className={`w-full justify-center border transition-colors
    ${isActive
            ? "bg-orange-500 text-white border-orange-500"
            : "bg-transparent text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
          }
  `}
      >
        {category.name}
      </Button>
    </Link>
  );
};

export default CategoryFetch;