import React, { Suspense } from "react";
import SideBar from "../Side_Bar/sideBar";
import Header from "../Header/header";
import "../Main/main.css";
import Footer from "../Footer/footer";
import { Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import Edit from '../Pages/Edit/Edit';
const Volt = React.lazy(() => import("../Pages/Volt/Volt"));
const Overview = React.lazy(() => import("../Pages/Overview/Overview"));
const Transaction = React.lazy(() =>
  import("../Pages/Transaction/Transaction")
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
// const Edit = React.lazy(() => import("../Pages/Edit/Edit"));

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
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Volt />
            </Suspense>
          )}
        />
        <Route
          exact
          history={history}
          path="/volt"
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Volt />
            </Suspense>
          )}
        />
        <Route
          exact
          history={history}
          path="/overview"
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Overview />
            </Suspense>
          )}
        />
        <Route
          exact
          history={history}
          path="/transactions"
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Transaction />
            </Suspense>
          )}
        />
        <Route
          exact
          history={history}
          path="/transactions/edit/:id"
          component= {Edit}
          // render={() => (
          //   <Suspense
          //     fallback={
          //       <Loader
          //         type="ThreeDots"
          //         color="#00BFFF"
          //         height={100}
          //         width={100}
          //         timeout={5000}
          //       />
          //     }
          //   >
          //     <Edit />
          //   </Suspense>
          // )}
        />
        <Route
          exact
          history={history}
          path="/settings"
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Settings />
            </Suspense>
          )}
        />
        <Route
          exact
          history={history}
          path="/tables"
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Table />
            </Suspense>
          )}
        />
        <Route
          exact
          history={history}
          path="/examples"
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Example />
            </Suspense>
          )}
        />
        <Route
          exact
          history={history}
          path="/plugins"
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Plugin />
            </Suspense>
          )}
        />
        <Route
          exact
          history={history}
          path="/started"
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Started />
            </Suspense>
          )}
        />
        <Route
          exact
          history={history}
          path="/components"
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Component />
            </Suspense>
          )}
        />
        <Route
          exact
          history={history}
          path="/themesberg"
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Themesberg />
            </Suspense>
          )}
        />
        <Route
          exact
          history={history}
          path="/About"
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <About />
            </Suspense>
          )}
        />
        <Route
          exact
          history={history}
          path="/Blog"
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Blog />
            </Suspense>
          )}
        />
        <Route
          exact
          history={history}
          path="/Contact"
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Contact />
            </Suspense>
          )}
        />
        <Route
          exact
          history={history}
          path="/Themes"
          render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Themes />
            </Suspense>
          )}
        />
        <Route path="*" render={() => (
            <Suspense
              fallback={
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              }
            >
              <Error />
            </Suspense>
          )}></Route>
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
