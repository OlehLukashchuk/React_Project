import React, {
  Suspense,
} from "react";
import SideBar from "../Side_Bar/SideBar";
import Header from "../Header/Header";
import "../Main/Main.css";
import Footer from "../Footer/Footer";
import { Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";

const Volt = React.lazy(() => import("../Pages/Volt/Volt"));
const Overview = React.lazy(() => import("../Pages/Overview/Overview"));
const Book = React.lazy(() => import("../Pages/Book/Book"));
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
const Login = React.lazy(() => import("../Pages/Login/Login"));

const toPage = (
  props : any,
  Page: any
) => {
  return (
    <Suspense
      fallback={
        <div className="loader">
          <Loader type="ThreeDots" color="brown" height={100} width={100} />
        </div>
      }
    >
      <SideBar />
      <Header />
      <Page {...props} />
      <Footer />
    </Suspense>
  );
};

const toLogin = (
  props : any,
  Page: any
) => {
  return (
    <Suspense
      fallback={
        <div className="loader">
          <Loader type="ThreeDots" color="brown" height={100} width={100} />
        </div>
      }
    >
      <Page {...props} />
    </Suspense>
  );
};


function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={(props) => toPage(props, Volt)} />
        <Route exact path="/volt" render={(props) => toPage(props, Volt)} />
        <Route
          exact
          path="/overview"
          render={(props) => toPage(props, Overview)}
        />
        <Route exact path="/books" render={(props) => toPage(props, Book)} />
        <Route
          exact
          path="/books/edit/:id"
          render={(props) => toPage(props, Edit)}
        />
        <Route
          exact
          path="/newBook"
          render={(props) => toPage(props, NewBook)}
        />
        <Route
          exact
          path="/settings"
          render={(props) => toPage(props, Settings)}
        />
        <Route exact path="/tables" render={(props) => toPage(props, Table)} />
        <Route
          exact
          path="/examples"
          render={(props) => toPage(props, Example)}
        />
        <Route
          exact
          path="/plugins"
          render={(props) => toPage(props, Plugin)}
        />
        <Route
          exact
          path="/started"
          render={(props) => toPage(props, Started)}
        />
        <Route
          exact
          path="/components"
          render={(props) => toPage(props, Component)}
        />
        <Route
          exact
          path="/themesberg"
          render={(props) => toPage(props, Themesberg)}
        />
        <Route exact path="/About" render={(props) => toPage(props, About)} />
        <Route exact path="/Blog" render={(props) => toPage(props, Blog)} />
        <Route
          exact
          path="/Contact"
          render={(props) => toPage(props, Contact)}
        />
        <Route exact path="/Themes" render={(props) => toPage(props, Themes)} />
        <Route exact path="/Login" render={(props) => toLogin(props, Login)} />
        <Route path="*" render={(props) => toPage(props, Error)}></Route>
      </Switch>
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
