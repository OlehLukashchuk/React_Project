import React, { memo } from "react";

import { SbChild } from "./SideBar_child";
import logo from "../Side_Bar/SideBar_child/sb_child_logo/logo.png";
import overview from "../Side_Bar/SideBar_child/sb_child_logo/overwiew.png";
import transaction from "../Side_Bar/SideBar_child/sb_child_logo/transaction.png";
import setting from "../Side_Bar/SideBar_child/sb_child_logo/setting.png";
import file from "../Side_Bar/SideBar_child/sb_child_logo/file.png";
import table from "../Side_Bar/SideBar_child/sb_child_logo/table.png";
import book from "../Side_Bar/SideBar_child/sb_child_logo/book.png";
import themesberg from "../Side_Bar/SideBar_child/sb_child_logo/themesberg.png";
import box from "../Side_Bar/SideBar_child/sb_child_logo/box.png";

import "../Side_Bar/SideBar.scss";

export const SideBar = memo(() => {
  const topSbChild = [
    { id: 1, icon: logo, text: "Volt React", link: "/volt" },
    { id: 2, icon: overview, text: "Overview", link: "/overview" },
    { id: 3, icon: transaction, text: "Books", link: "/books" },
    {
      id: 4,
      icon: setting,
      text: "Settings",
      link: "/settings",
      hasArrow: true,
    },
    { id: 5, icon: table, text: "Tables", link: "/tables", hasArrow: true },
    { id: 6, icon: file, text: "Page Examples", link: "/examples" },
    { id: 7, icon: overview, text: "Plugins", link: "/plugins" },
  ];

  const botSbChild = [
    {
      id: 8,
      icon: book,
      text: "Getting Started",
      hasArrow: true,
      link: "/started",
    },
    {
      id: 9,
      icon: box,
      text: "Components",
      hasArrow: true,
      link: "/components",
    },
    { id: 10, icon: themesberg, text: "Themesberg", link: "./themesberg" },
  ];

  const topArr = topSbChild.map((element) => {
    return (
      <SbChild
        item={element}
        key={element.id}
        link={element.link}
        arrow={element.hasArrow ? "arrow" : ""}
      />
    );
  });

  const botArr = botSbChild.map((element) => {
    return (
      <SbChild
        item={element}
        key={element.id}
        link={element.link}
        arrow={element.hasArrow ? "arrow" : ""}
      />
    );
  });

  return (
    <aside>
      {topArr}
      <hr></hr>
      {botArr}
    </aside>
  );
});
