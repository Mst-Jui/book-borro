"use client"
import { UpdateUserModal } from '@/components/UpdateUserModel';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { HiOutlineLogout, HiOutlineMail, HiOutlinePencilAlt } from 'react-icons/hi';

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user
  return (
    <div>
      <Card className="max-w-[380px] mx-auto mt-10 mb-10 overflow-hidden border-0 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[24px] bg-white p-6 flex flex-col items-center">
        {/* Header Accent - Chotto ekta design touch */}
        <div className="w-20 h-1.5 bg-orange-500 rounded-full mb-6 opacity-80"></div>

        {/* Avatar Section */}
        <div className="relative p-1 border-2 border-orange-100 rounded-full mb-4">
          <Avatar className="h-24 w-24 shadow-sm">
            <Avatar.Image
              alt={user?.name}
              referrerPolicy="no-referrer"
              src={user?.image}
              className="object-cover rounded-full"
            />
            <Avatar.Fallback className="bg-orange-50 text-orange-600 font-bold text-xl">
              {user?.name?.charAt(0)}
            </Avatar.Fallback>
          </Avatar>
        </div>

        {/* User Information */}
        <div className="text-center space-y-1 mb-8">
          <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">
            {user?.name}
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <HiOutlineMail className="text-orange-400" size={18} />
            <span className="text-sm font-medium">{user?.email}</span>
          </div>
        </div>

        {/* Action Buttons Area */}
        <div className="w-full space-y-3">
          <Link href="/update-profile">
            <Button
            variant="outline"
             className="w-full rounded-md flex items-center gap-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <HiOutlinePencilAlt className="group-hover:rotate-12 transition-transform" size={20} />
              <span className="font-semibold text-[15px]">Edit Profile</span>
            </Button>
          </Link>




        </div>

        {/* Footer Decorative Line */}
        <p className="mt-6 text-[10px] uppercase tracking-widest text-gray-300 font-bold">
          Book Borro Member
        </p>
      </Card>
    </div>
  );
};

export default ProfilePage;

//  <Link href={"/update-profile"}>
//           <Button
//             size="sm"
//             variant="outline"
//             className="rounded-md flex items-center gap-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
//           >
//             Update Profile
//           </Button>
//         </Link>