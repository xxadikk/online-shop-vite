import { useState } from "react";
import { DownOutlined, UpOutlined, EnvironmentOutlined, GlobalOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";
import "./header.css";
import { useTranslation } from "react-i18next";

export default function DiscountMessage() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleChange = (value) => {
    i18n.changeLanguage(value);
    setOpen(false); // Закрываем Select после выбора
  };

  return (
    <div className="discoint-message container">
      <div className="discoint-message__body">
        <div className="empty-block"></div>
        <div className="message-block">
          <span>{t("header.discount")}</span> {/* Отображаем перевод */}
          <p>20:46</p>
        </div>
        <div className="button-block">
          <div className="button-block__languages">
            <GlobalOutlined style={{ fontSize: 25 }} />
            <Select
              value={i18n.language}
              open={open}
              onDropdownVisibleChange={setOpen}
              onChange={handleChange}
              suffixIcon={open ? <UpOutlined /> : <DownOutlined />}
              style={{ width: "100%" }}
              options={[
                { value: "ru", label: t("ru") },
                { value: "en", label: t("en") },
                { value: "kg", label: t("kg") },
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
           {t('header.location')}
          </Button>
        </div>
      </div>
    </div>
  );
}
