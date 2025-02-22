import Navbar from "../../components/navbar/Navbar";
import { Button, Checkbox, Form, Input, Radio, Modal } from "antd";
import { NavLink } from "react-router";
import Banner from "../../assets/images/icon/banner.png";
import BannerLogo from "../../assets/images/logo/bannerlogo.png";
import DecorationBottom from "../../assets/images/icon/decoration-bottom-hero.png";
import { organizers } from "../../data/Organizer";
import DecorationTop from "../../assets/images/icon/decoration-top-auth.png";
import { useState } from "react";
import DGSILOGO from "../../assets/images/organizers/DGSI LOGO.png";

const Registration = () => {
  const [isInPh, setIsInPh] = useState(false);
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const handleIsInPh = () => {
    setIsInPh(!isInPh);
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

        <div className="w-full lg:relative py-10 flex flex-col gap-7 px-4 md:w-full md:px-30 lg:px-20 lg:pr-25 xl:px-10 xl:pr-30 lg:ml-[40%] lg:w-[60%] overflow-y-auto items-center justify-center min-h-screen">
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
            <Form autoComplete="off">
              <div className="grid xl:grid-cols-2 xl:gap-2">
                <Form.Item
                  name="firstname"
                  rules={[{ required: true, message: "Please input your first name!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">First Name</label>
                    <Input size="large" placeholder="Enter First Name" />
                  </div>
                </Form.Item>
                <Form.Item name="middle_name">
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">Middle Name</label>
                    <Input size="large" placeholder="Enter Middle Name" />
                  </div>
                </Form.Item>
                <Form.Item
                  name="lastname"
                  rules={[{ required: true, message: "Please input your last name!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">Last Name</label>
                    <Input size="large" placeholder="Enter Last Name" />
                  </div>
                </Form.Item>
                <Form.Item
                  name="mobile_number"
                  rules={[{ required: true, message: "Please input your mobile number!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">Mobile Number</label>
                    <Input size="large" placeholder="Enter 10 Digit Number" />
                  </div>
                </Form.Item>
                <Form.Item
                  name="email_address"
                  rules={[{ required: true, message: "Please input your email address!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">Email Address</label>
                    <Input size="large" placeholder="Enter Email Address" />
                  </div>
                </Form.Item>
                <Form.Item
                  name="company"
                  rules={[{ required: true, message: "Please input your company!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">Company</label>
                    <Input size="large" placeholder="Enter Company" />
                  </div>
                </Form.Item>
                <div className="flex flex-col">
                  <Form.Item
                    name="designation"
                    rules={[{ required: true, message: "Please input your designation!" }]}
                  >
                    <div className="flex flex-col gap-1">
                      <label className="text-text-color font-medium text-base">Designation</label>
                      <Input size="large" placeholder="Enter Designation" />
                    </div>
                  </Form.Item>
                  {/* <Form.Item name="student">
                    <Checkbox>Student</Checkbox>
                  </Form.Item> */}
                </div>
              </div>
              <div>
                <h1 className="font-medium text-base">Age group</h1>
                <Form.Item
                  name="age_group"
                  rules={[{ required: true, message: "Please input your age group!" }]}
                >
                  <Radio.Group>
                    <div className="py-4 flex flex-col gap-4 lg:grid lg:grid-cols-2">
                      <Radio value={"Below 18"}>Below 18</Radio>
                      <Radio value={"18 to 24"}>18 to 24</Radio>
                      <Radio value={"25 to 34"}>25 to 34</Radio>
                      <Radio value={"35 to 44"}>35 to 44</Radio>
                      <Radio value={"above 60"}>above 60</Radio>
                    </div>
                  </Radio.Group>
                </Form.Item>
              </div>
              <hr className="border border-gray-100 w-full mt-4 mb-4" />
              <Form.Item name="student">
                <Checkbox onClick={handleIsInPh}>Are you living in the Philippines</Checkbox>
              </Form.Item>
              <div className="grid xl:grid-cols-2 xl:gap-2 ">
                {isInPh ? (
                  <>
                    <Form.Item
                      name="region"
                      rules={[{ required: true, message: "Please input your region!" }]}
                    >
                      <div className="flex flex-col gap-1">
                        <label className="text-text-color font-medium text-base">Region</label>
                        <Input size="large" placeholder="Enter Region" />
                      </div>
                    </Form.Item>
                    <Form.Item
                      name="province"
                      rules={[{ required: true, message: "Please input your province!" }]}
                    >
                      <div className="flex flex-col gap-1">
                        <label className="text-text-color font-medium text-base">Province</label>
                        <Input size="large" placeholder="Enter Province" />
                      </div>
                    </Form.Item>
                    <Form.Item
                      name="city"
                      rules={[{ required: true, message: "Please input your city!" }]}
                    >
                      <div className="flex flex-col gap-1">
                        <label className="text-text-color font-medium text-base">City</label>
                        <Input size="large" placeholder="Enter City" />
                      </div>
                    </Form.Item>
                    <Form.Item
                      name="address"
                      rules={[{ required: true, message: "Please input your address!" }]}
                    >
                      <div className="flex flex-col gap-1">
                        <label className="text-text-color font-medium text-base">Address</label>
                        <Input size="large" placeholder="Enter Address" />
                      </div>
                    </Form.Item>
                  </>
                ) : (
                  <>
                    <Form.Item
                      name="country"
                      rules={[{ required: true, message: "Please input your country!" }]}
                    >
                      <div className="flex flex-col gap-1">
                        <label className="text-text-color font-medium text-base">Country</label>
                        <Input size="large" placeholder="Enter Country" />
                      </div>
                    </Form.Item>
                    <Form.Item
                      name="city"
                      rules={[{ required: true, message: "Please input your city!" }]}
                    >
                      <div className="flex flex-col gap-1">
                        <label className="text-text-color font-medium text-base">City</label>
                        <Input size="large" placeholder="Enter City" />
                      </div>
                    </Form.Item>
                  </>
                )}
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "Please input your password!" }]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">Password</label>
                    <Input.Password size="large" placeholder="Enter Password" />
                  </div>
                </Form.Item>

                <Form.Item
                  name="confirm_password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    { required: true, message: "The password that you entered do not match!" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("The password that you entered do not match!")
                        );
                      },
                    }),
                  ]}
                >
                  <div className="flex flex-col gap-1">
                    <label className="text-text-color font-medium text-base">
                      Confirm Password
                    </label>
                    <Input.Password size="large" placeholder="Confirm Passwrod" />
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
                  I have read and accept the{" "}
                  <NavLink>
                    <span className="text-blue-500 hover:underline">Privacy policy</span>
                  </NavLink>
                </Checkbox>
              </Form.Item>
              <Form.Item name="student">
                <Checkbox>Yes please send me updates through email and viber</Checkbox>
              </Form.Item>

              <Form.Item label={null} className="mt-6">
                <Button
                  style={{ borderRadius: "4px" }}
                  block
                  size="large"
                  className="w-full"
                  type="primary"
                  htmlType="submit"
                >
                  SUBMIT
                </Button>
              </Form.Item>

              <div className="mt-4 flex justify-center gap-4 items-center">
                <span>Already have an account?</span>
                <NavLink to={"/login"}>
                  <span className="text-primary-color font-semibold hover:underline">Login</span>
                </NavLink>
              </div>
            </Form>
          </div>

          <div className=" lg:block mt-6 ">
            <h1 className="text-center font-medium">Organizer of</h1>
            <div className="grid grid-cols-3 gap-10 md:grid-cols-4 md:gap-10 lg:grid-cols-4 lg:gap-4 xl:gap-6 xl:grid-cols-7 place-items-center mt-4">
              {organizers.map((org) => (
                <img key={org.alt} src={org.image} alt={org.alt} loading="lazy" />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-center font-medium">Powered by</h1>
            <img
              src={DGSILOGO}
              alt="Dynamic Global Soft Logo"
              loading="lazy"
              className="w-40 h-30"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
