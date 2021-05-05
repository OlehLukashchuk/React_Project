import React, { Suspense } from "react";
import SideBar from "../Side_Bar/sideBar";
import Header from "../Header/header";
import "../Main/main.css";
import Footer from "../Footer/footer";
import { Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
// import Edit from "../Pages/Edit/Edit";
const Volt = React.lazy(() => import("../Pages/Volt/Volt"));
const Overview = React.lazy(() => import("../Pages/Overview/Overview"));
const Book = React.lazy(() =>
  import("../Pages/Book/Book")
);
const Settings = React.lazy(() => import("../Pages/SettingPage/Settings"));
const Table = React.lazy(() => import("../Pages/Table/Table"));
const Example = React.lazy(() => import("../Pages/Examples/Example"));
const Plugin = React.lazy(() => import("../Pages/PluginsPage/Plugin"));
const Started = React.lazy(() => import("../Pages/Started/Started"));
const Component = React.lazy(() => import("../Pages/ComponentPage/Component"));
const Themesberg = React.lazy(() => import("../Pages/Themesberg/Themesberg"));
const About = React.lazy(() => import("../Pages/About/About"));
const Blog = React.lazy(() => import("../Pages/Blog/Blog"));
const Contact = React.lazy(() => import("../Pages/Contact/Contact"));
const Themes = React.lazy(() => import("../Pages/ThemesPage/Themes"));
const Error = React.lazy(() => import("../Pages/404/404"));
const Edit = React.lazy(() => import("../Pages/Edit/Edit"));
const NewBook = React.lazy(() => import("../Pages/NewBook/NewBook"));

const toPage = function (props, Page) {
  return (
    <Suspense
      fallback={
        <Loader type="ThreeDots" color="brown" height={100} width={100} className ="loader"/>
      }
    >
      <Page {...props} />
    </Suspense>
  );
};

function Main(props) {
  const { history } = props;
  return (
    <main>
      <SideBar />
      <Header />
      <Switch>
        <Route
          exact
          history={history}
          path="/"
          render={(props) => toPage(props, Volt)}
        />
        <Route
          exact
          history={history}
          path="/volt"
          render={(props) => toPage(props, Volt)}
        />
        <Route
          exact
          history={history}
          path="/overview"
          render={(props) => toPage(props, Overview)}
        />
        <Route
          exact
          history={history}
          path="/books"
          render={(props) => toPage(props, Book)}
        />
        <Route
          exact
          history={history}
          path="/books/edit/:id"
          render={(props) => toPage(props, Edit)}
        />
        <Route
          exact
          history={history}
          path="/newBook"
          render={(props) => toPage(props, NewBook)}
        />
        <Route
          exact
          history={history}
          path="/settings"
          render={(props) => toPage(props, Settings)}
        />
        <Route
          exact
          history={history}
          path="/tables"
          render={(props) => toPage(props, Table)}
        />
        <Route
          exact
          history={history}
          path="/examples"
          render={(props) => toPage(props, Example)}
        />
        <Route
          exact
          history={history}
          path="/plugins"
          render={(props) => toPage(props, Plugin)}
        />
        <Route
          exact
          history={history}
          path="/started"
          render={(props) => toPage(props, Started)}
        />
        <Route
          exact
          history={history}
          path="/components"
          render={(props) => toPage(props, Component)}
        />
        <Route
          exact
          history={history}
          path="/themesberg"
          render={(props) => toPage(props, Themesberg)}
        />
        <Route
          exact
          history={history}
          path="/About"
          render={(props) => toPage(props, About)}
        />
        <Route
          exact
          history={history}
          path="/Blog"
          render={(props) => toPage(props, Blog)}
        />
        <Route
          exact
          history={history}
          path="/Contact"
          render={(props) => toPage(props, Contact)}
        />
        <Route
          exact
          history={history}
          path="/Themes"
          render={(props) => toPage(props, Themes)}
        />
        <Route
          path="*"
          render={(props) => toPage(props, Error)}
        ></Route>
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
