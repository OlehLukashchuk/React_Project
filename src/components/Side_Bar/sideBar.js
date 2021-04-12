import React from "react";
import "../Side_Bar/sideBar.css";
import SbChild from "../Side_Bar/sideBar_child/sB_child";
import logo from "../Side_Bar/sideBar_child/sB_child_logo/logo.png";
import overwiew from "../Side_Bar/sideBar_child/sB_child_logo/overwiew.png";
import transaction from "../Side_Bar/sideBar_child/sB_child_logo/transaction.png";
import setting from "../Side_Bar/sideBar_child/sB_child_logo/setting.png";
import file from "../Side_Bar/sideBar_child/sB_child_logo/file.png";
import table from "../Side_Bar/sideBar_child/sB_child_logo/table.png";
import book from "../Side_Bar/sideBar_child/sB_child_logo/book.png";
import themesberg from "../Side_Bar/sideBar_child/sB_child_logo/themesberg.png";
import box from "../Side_Bar/sideBar_child/sB_child_logo/box.png";

function SideBar() {
  const topSbChild = [
    { icon: logo, text: "Volt React" },
    { icon: overwiew, text: "Owerview" },
    { icon: transaction, text: "Transactions" },
    { icon: setting, text: "Settings" },
    { icon: table, text: "Tables" },
    { icon: file, text: "Page Examples" },
    { icon: overwiew, text: "Plugins" },
  ];

  const botSbChild = [
    { icon: book, text: "Getting Started" },
    { icon: box, text: "Components" },
    { icon: themesberg, text: "Themesberg" },
  ];

  const topArr = topSbChild.map((element, index) => {
    if (index === 2) {
      return (
        <SbChild item={element} active={"activeSb"} key={`key-${index}`} />
      );
    }
    if (index === 4 || index === 5) {
      return (
        <SbChild
          item={element}
          active={""}
          arrow={"arrow"}
          key={`key-${index}`}
        />
      );
    }
    return <SbChild item={element} active={""} key={`key-${index}`} />;
  });

  const botArr = botSbChild.map((element, index) => {
    if (index === 0 || index === 1) {
      return (
        <SbChild
          item={element}
          active={""}
          arrow={"arrow"}
          key={`key-${index}`}
        />
      );
    }
    return <SbChild item={element} key={`key-${index}`} />;
  });

  return (
    <aside>
      {topArr}
      <hr></hr>
      {botArr}
    </aside>
  );
}

// class SideBar extends React.PureComponent {
//   render() {
//     const topSbChild = [
//       { icon: logo, text: "Volt React" },
//       { icon: overwiew, text: "Owerview" },
//       { icon: transaction, text: "Transactions" },
//       { icon: setting, text: "Settings" },
//       { icon: table, text: "Tables" },
//       { icon: file, text: "Page Examples" },
//       { icon: overwiew, text: "Plugins" },
//     ];

//     const botSbChild = [
//       { icon: book, text: "Getting Started" },
//       { icon: box, text: "Components" },
//       { icon: themesberg, text: "Themesberg" },
//     ];

//     const topArr = topSbChild.map((element, index) => {
//       if (index === 2) {
//         return <SbChild item={element} active={"activeSb"} />;
//       }
//       if (index === 4 || index === 5) {
//         return <SbChild item={element} active={""} arrow={"arrow"} />;
//       }
//       return <SbChild item={element} active={""} />;
//     });

//     const botArr = botSbChild.map((element, index) => {
//       if (index === 0 || index === 1) {
//         return <SbChild item={element} active={""} arrow={"arrow"} />;
//       }
//       return <SbChild item={element} />;
//     });

//     return (
//       <aside>
//         {topArr}
//         <hr></hr>
//         {botArr}
//       </aside>
//     );
//   }
// }

export default React.memo(SideBar);
