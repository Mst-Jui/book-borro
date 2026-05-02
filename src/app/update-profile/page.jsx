"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { FiUser, FiImage, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

const UpdateProfilePage = () => {

  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    
    const updateData = {};
    if (name) updateData.name = name;
    if (image) updateData.image = image;

    
    if (Object.keys(updateData).length === 0) {
      return toast.info("Please fill at least one field to update.");
    }

    try {
      await authClient.updateUser(updateData);
      toast.success("Profile updated successfully!");
      e.target.reset(); 
    } catch (error) {
      toast.error("Update failed!");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">

        {/* Back Button & Header */}
        <div className="mb-8">
          <Link
            href="/profile"
            className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors mb-4 text-sm font-medium"
          >
            <FiArrowLeft /> Back to Profile
          </Link>
          <h2 className="text-3xl font-bold text-gray-800">Update Profile</h2>
          <p className="text-gray-500 text-sm mt-2">Refine your digital library identity</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">

          {/* Name Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-orange-500 transition-colors">
                <FiUser size={20} />
              </div>
              <input
                type="text"
                name='name'
                placeholder="Enter your name"
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
              // ekhane 'required' remove kora hoyeche
              />
            </div>
          </div>

          {/* Image URL Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Profile Image URL</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-orange-500 transition-colors">
                <FiImage size={20} />
              </div>
              <input
                type="url"
                name='image'
                placeholder="https://example.com/image.jpg"
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
              // ekhane 'required' remove kora hoyeche
              />
            </div>
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-200 flex items-center justify-center gap-2 transform transition-all active:scale-[0.98] mt-4"
          >
            <FiCheckCircle size={20} />
            Update Information
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6 leading-relaxed">
          Your information will be updated across the <br />
          <span className="font-semibold text-orange-400">Book-Borrow</span> ecosystem.
        </p>
      </div>
    </div>
  );
};

export default UpdateProfilePage;