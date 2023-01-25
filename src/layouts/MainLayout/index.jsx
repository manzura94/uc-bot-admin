import React, { useState, useEffect, useContext } from "react";
import { Link, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Layout, Menu, Space, Dropdown, Avatar, Button } from "antd";
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { PageHeader } from "@ant-design/pro-layout";
import { menubar, routes } from "../../utils/routes";
import { Context } from "../../contexts/UserContext";
import Login from "../../pages/Login";
import close from "../../assets/icons/close.svg"

const { Content, Sider } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { user, setUser } = useContext(Context);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(["1"]);
  const [openMenu, setOpenMenu] = useState(false);

  const logoutHandler = () => {
    setUser(false);
    localStorage.clear();
  };

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
    setCollapsed(!collapsed)
  };

  const items = [
    {
      key: "1",
      label: <a onClick={logoutHandler}>logout</a>,
    },
  ];

  useEffect(() => {
    for (let item of menubar) {
      if (item.path === location.pathname) {
        setActiveMenu([`${item.id}`]);
        setOpenMenu(false);
        setCollapsed(false);
      }
    }
  }, [location]);

  return (
    <>
      {user ? (
        <Layout>
          <PageHeader
            title={
              <Button
                className="trigger-button"
                style={{
                  height: 40,
                  border: "none",
                  background: "transparent",
                }}
                onClick={openMenuHandler}
              >
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: () => setCollapsed(!collapsed),
                  }
                )}
              </Button>
            }
            subTitle={"UC Bot"}
            extra={
              <>
                <Dropdown
                  menu={{ items }}
                  trigger={["click"]}
                  placement="bottomRight"
                  arrow={{
                    pointAtCenter: true,
                  }}
                >
                  <Space>
                    <Avatar
                      size={"large"}
                      icon={<UserOutlined />}
                      className="avatar"
                    />
                  </Space>
                </Dropdown>
              </>
            }
          />

          <Layout>
            <Sider className={`${openMenu && "open" } menu-side`} width={300}>
              <Button className={"displayButton"}
              onClick={openMenuHandler}
              >
               <span> <img src={close} alt="close" /></span>
              </Button>
              <Menu
                mode="inline"
                selectedKeys={activeMenu}
                items={menubar.map((item) => ({
                  key: item.id,
                  label: <Link to={item.path}>{item.title}</Link>,
                  icon: React.createElement(item.icon),
                }))}
              />
            </Sider>
            <Layout>
              <Content>
                <Routes>
                  {routes.map((route) => (
                    <Route
                      key={route.id}
                      path={route.path}
                      element={route.component}
                    />
                  ))}
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/logout" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </>
  );
};

export default MainLayout;
