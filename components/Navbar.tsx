"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toogleNavbar = () => {
    setIsClick(!isClick);
  };

  const closeMobileMenu = () => {
    setIsClick(false);
  };

  return (
    <>
      <div className="md:flex bg-slate-600 p-1 mx-8 px-8 hidden fade-in-down">
        <div className="flex gap-4 text-white">
          <div className="text-sm flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Email : dewibolubinjai@gmail.com
          </div>
          <div className="text-sm flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Telp : +6282285714607
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#F875AA] to-[#95BDFF] text-slate-800 md:mb-10 shadow-md md:rounded-b-lg md:mx-8 fade-in-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex gap-2 md:gap-4 items-center">
                <img
                  src="img/logo.png"
                  alt="logo"
                  className="w-auto h-9 contrast-200 -hue-rotate-180	"
                />
                <Link
                  href={"/"}
                  className="text-xl text-slate-900 font-extrabold italic hover:scale-110 hover:duration-300 duration-300 hover:text-white"
                >
                  Dewi Bolu Binjai
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href={"/"}
                  className="hover:scale-105 hover:text-white hover:duration-300 duration-300 rounded-lg p-2"
                >
                  Home
                </Link>
                <Link
                  href={"/CaraPemesanan"}
                  className="hover:scale-105 hover:text-white hover:duration-300 duration-300 rounded-lg p-2"
                >
                  Cara pemesanan
                </Link>
                <Link
                  href={"/About"}
                  className="hover:scale-105 hover:text-white hover:duration-300 duration-300 rounded-lg p-2"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring=white"
                onClick={toogleNavbar}
              >
                {isClick ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden fade-in-down">
            <div className="gap-4 text-slate-700 bg-slate-100 m-2 rounded-md p-2">
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Email : dhimas.200180122@mhs.unimal.ac.id
              </div>
              <div className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Telp : +6282285714607
              </div>
            </div>
            <div className="p-2 pb-3 space-y-1 sm:px-3">
              <Link
                onClick={closeMobileMenu}
                href={"/"}
                className="hover:bg-slate-50 block rounded-lg p-2"
              >
                Home
              </Link>
              <Link
                onClick={closeMobileMenu}
                href={"/CaraPemesanan"}
                className="hover:bg-slate-50 block rounded-lg p-2"
              >
                Cara pemesanan
              </Link>
              <Link
                onClick={closeMobileMenu}
                href={"/About"}
                className="hover:bg-slate-50 block rounded-lg p-2"
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
