import { UsergroupDeleteOutlined,   AppstoreOutlined,  LinkOutlined,
   } from "@ant-design/icons";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Logout";
import Partner from "../pages/Partner";
import RazerAccount from "../pages/RazerAccount";
// import Login from "../pages/Login";


export const routes =[
    {
        id:1,
        path:"/",
        component: <Dashboard/>
    },
    {
        id:2,
        path:"/razeraccount",
        component: <RazerAccount/>
    },
    {
        id:3,
        path:"/partner",
        component: <Partner/>
    },
    {
        id:5,
        path:"/logout",
        component: <Logout/>
    }
  ]

export const menubar = [
    {
      id: 1,
      title: "Dashboard",
      path: "/",
      icon:   LinkOutlined,
    },
    {
      id: 2,
      title: "Razer Account",
        path: "/razeraccount",
        icon: AppstoreOutlined,
    },
    {
        id: 3,
      title: "Partner",
      path: "/partner",
      icon: UsergroupDeleteOutlined,
      }
  ];