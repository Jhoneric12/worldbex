import React, { useState } from "react";
import { Card, Form, Checkbox, Input } from "antd";
import { questions } from "../../../data/Questions";

const Survey = ({ form }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleChange = (questionTitle, checkedValues) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionTitle]: checkedValues,
    });

    if (!checkedValues.includes("Other")) {
      form.setFieldsValue({ [`${questionTitle}-other`]: "" });
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {questions.map((question, index) => (
        <Card
          size="small"
          key={index}
          title={
            <h3 className="font-semibold py-2 text-base md:text-lg xl:text-lg whitespace-normal">
              {question.title}
            </h3>
          }
        >
          <Form.Item
            name={question.title}
            rules={[{ required: true, message: "This question is required" }]}
          >
            <Checkbox.Group
              onChange={(checkedValues) =>
                handleChange(question.title, checkedValues)
              }
            >
              <div className="flex flex-col gap-2">
                {question.options.map((option) => (
                  <Checkbox
                    key={option}
                    value={option}
                    className="text-gray-700"
                  >
                    {option}
                  </Checkbox>
                ))}
              </div>
            </Checkbox.Group>
          </Form.Item>

          {selectedOptions[question.title]?.includes("Other") && (
            <Form.Item
              name={`${question.title}-other`}
              rules={[
                { required: true, message: "Please specify your answer" },
              ]}
            >
              <Input
                placeholder="Please specify"
                className="border-gray-300 rounded-md px-3 py-2"
              />
            </Form.Item>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Survey;
