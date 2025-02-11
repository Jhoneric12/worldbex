import Navbar from "../../components/navbar/Navbar";
import { Button, Checkbox, Form, Input, Radio } from "antd";
import { NavLink } from "react-router";
import Banner from "../../assets/images/icon/banner.png";
import BannerLogo from "../../assets/images/logo/bannerlogo.png";
import DecorationBottom from "../../assets/images/icon/decoration-bottom-hero.png";
import { organizers } from "../../data/Organizer";
import DecorationTop from "../../assets/images/icon/decoration-top-auth.png";
import { useState } from "react";

const Registration = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex relative">
        <div
          className="hidden h-screen lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-[40%] bg-cover bg-center fixed left-0 top-0"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <div>
            <img src={BannerLogo} alt="Banner Logo" className="lg:w-72 xl:w-96" />
          </div>
          <div className="text-primary-color absolute bottom-10 text-center">
            <div className="flex flex-col gap-1 text-sm font-medium">
              <span>THE LEADING EXHIBITION AND EVENTS</span>
              <span>MANAGEMENT COMPANY IN THE PHILIPPINES</span>
              <span>WITH OVER 25 YEARS OF EXCELLENCE</span>
            </div>
          </div>
        </div>

        <div className="lg:relative py-10 flex flex-col gap-7 px-4 md:w-full md:px-30 lg:px-20 xl:px-10 lg:ml-[40%] lg:w-[60%] overflow-y-auto items-center justify-center min-h-screen">
          <img
            src={DecorationBottom}
            alt=""
            className="hidden lg:block fixed bottom-0 right-0 w-20 h-40 -z-10"
          />
          <img
            src={DecorationTop}
            alt=""
            className="hidden lg:block absolute top-0 left-0 h-20 z-50"
          />
          <div className="mt-10 lg:mt-20 xl:mt-20 md:mt-20 self-start">
            <h1 className="font-bold text-3xl text-black mb-3 lg:hidden">Let's sign you up.</h1>
            <h1 className="text-primary-color font-medium text-lg max-w-[25rem] lg:text-4xl lg:max-w-full lg:leading-12">
              CREATE YOUR WORLDBEX SERVICES INTERNATIONAL ACCOUNT
            </h1>
          </div>
          <hr className="border border-gray-100 w-full" />
          <div className="w-full">
            <Form name="basic" autoComplete="off">
              <div className="grid xl:grid-cols-2 xl:gap-4">
                <Form.Item
                  name="firstname"
                  rules={[{ required: true, message: "Please input your first name!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">First Name</label>
                    <Input size="large" />
                  </div>
                </Form.Item>
                <Form.Item name="middle_name">
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">Middle Name</label>
                    <Input size="large" />
                  </div>
                </Form.Item>
                <Form.Item
                  name="lastname"
                  rules={[{ required: true, message: "Please input your last name!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">Last Name</label>
                    <Input size="large" />
                  </div>
                </Form.Item>
                <Form.Item
                  name="mobile_number"
                  rules={[{ required: true, message: "Please input your mobile number!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">Mobile Number</label>
                    <Input size="large" />
                  </div>
                </Form.Item>
                <Form.Item
                  name="email_address"
                  rules={[{ required: true, message: "Please input your email address!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">Email Address</label>
                    <Input size="large" />
                  </div>
                </Form.Item>
                <Form.Item
                  name="company"
                  rules={[{ required: true, message: "Please input your company!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">Company</label>
                    <Input size="large" />
                  </div>
                </Form.Item>
                <div className="flex flex-col">
                  <Form.Item
                    name="designation"
                    rules={[{ required: true, message: "Please input your designation!" }]}
                  >
                    <div className="flex flex-col gap-1">
                      <label className="text-text-color font-medium text-base">Designation</label>
                      <Input size="large" />
                    </div>
                  </Form.Item>
                  <Form.Item name="student">
                    <Checkbox>Student</Checkbox>
                  </Form.Item>
                </div>
              </div>
              <div>
                <h1 className="font-medium text-base">Age group</h1>
                <div className="py-4 flex flex-col gap-4 lg:grid lg:grid-cols-2">
                  <Radio>Below 18</Radio>
                  <Radio>18 to 24</Radio>
                  <Radio>25 to 34</Radio>
                  <Radio>35 to 44</Radio>
                  <Radio>above 60</Radio>
                </div>
              </div>
              <hr className="border border-gray-100 w-full mb-4" />
              <div className="grid xl:grid-cols-2 xl:gap-4 ">
                <Form.Item
                  name="company"
                  rules={[{ required: true, message: "Please input your company!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">Country</label>
                    <Input size="large" />
                  </div>
                </Form.Item>
                <Form.Item
                  name="company"
                  rules={[{ required: true, message: "Please input your company!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">City</label>
                    <Input size="large" />
                  </div>
                </Form.Item>
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: "Please input your username!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">Password</label>
                    <Input.Password size="large" />
                  </div>
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "Please input your password!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">
                      Confirm Password
                    </label>
                    <Input.Password size="large" />
                  </div>
                </Form.Item>
              </div>

              {/* <div className="flex justify-between mb-4">
                <div></div>
                <NavLink>
                  <span className="text-text-color text-sm hover:underline">
                    Forgot your password
                  </span>
                </NavLink>
              </div> */}
              <Form.Item name="student">
                <Checkbox>
                  I have read and accept the <span className="text-blue-500">Privacy Policy</span>
                </Checkbox>
              </Form.Item>
              <Form.Item name="student">
                <Checkbox>Yes please send me updates through email and viber</Checkbox>
              </Form.Item>

              <Form.Item label={null} className="mt-6">
                <Button block size="large" className="w-full" type="primary" htmlType="submit">
                  SUBMIT
                </Button>
              </Form.Item>

              <div className="mt-4 flex justify-center gap-4 items-center">
                <span>Already have an account?</span>
                <span className="text-primary-color font-semibold">Login</span>
              </div>
            </Form>
          </div>

          <div className="hidden lg:block mt-6 ">
            <h1 className="text-text-color text-center">Organizer of</h1>
            <div className="lg:grid lg:grid-cols-4 lg:gap-4 xl:gap-6 xl:grid-cols-7 place-items-center mt-4">
              {organizers.map((org) => (
                <img key={org.alt} src={org.image} alt={org.alt} loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
