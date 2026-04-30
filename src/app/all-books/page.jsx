
import BookCard from '@/components/BookCard';
import Category from '@/components/Category';
import Search from '@/components/Search';
import React from 'react';

const AllBooksPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  const res = await fetch("/data.json");
  const books = await res.json();



  const filteredBooks =
    !category || category === "all"
      ? books
      : books.filter(
        book =>
          book.category?.toLowerCase() === category?.toLowerCase()
      );


  return (
    <div>
      {/* search section  */}

      <Search />

      <div>

      </div>
      <div className='my-10 md:my-15 lg:my-20 max-w-7xl mx-auto px-4'>

        {/* Layout Wrapper */}
        <div className="flex flex-col md:flex-row gap-6 items-start">

          {/* Category section */}
          <aside className="w-full md:w-1/4">
            <div className="w-full sm:w-auto text-center md:text-left">
              <Category />
            </div>
          </aside>

          {/* Books section */}
          <section className="w-full md:w-3/4 order-2">

            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-start text-gray-900 mb-10 tracking-wide'>
              All Books
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {
                filteredBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))
              }
            </div>

          </section>

        </div>

      </div>
    </div>
  );
};

export default AllBooksPage;