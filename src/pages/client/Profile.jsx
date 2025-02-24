import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import ProfileLayout from "../../components/layouts/ProfileLayout";
import { Input, Form, Radio, Avatar, Checkbox } from "antd";
import { Button, theme } from "antd";
import { useClientStoreAuth } from "../../store/client/useAuth";

const Profile = () => {
  const { clientData } = useClientStoreAuth();
  const [isInPh, setIsInPh] = useState(false);
  const secondLetterIndex = clientData.name.indexOf(" ") + 1;
  const navigate = useNavigate();
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const handleIsInPh = () => {
    setIsInPh(!isInPh);
  };

  const initialValues = {
    firstName: clientData?.name,
    middleName: clientData?.name || "",
    lastName: clientData?.name || "",
    mobile_number: clientData?.mobile_number,
    email: clientData?.email,
    company: clientData?.company,
    designation: clientData?.designation,
    ageGroup: clientData?.age_group,
    country: clientData?.address || "",
    city: clientData?.address || "",
  };

  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [clientData]);

  const handleValuesChange = (changedValues) => {
    const hasChanges = Object.keys(changedValues).some(
      (key) => changedValues[key] !== initialValues[key]
    );
    setIsFormChanged(hasChanges);
  };

  const handleReset = () => {
    form.setFieldsValue(initialValues);
    setIsFormChanged(false);
  };

  return (
    <ProfileLayout>
      <section className="flex flex-col items-center gap-4 justify-center">
        {/* Personal Information */}
        <div className="xl:w-2/3/6 lg:w-2/3 md:w-2/3 w-full flex flex-col bg-white rounded-lg px-4 gap-5 shadow-sm">
          <div className="flex flex-col gap-2 items-center justify-center py-6 xl:px-4">
            <Avatar style={{ backgroundColor: "#F4811F" }} size={80}>
              <h1 className="text-2xl">{`${clientData?.name.charAt(0)}${clientData?.name.charAt(
                secondLetterIndex
              )}`}</h1>
            </Avatar>
            <div className="text-center">
              <h1 className="font-medium ">{clientData?.name}</h1>
              <span className="xl:text-xs">{clientData?.email}</span>
            </div>

            <div className="w-full flex flex-col mt-6">
              <Form
                layout="vertical"
                form={form}
                initialValues={initialValues}
                onValuesChange={handleValuesChange}
              >
                <div className="grid xl:grid-cols-2 xl:gap-2">
                  <div className="w-full">
                    <Form.Item
                      label="First Name"
                      name="firstName"
                      rules={[{ required: true, message: "Please input!" }]}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </div>

                  <div className="w-full">
                    <Form.Item label="Middle Name" name="middleName">
                      <Input size="large" />
                    </Form.Item>
                  </div>

                  <div className="w-full">
                    <Form.Item
                      label="Last Name"
                      name="lastName"
                      rules={[{ required: true, message: "Please input!" }]}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </div>

                  <div className="w-full">
                    <Form.Item
                      label="Mobile Number"
                      name="mobile_number"
                      rules={[{ required: true, message: "Please input!" }]}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </div>

                  <div className="w-full">
                    <Form.Item
                      label="Email Address"
                      name="email"
                      rules={[
                        { required: true, message: "Please input!" },
                        { type: "email", message: "Invalid Email Format" },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>
                  </div>

                  <Form.Item
                    label="Company"
                    name="company"
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <Input size="large" />
                  </Form.Item>

                  <Form.Item
                    label="Designation"
                    name="designation"
                    rules={[{ required: true, message: "Please input!" }]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>

                <Form.Item
                  label="Age Group"
                  name="ageGroup"
                  rules={[{ required: true, message: "Please input!" }]}
                >
                  <Radio.Group>
                    <div className="py-4 flex flex-col gap-4 lg:grid lg:grid-cols-2">
                      <Radio value="Below 18">Below 18</Radio>
                      <Radio value="18 to 24">18 to 24</Radio>
                      <Radio value="25 to 34">25 to 34</Radio>
                      <Radio value="35 to 44">35 to 44</Radio>
                      <Radio value="above 60">above 60</Radio>
                    </div>
                  </Radio.Group>
                </Form.Item>
                <Form.Item name="student">
                  <Checkbox onClick={handleIsInPh}>Are you living in the Philippines</Checkbox>
                </Form.Item>
                {isInPh ? (
                  <>
                    <div className="xl:flex xl:flex-row gap-2">
                      <Form.Item
                        label="Region"
                        className="w-full"
                        name="region"
                        rules={[{ required: true, message: "Please input your region!" }]}
                      >
                        <Input size="large" placeholder="Enter Region" />
                      </Form.Item>
                      <Form.Item
                        label="Province"
                        className="w-full"
                        name="province"
                        rules={[{ required: true, message: "Please input your province!" }]}
                      >
                        <Input size="large" placeholder="Enter Province" />
                      </Form.Item>
                      <Form.Item
                        label="City"
                        className="w-full"
                        name="city"
                        rules={[{ required: true, message: "Please input your city!" }]}
                      >
                        <Input size="large" placeholder="Enter City" />
                      </Form.Item>
                    </div>
                    <Form.Item
                      label="Address"
                      name="address"
                      rules={[{ required: true, message: "Please input your address!" }]}
                    >
                      <Input.TextArea size="large" placeholder="Enter Address" />
                    </Form.Item>
                  </>
                ) : (
                  <div className="grid xl:grid-cols-2 gap-2">
                    <Form.Item
                      label="Country"
                      name="country"
                      rules={[{ required: true, message: "Please input your country!" }]}
                    >
                      <Input size="large" placeholder="Enter Country" />
                    </Form.Item>
                    <Form.Item
                      label="City"
                      name="city"
                      rules={[{ required: true, message: "Please input your city!" }]}
                    >
                      <Input size="large" placeholder="Enter City" />
                    </Form.Item>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-3 justify-end">
                  <Button style={{ borderRadius: "4px" }} size="large" onClick={handleReset}>
                    Reset
                  </Button>
                  <Button
                    style={{ borderRadius: "4px" }}
                    size="large"
                    type="primary"
                    disabled={!isFormChanged}
                  >
                    Save Changes
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="xl:w-2/3/6 lg:w-2/3 md:w-2/3 w-full flex flex-col bg-white rounded-lg py-6 px-4 md:px-6 gap-5 shadow-sm">
          <h1 className="font-bold text-lg md:text-xl">Set New Password</h1>
          <Form layout="vertical" form={form} onValuesChange={handleValuesChange}>
            <div className="w-full">
              <Form.Item
                label="Current Password"
                name="currentPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input.Password size="large" />
              </Form.Item>
            </div>

            <div className="w-full">
              <Form.Item
                label="New Password"
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input.Password size="large" />
              </Form.Item>
            </div>

            <div className="w-full">
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input!",
                  },
                ]}
              >
                <Input.Password size="large" />
              </Form.Item>
            </div>

            <div className="flex justify-end">
              <Button style={{ borderRadius: "4px" }} size="large" type="primary">
                Save Changes
              </Button>
            </div>
          </Form>
        </div>
        <div className="w-full fixed bottom-0 left-0 right-0 backdrop-blur-xs py-4 flex justify-center gap-3">
          <Button
            style={{ borderRadius: "4px" }}
            size="large"
            onClick={() => navigate("/visitor/events")}
            className="px-4 py-2 rounded-md"
          >
            Back
          </Button>
        </div>
      </section>
    </ProfileLayout>
  );
};

export default Profile;
