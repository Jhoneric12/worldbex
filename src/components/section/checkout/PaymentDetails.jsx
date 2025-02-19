import React from "react";
import { Card, Table, Button } from "antd";
import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import Maya from "../../../assets/images/logo/maya.png";
import Dragonpay from "../../../assets/images/logo/dragonpay.png";

const PaymentDetails = () => {
  const dataSource = [
    {
      key: "1",
      name: "MIAS 2025 X 1",
      amount: "PHP 150.00",
    },
    {
      key: "2",
      name: "Convenience Fee",
      amount: "PHP 20.00",
    },
  ];

  const columns = [
    {
      title: "CHECKOUT SUMMARY",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <span className="font-medium text-gray-800">{text}</span>
      ),
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      key: "amount",
      align: "right",
      render: (text) => (
        <span className="font-medium text-gray-800">{text}</span>
      ),
    },
  ];
  return (
    <div className="flex flex-col justify-center text-gray-800">
      <Card>
        <div className="bg-gradient-to-r from-[#F4811F] to-orange-300 text-white text-center py-3 rounded-t-lg">
          <h1 className="text-2xl font-bold tracking-wide">PAYMENT DETAILS</h1>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center gap-3 ">
            <p className="text-gray-500 text-sm">NAME</p>
            <p className="font-semibold">Christopher Dungaran</p>
          </div>

          <div className="flex items-center gap-3 ">
            <p className="text-gray-500 text-sm">E-MAIL</p>
            <p className="font-semibold">chrismhoi17@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-gray-500 text-sm">MOBILE NO</p>
            <p className="font-semibold ">639158007411</p>
          </div>
        </div>

        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          bordered
          className="w-full border border-gray-300 rounded-lg"
        />

        <div className="flex justify-between px-4 font-bold text-gray-800 mt-3">
          <h1 className="w-1/2">TOTAL</h1>
          <h3 className="w-1/2 text-right">PHP 170.00</h3>
        </div>
      </Card>

      <div className="text-center pb-2 mt-6">
        <h1 className="text-lg font-semibold text-gray-800">Payment Options</h1>
      </div>

      <hr className="border-gray-200 mx-28" />

      <p className="text-center text-gray-600 my-4">
        Please select your preferred payment method to complete the transaction.
      </p>

      <div className="flex items-center flex-row gap-4 justify-center px-4">
        <button className="flex items-center justify-center h-20 w-1/2 border px-4 border-gray-400 rounded hover:border-[#F4811F] hover:bg-orange-100 duration-300">
          <img
            src={Dragonpay}
            alt="DragonPay"
            className="max-h-20 max-w-full"
          />
        </button>
        <button className=" flex items-center justify-center h-20 w-1/2 border px-8 border-gray-400 rounded hover:border-[#F4811F] hover:bg-orange-100 duration-300">
          <img src={Maya} alt="DragonPay" className="max-h-10 w-auto" />
        </button>
        {/* <Button
          size="large"
          className="w-44 h-16 flex items-center justify-center border border-gray-300 rounded-md shadow-sm hover:shadow-md transition duration-200"
        >
          <img src={Dragonpay} alt="DragonPay" className="h-10 w-auto" />
        </Button> */}

        {/* <Button
          size="large"
          className="w-44 h-16 flex items-center justify-center border border-gray-300 rounded-md shadow-sm hover:shadow-md transition duration-200"
        >
          <img src={Maya} alt="Maya" className="h-10 w-auto" />
        </Button> */}
      </div>
    </div>
  );
};

export default PaymentDetails;
