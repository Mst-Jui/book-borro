"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { FaUnlockAlt } from "react-icons/fa";

const BookBorrowBtn = ({ book }) => {
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleBorrow = () => {
    // not logged in
    if (!user) {
      toast.error("Please login to borrow this book!");
      router.push("/login");
      return;
    }

    // no stock
    if (book.available_quantity === 0) {
      toast.error("No copies available!");
      return;
    }

    // success
    toast.success("Book borrowed successfully!");
  };

  return (
    <div className="pt-2 md:pt-4">
      <button
        onClick={handleBorrow}
        disabled={book.available_quantity === 0}
        className={`w-full md:w-auto px-8 md:px-12 py-3 md:py-4 font-bold rounded-xl md:rounded-2xl transition-all duration-300 shadow-lg md:shadow-xl flex items-center justify-center gap-2
                     ${book.available_quantity > 0
            ? "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white active:scale-95"
            : "bg-gray-200 text-gray-500 cursor-not-allowed border-none shadow-none"
          }`}
      >
        <FaUnlockAlt />
        {book.available_quantity > 0 ? "Borrow This Book" : "Out of Stock"}
      </button>
    </div>
  );
};

export default BookBorrowBtn;