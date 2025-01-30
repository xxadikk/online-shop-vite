import { EnvironmentOutlined, GlobalOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";
import "./header.css";

export default function DiscountMessage() {
  const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };
  return (
    <div className="discoint-message container">
      <div className="discoint-message__body">
        <div className="empty-block"></div>
        <div className="message-block">
          <span>Discount 25% for all product! Check out now!</span>
          <p>20:46</p>
        </div>
        <div className="button-block">
          <div className="button-block__languages">
            <GlobalOutlined style={{ fontSize: 25 }} />
            <Select
              suffixIcon=""
              variant="filled"
              labelInValue
              defaultValue={{
                value: "eu",
                label: "eu",
              }}
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack (100)",
                },
                {
                  value: "lucy",
                  label: "Lucy (101)",
                },
              ]}
            />
          </div>
          <div className="button-block__location">
            <Button
              size="large"
              color="default"
              variant="link"
              icon={<EnvironmentOutlined />}
            >
              Bishkek
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
