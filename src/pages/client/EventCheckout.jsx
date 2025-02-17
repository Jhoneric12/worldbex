import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Steps, Button, Form } from "antd";
import AttendeeDetails from "../../components/section/checkout/AttendeeDetails";
import AttendeeDetailsFree from "../../components/section/checkout/AttendeeDeatilsFree";
import Survey from "../../components/section/checkout/Survey";
import PaymentDetails from "../../components/section/checkout/PaymentDetails";
import { useClientStoreAuth } from "../../store/client/useAuth";

const EventCheckout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event || { amount: 0, eventName: "event" };
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const { clientData } = useClientStoreAuth();

  const next = async () => {
    try {
      await form.validateFields();
      setCurrent((prev) => prev + 1);
    } catch (error) {
      console.log("Validation Failed:", error);
      form.scrollToField(error.errorFields[0].name);
    }
  };
  const prev = () => setCurrent((prev) => prev - 1);

  const isFree = event?.amount === 0;

  const steps = isFree
    ? [
        {
          title: "Attendee Details",
          content: <AttendeeDetailsFree form={form} />,
        },
        { title: "Survey", content: <Survey form={form} /> },
        { title: "Payment", content: <PaymentDetails /> },
      ]
    : [
        { title: "Attendee Details", content: <AttendeeDetails form={form} /> },
        { title: "Payment", content: <PaymentDetails /> },
      ];

  const initialValues = {
    attendees: [
      {
        firstName: clientData?.name || "",
        lastName: clientData?.name || "",
        email: clientData?.email || "",
        phone: clientData?.mobile_number || "",
        prefix: "+63",
      },
    ],
  };

  return (
    <section className="px-4 py-6">
      <Form form={form} layout="vertical" initialValues={initialValues}>
        <div className="w-full md:max-w-xl xl:max-w-xl mx-auto">
          <Steps
            current={current}
            items={steps.map((step) => ({
              key: step.title,
              title: step.title,
            }))}
            className="mb-2"
          />

          <div className="md:p-6 mb-4 lg:mb-0 xl:mb-0 md:mt-0 mt-2 bg-white">
            {steps[current]?.content}
          </div>

          <div className=" flex justify-center gap-3">
            {current === 0 ? (
              <Button onClick={() => navigate("/visitor/events")} className="px-4 py-2 rounded-md">
                Back
              </Button>
            ) : (
              <Button onClick={prev} className="px-4 py-2 rounded-md">
                Previous
              </Button>
            )}

            {current < steps.length - 1 ? (
              <Button type="primary" onClick={next} className="text-white px-4 py-2 rounded-md">
                Next
              </Button>
            ) : (
              <Button type="primary">Submit</Button>
            )}
          </div>
        </div>
      </Form>
    </section>
  );
};

export default EventCheckout;
