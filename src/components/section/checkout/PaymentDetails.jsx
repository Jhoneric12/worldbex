import React from "react";
import { Card } from "antd";

const PaymentDetails = () => {
  return (
    <div className="flex flex-col justify-center text-gray-800">
      <Card>
        <div className="flex flex-col justify-center items-center pb-4 text-gray-800 ">
          <h1 className="text-[#F4811F] text-2xl font-semibold">PAYMENT</h1>
          <hr className="w-1/2 border-[#F4811F] border mt-2" />
        </div>

        <div className="flex flex-col px-4 text-gray-800">
          <div className="flex flex-col justify-between py-2">
            <div className="font-bold text-base">NAME</div>
            <div className="text-gray-900">CHRISTOPHER DUNGARAN</div>
          </div>
          <div className="flex flex-col justify-between py-2">
            <div className="font-bold text-base">EMAIL</div>
            <div className="text-gray-900">chrismhoi17@gmail.com</div>
          </div>
          <div className="flex flex-col justify-between py-2">
            <div className="font-bold text-base">MOBILE</div>
            <div className="text-gray-900">639158007411</div>
          </div>
          <hr />
        </div>

        <div className="mt-4 px-4 text-gray-800">
          <div className="flex justify-between font-bold text-xs lg:text-base ">
            <h1 className="w-1/2">CHECKOUT SUMMARY</h1>
            <h3 className="w-1/2 text-right">AMOUNT</h3>
          </div>

          <div className="flex justify-between">
            <h1 className="w-1/2">MIAS 2025 X 1</h1>
            <h3 className="w-1/2 text-right">PHP 150.00</h3>
          </div>

          <div className="flex justify-between">
            <h1 className="w-1/2">Convenience Fee</h1>
            <h3 className="w-1/2 text-right">PHP 20.00</h3>
          </div>
          <hr className="my-3" />
        </div>

        <div className="flex justify-between px-4 font-bold text-gray-800">
          <h1 className="w-1/2">TOTAL</h1>
          <h3 className="w-1/2 text-right">PHP 170.00</h3>
        </div>
      </Card>
    </div>
  );
};

export default PaymentDetails;
