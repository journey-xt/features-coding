import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import "antd/dist/reset.css";
import Entry from "./app/Entry";

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items: MenuProps["items"] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));

  return (
    <Layout hasSider>
      <Layout.Sider theme="light" style={siderStyle}>
        <div className="demo-logo-vertical">演示事例</div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Layout.Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Layout.Header style={{ padding: 0, background: colorBgContainer }} />
        <Layout.Content
          style={{
            margin: "24px 16px 0",
            minHeight: "calc(100vh - 152px)",
            background: "#fff",
          }}
        >
          <Entry />
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>演示事例</Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default App;
