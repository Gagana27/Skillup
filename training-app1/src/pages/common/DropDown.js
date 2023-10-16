import { CaretRightOutlined } from "@ant-design/icons";
import React from "react";
import { Collapse, theme } from "antd";

const DropDown = (props) => {
  const { name, desc, price, image, videos } = props;
  const { token } = theme.useToken();

<<<<<<< HEAD
  const getItems = (panelStyle, description, video) => [
    {
      key: "1",
      label: <h2 style={{ color: "black", font: "bold" }}>{video.title}</h2>,
      children: (
        <ol style={{ listStyleType: "decimal" }}>
          <li>{description}</li>
          <li>{description}</li>
          <li>{description}</li>
        </ol>
      ),
      style: panelStyle,
    },
    {
        key: "2",
        label: <h2 style={{ color: "black", font: "bold" }}>{video.title}</h2>,
        children: (
          <ol style={{ listStyleType: "decimal" }}>
            <li>{description}</li>
            <li>{description}</li>
            <li>{description}</li>
          </ol>
        ),
        style: panelStyle,
      },
      {
        key: "3",
        label: <h2 style={{ color: "black", font: "bold" }}>{video.title}</h2>,
        children: (
          <ol style={{ listStyleType: "decimal" }}>
            <li>{description}</li>
            <li>{description}</li>
            <li>{description}</li>
          </ol>
        ),
        style: panelStyle,
      },
      ];
=======
    const { name , desc , price , image ,} = props;
    const { token } = theme.useToken();
>>>>>>> 2871085f68bd88dfb858c788735de06ca295ce7f

  const panelStyle = {
    marginBottom: 24,
    background: token.colorWarning,
    borderRadius: token.borderRadiusLG,
    outerWidth: 25,
    textColor: token.colorWhite,
  };

  return (
    <>
      {videos.map((video) => (
        <Collapse
          bordered={false}
          defaultActiveKey={["0"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{
            background: token.colorBgContainer,
            width: "20rem",
            height: "10rem",
          }}
          key={video._id}
          video={video.description}
          items={getItems(panelStyle, video.description, video)}
        />
      ))}
    </>
  );
};

export default DropDown;
