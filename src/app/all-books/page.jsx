import BookCard from '@/components/BookCard';
import Category from '@/components/Category';
import Search from '@/components/Search';
import React from 'react';

const AllBooksPage = async ({ searchParams }) => {

  const params = await searchParams;
  const category = params?.category;
  const search = params?.search;


  const res = await fetch("https://book-borro.vercel.app/data.json", {
    cache: "no-store",
  });
  const books = await res.json();

  const filteredBooks = books.filter((book) => {
    const matchCategory =
      !category || category === "all"
        ? true
        : book.category?.toLowerCase() === category.toLowerCase();

    const matchSearch =
      !search
        ? true
        : book.title?.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div>
      <Search />
      <div className='my-10 md:my-15 lg:my-20 max-w-7xl mx-auto px-4'>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <aside className="w-full md:w-1/4">
            <Category />
          </aside>

          <section className="w-full md:w-3/4">
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10'>
              All Books
            </h2>


            {filteredBooks.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (

              <div className="text-center py-20 border-2 border-dashed rounded-xl">
                <h3 className="text-2xl font-bold text-gray-500">Not Found!</h3>
                <p>No books found matching your search.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;