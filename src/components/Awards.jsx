import React from "react";
import { FaRegSmile } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { LuTrophy } from "react-icons/lu";

const Awards = () => {
  return (
    <div className="md:flex mx-auto justify-around">
      <div className="items-center justify-center">
        <div className="border-2 border-orange-400 bg-orange-100 rounded-full max-w-min p-3 mb-3 items-center justify-center mx-auto">
          <HiOutlineHome className="text-4xl text-orange-500 " />
        </div>
        <h4 className="text-center text-lg font-bold">1,900+ Vendor</h4>
        <p className="text-gray-500">
          1,900 Vendors are working with us around the US
        </p>
      </div>

      <div className="items-center justify-center">
        <div className="border-2 border-blue-400 bg-blue-100 rounded-full max-w-min p-3 mb-3 items-center justify-center mx-auto">
          <FaRegSmile className="text-4xl text-blue-500 " />
        </div>
        <h4 className="text-center text-lg font-bold">9,102+ Customers</h4>
        <p className="text-gray-500">
          9,102+ Customers are making retained purchases every now & then
        </p>
      </div>

      <div className="items-center justify-center">
        <div className="border-2 border-green-400 bg-green-100 rounded-full max-w-min p-3 mb-3 items-center justify-center mx-auto">
          <LuTrophy className="text-4xl text-green-500 " />
        </div>
        <h4 className="text-center text-lg font-bold">12 Awards</h4>
        <p className="text-gray-500">
          We won 12 awards for excellency in customer service
        </p>
      </div>
    </div>
  );
};

export default Awards;
