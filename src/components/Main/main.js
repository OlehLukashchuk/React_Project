import React from "react";
import SideBar from "../Side_Bar/sideBar";
import Header from "../Header/header";
import Volt from "../Pages/Volt/Volt";
import Owerview from "../Pages/Owerview/Owerview";
import Transaction from "../Pages/Transaction/Transaction";
import Settings from "../Pages/SettingPage/Settings";
import Table from "../Pages/Table/Table";
import Example from "../Pages/Examples/Example";
import Plugin from "../Pages/PluginsPage/Plugin";
import Started from "../Pages/Started/Started";
import Component from "../Pages/ComponentPage/Component";
import Themesberg from "../Pages/Themesberg/Themesberg";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Themes from "../Pages/ThemesPage/Themes";
import "../Main/main.css";
import Footer from "../Footer/footer";
import { Route, Switch} from "react-router-dom";

function Main(props) {
  const { history } = props;
  return (
    <main>
      <SideBar />
      <Header />
      <Switch>
        <Route exact history={history} path="/volt" component={Volt} />
        <Route exact history={history} path="/Owerview" component={Owerview} />
        <Route exact history={history} path="/transactions" component={Transaction} />
        <Route exact history={history} path="/settings" component={Settings} />
        <Route exact history={history} path="/tables" component={Table} />
        <Route exact history={history} path="/examples" component={Example} />
        <Route exact history={history} path="/plugins" component={Plugin} />
        <Route exact history={history} path="/started" component={Started} />
        <Route exact history={history} path="/components" component={Component} />
        <Route exact history={history} path="/themesberg" component={Themesberg} />
        <Route exact history={history} path="/About" component={About} />
        <Route exact history={history} path="/Blog" component={Blog} />
        <Route exact history={history} path="/Contact" component={Contact} />
        <Route exact history={history} path="/Themes" component={Themes} />
        <Route path="*">Not Found</Route>
      </Switch>
      <Footer />
    </main>
  );
}

// class Main extends React.PureComponent {
//   render() {
//     return (
//       <main>
//       <SideBar/>
//       <Header/>
//       <Table/>
//       <Footer/>
//     </main>
//     )
//   }
// }

export default React.memo(Main);
