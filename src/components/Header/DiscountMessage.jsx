import {
  DownOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
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
              suffixIcon={<DownOutlined />}
              defaultValue={{
                value: "eu",
                label: "eu",
              }}
              style={{
                width: 60,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "ru",
                  label: "ru",
                },
                {
                  value: "en",
                  label: "en",
                },
              ]}
            />
          </div>
          <Button
            style={{ color: "white", padding: 2 }}
            size="large"
            color="default"
            variant="link"
            icon={<EnvironmentOutlined className="iconStyle" />}
          >
            Bishkek
          </Button>
        </div>
      </div>
    </div>
  );
}
