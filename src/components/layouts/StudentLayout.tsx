import React, { ReactNode, useState } from "react";
import {
  Sider,
  ThemedHeaderV2,
  ThemedLayoutV2,
  ThemedSiderV2,
  ThemedTitleV2,
} from "@refinedev/mui";

import Logo from "../Logo";
import { Container, List, ListItem } from "@mui/material";
import { Refine } from "@refinedev/core";
import { Home } from "@mui/icons-material";
import { MdOutlineVideocam, MdSpaceDashboard, MdPaid, MdOutlineGTranslate, MdNewspaper } from "react-icons/md";
import { Header } from "../header";

interface StudentLayoutProps {
  children: ReactNode;
}

const StudentLayout: React.FC<StudentLayoutProps> = ({ children }) => {
  return (
    <Refine
      resources={[
        {
          name: "home",
          list: "/",
          meta: {
            label: "Bosh sahifa",
            icon: <Home />,
          },
          show: "/",
        },
        {
          name: "main",
          list: "/dashboard",
          meta: {
            label: "Asosiy menyu",
            icon: <MdSpaceDashboard />,
          },
          show: "/dashboard",
        },
        {
          name: "courses",
          list: "/dashboard/courses",
          meta: {
            label: "Barcha kurslar",
            icon: <MdOutlineVideocam />
          }
        },
        {
          name: "mycourses",
          list: "/dashboard/my-courses",
          meta: {
            label: "Mening kurslarim",
            icon: <MdOutlineVideocam />
          }
        },
        {
          name: "balance",
          list: "/dashboard/balance",
          meta: {
            label: "Mening balansim",
            icon: <MdPaid />
          }
        },
        {
          name: "translate",
          list: "/dashboard/translate",
          meta: {
            label: "Tarjimon",
            icon: <MdOutlineGTranslate />
          }
        },
        {
          name: "news",
          list: "/dashboard/news",
          meta: {
            label: "Yangiliklar",
            icon: <MdNewspaper />
          }
        }
      ]}
    >
      <ThemedLayoutV2
        children={children}
        Sider={() => (
          <ThemedSiderV2
            Title={({ collapsed }) => (
              <ThemedTitleV2
                collapsed={collapsed}
                icon={collapsed ? <Logo /> : <Logo />}
                text="Arabify.uz"
              />
            )}
            render={({ items, logout, collapsed }) => {
              return <>{items}</>;
            }}
          />
        )}
        Header={() => <Header />}
      ></ThemedLayoutV2>
    </Refine>
  );
};

export default StudentLayout;
