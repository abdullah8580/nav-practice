"use client";

import React from "react";
import { useRouter } from "next/navigation";

function Services() {
  const router = useRouter();
  const serv1 = () => {
    router.push("/Services/Service1");
  };
  const serv2 = () => {
    router.push("/Services/Service2");
  };
  const serv3 = () => {
    router.push("/Services/Service3");
  };
  return (
    <div className="min-h-screen">
      <div>
        <h2 className="font-bold text-2xl">Services</h2>
        <p>
          1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
          quaerat.
        </p>
        <p>
          2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
          quaerat.
        </p>
        <p>
          3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
          quaerat.
        </p>
      </div>
      <div>
        <button
          onClick={serv1}
          className="mt-2 mb-5 mr-2 p-3 bg-gray-600 text-orange-500"
        >
          Service 1
        </button>
        <button
          onClick={serv2}
          className="mt-2 mb-5 mr-2 p-3 bg-gray-600 text-orange-500"
        >
          Service 2
        </button>
        <button
          onClick={serv3}
          className="mt-2 mb-5 mr-2 p-3 bg-gray-600 text-orange-500"
        >
          Service 3
        </button>
      </div>
    </div>
  );
}

export default Services;
