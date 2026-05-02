"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import { BiLogOut } from 'react-icons/bi';

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user

  const handleSignout = async () => {
    await authClient.signOut();
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow">
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/all-books"}>All Books</NavLink>
            </li>
            <li>
              <NavLink href={"/profile"}>My Profile</NavLink>
            </li>
          </ul>
        </div>
        {/* Logo  */}
        <Link href={"/"}>
          <Image
            src={"/image/logo.png"}
            alt='Book Borro logo'
            width={80}
            height={50} />
        </Link>
        {/* <a className="btn btn-ghost text-xl">daisyUIy</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-books"}>All Books</NavLink>
          </li>
          <li>
            <NavLink href={"/profile"}>My Profile</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">

        {/* Login  */}
        <div>
          {!user && <Link href={"/login"}>
            <button className="btn bg-orange-600 text-white">Login</button>
          </Link>}

          {user &&
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt={user?.name}
                  referrerPolicy="no-referrer"
                  src={user?.image} />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button
                onClick={handleSignout}
                size="sm"
                variant="outline"
                className="rounded-md flex items-center gap-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                <BiLogOut size={16} />
                <span>LogOut</span>
              </Button>
            </div>
          }
        </div>

      </div>
    </div>
  );
};

export default Navbar;