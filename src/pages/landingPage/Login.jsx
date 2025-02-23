import Navbar from "../../components/navbar/Navbar";
import { Button, Form, Input, Modal } from "antd";
import { NavLink } from "react-router";
import Banner from "../../assets/images/icon/banner.png";
import BannerLogo from "../../assets/images/logo/bannerlogo.png";
import DecorationBottom from "../../assets/images/icon/decoration-bottom-hero.png";
import { organizers } from "../../data/Organizer";
import DecorationTop from "../../assets/images/icon/decoration-top-auth.png";
import { useLogin } from "../../services/requests/client/useLoginAuth";
import { useState } from "react";
import DGSILOGO from "../../assets/images/logo/DGSI_LOGO-removebg-preview.png";

const Login = () => {
  const { mutate } = useLogin();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const handleShowModal = () => {
    setOpen(!open);
  };

  const onFinish = async (values) => {
    mutate(values);
    console.log(values);
  };

  form.setFieldsValue({
    email: "chrismhoi17@gmail.com",
    password: "password@password.com",
  });

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex relative">
        <div
          className="hidden h-screen lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-[40%] bg-cover bg-center fixed"
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

        <div className="w-full relative flex flex-col overflow-y-auto items-center justify-center min-h-screen gap-7 px-4 md:w-full md:px-30 lg:px-20 xl:px-20 xl:pr-30 lg:ml-[40%] lg:w-[60%] lg:py-10 ">
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
          <div className=" lg:mt-30 xl:mt-20 self-start">
            <h1 className="font-bold text-3xl text-black mb-3 lg:hidden">Let's sign you in.</h1>
            <h1 className="text-primary-color font-medium text-lg max-w-[25rem] lg:text-4xl lg:max-w-full lg:leading-12">
              WELCOME TO WORLDBEX SERVICES INTERNATIONAL
            </h1>
          </div>
          <div className="w-full">
            <Form form={form} onFinish={onFinish} autoComplete="off">
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <div className="flex flex-col gap-1">
                  <label className="text-text-color font-medium text-base">Email Address</label>
                  <Input size="large" placeholder="Enter Email Address" />
                </div>
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <div className="flex flex-col gap-1">
                  <label className="text-text-color font-medium text-base">Password</label>
                  <Input.Password size="large" placeholder="Enter Password" />
                </div>
              </Form.Item>

              <div className="flex justify-between mb-4">
                <div></div>
                <NavLink onClick={handleShowModal}>
                  <span className="text-text-color text-sm hover:underline">
                    Forgot your password
                  </span>
                </NavLink>
              </div>

              <Form.Item label={null} className="mt-6">
                <Button block size="large" className="w-full" type="primary" htmlType="submit">
                  LOGIN
                </Button>
              </Form.Item>

              <div className="mt-4 flex justify-center gap-4 items-center">
                <span>Don't have an account?</span>
                <NavLink to={"/registration"}>
                  <span className="text-primary-color font-semibold hover:underline">Register</span>
                </NavLink>
              </div>
            </Form>
          </div>

          {/* <div className="mt-6 ">
            <h1 className="text-text-color text-center font-medium">Organizer of</h1>
            <div className="grid grid-cols-3 gap-10 md:grid-cols-4 md:gap-10 lg:grid-cols-4 lg:gap-4 xl:gap-6 xl:grid-cols-7 place-items-center mt-4">
              {organizers.map((org, index) => (
                <img
                  key={index}
                  src={org.image}
                  alt={org.alt}
                  loading="lazy"
                  className="shrink-0"
                />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-center font-medium">Powered by</h1>
            <img
              src={DGSILOGO}
              alt="Dynamic Global Soft Logo"
              loading="lazy"
              className="w-35 h-25"
            />
          </div> */}
        </div>
      </section>
      <Modal
        open={open}
        title="Forgot Password"
        onCancel={handleShowModal}
        footer={[
          <Button key="cancel" onClick={handleShowModal}>
            Cancel
          </Button>,
          <Button key="submit" type="primary">
            Submit
          </Button>,
        ]}
      >
        <Form>
          <Form.Item name="email" rules={[{ required: true, message: "Please input your email!" }]}>
            <Input size="large" placeholder="Enter your email address" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Login;
