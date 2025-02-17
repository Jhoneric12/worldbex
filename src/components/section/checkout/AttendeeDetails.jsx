import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Select } from "antd";

const AttendeeDetails = ({ form }) => {
  const { Option } = Select;

  return (
    <div className="rounded-lg">
      <Form.List name="attendees">
        {(fields, { add, remove }) => (
          <div className="flex flex-col gap-4">
            {fields.map((field, index) => (
              <div key={field.key} className="w-full">
                <Card
                  size="small"
                  title={
                    <div className="text-lg font-semibold text-gray-800">{`Attendee ${
                      index + 1
                    }`}</div>
                  }
                  extra={
                    index > 0 && (
                      <CloseOutlined onClick={() => remove(field.name)} />
                    )
                  }
                >
                  <Form.Item
                    label="First Name"
                    name={[field.name, "firstName"]}
                    rules={[
                      { required: true, message: "First Name is required" },
                    ]}
                  >
                    <Input placeholder="Enter First Name" />
                  </Form.Item>

                  <Form.Item
                    label="Last Name"
                    name={[field.name, "lastName"]}
                    rules={[
                      { required: true, message: "Last Name is required" },
                    ]}
                  >
                    <Input placeholder="Enter Last Name" />
                  </Form.Item>

                  <Form.Item
                    label="Email Address"
                    name={[field.name, "email"]}
                    rules={[
                      { required: true, message: "Email is required" },
                      { type: "email", message: "Invalid Email Format" },
                    ]}
                  >
                    <Input placeholder="Enter Email" />
                  </Form.Item>

                  <Form.Item
                    name={[field.name, "phone"]}
                    label="Phone Number"
                    rules={[
                      { required: true, message: "Phone Number is required" },
                      {
                        pattern: /^[0-9]{10,}$/,
                        message: "Enter a valid phone number",
                      },
                    ]}
                  >
                    <Input
                      addonBefore={
                        <Form.Item name={[field.name, "prefix"]} noStyle>
                          <Select className="w-20">
                            <Option value="+63">+63</Option>
                            <Option value="+87">+87</Option>
                            <Option value="+02">+02</Option>
                          </Select>
                        </Form.Item>
                      }
                    />
                  </Form.Item>

                  {index > 0 && (
                    <Button
                      type="link"
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => {
                        const firstAttendee = form.getFieldValue([
                          "attendees",
                          0,
                        ]);
                        form.setFieldsValue({
                          attendees: {
                            ...form.getFieldValue("attendees"),
                            [index]: { ...firstAttendee },
                          },
                        });
                      }}
                    >
                      Same as Attendee 1
                    </Button>
                  )}
                </Card>
                <hr className="border-[#F4811F] mt-4" />
              </div>
            ))}

            <Button
              type="dashed"
              onClick={() => add()}
              block
              className="border-gray-400 text-gray-600 hover:border-gray-500 hover:text-gray-800"
            >
              + Add Attendee
            </Button>
            <hr className="border-gray-300" />
          </div>
        )}
      </Form.List>
    </div>
  );
};

export default AttendeeDetails;
