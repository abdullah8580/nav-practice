"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  const handleForward = () => {
    router.forward();
  };
  return (
    <div>
      <div className="flex bg-gray-600 justify-between p-5">
        <div className="text-white text-2xl font-bold hover:cursor-pointer">
          <Link href="/">
            <h1>Nav-Practice</h1>
          </Link>
        </div>
        <div>
          <nav>
            <ul className="flex gap-5 text-white">
              <li className="hover:font-bold">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:font-bold">
                <Link href="/About">About Us</Link>
              </li>
              <li className="hover:font-bold">
                <Link href="/Services">Services</Link>
              </li>
              <li className="hover:font-bold">
                <Link href="/Contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <button
            className="mt-2 mb-5 ml-2 p-3 bg-gray-600 text-green-500"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
        <div>
          <button
            className="mt-2 mb-5 mr-2 p-3 bg-gray-600 text-green-500"
            onClick={handleForward}
          >
            Forward
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
