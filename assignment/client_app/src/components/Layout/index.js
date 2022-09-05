import React from "react";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          minHeight: "10vh",
          color: "#fff",
          display: "grid",
          placeItems: "center",
        }}
      >
        <p style={{ fontSize: "1 rem", lineHeight: "20px" }}>
          Technical Assignment
        </p>
      </Header>
      <Content>{children}</Content>
      <Footer style={{ minHeight: "10vh" }}></Footer>
    </Layout>
  );
};

export default AppLayout;
