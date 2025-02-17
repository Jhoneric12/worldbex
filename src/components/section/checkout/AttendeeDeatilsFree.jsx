import React, { useEffect, useState } from "react";
import { Card, Form, Input, Checkbox } from "antd";

const AttendeeDetailsFree = ({ form }) => {
  const [noPrc, setNoPrc] = useState(false);

  useEffect(() => {
    form.setFieldsValue({
      prcLicense: "",
      expiryDate: "",
      noPrc: false,
    });
  }, [form]);

  const handleNoPrcChange = (e) => {
    const checked = e.target.checked;
    setNoPrc(checked);
    form.setFieldsValue({
      prcLicense: checked ? "N/A" : "",
      expiryDate: checked ? "N/A" : "",
    });
  };

  return (
    <div>
      <Card
        size="small"
        title={<h3 className="font-semibold text-lg">Attendee</h3>}
      >
        <Form.Item
          label="PRC License Number"
          name="prcLicense"
          rules={[
            { required: !noPrc, message: "PRC License Number is required" },
          ]}
        >
          <Input placeholder="Enter PRC License Number" disabled={noPrc} />
        </Form.Item>

        <Form.Item name="noPrc" valuePropName="checked">
          <Checkbox onChange={handleNoPrcChange} checked={noPrc}>
            No PRC Number
          </Checkbox>
        </Form.Item>

        <Form.Item
          label="Expiry Date"
          name="expiryDate"
          rules={[{ required: !noPrc, message: "Expiry Date is required" }]}
        >
          <Input placeholder="Enter Expiry Date" type="date" disabled={noPrc} />
        </Form.Item>
      </Card>
    </div>
  );
};

export default AttendeeDetailsFree;
