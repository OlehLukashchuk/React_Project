import React, { Suspense, memo, lazy } from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";

import { SideBar } from "../Side_Bar";
import { Header } from "../Header";
import { Footer } from "../Footer";

import "../Main/Main.scss";

const Volt = lazy(() => import("../../pages/Volt"));
const Overview = lazy(() => import("../../pages/Overview"));
const Book = lazy(() => import("../../pages/Book"));
const Settings = lazy(() => import("../../pages/SettingPage"));
const Table = lazy(() => import("../../pages/Table"));
const Example = lazy(() => import("../../pages/Examples"));
const Plugin = lazy(() => import("../../pages/PluginsPage"));
const Started = lazy(() => import("../../pages/Started"));
const Component = lazy(() => import("../../pages/ComponentPage"));
const Themesberg = lazy(() => import("../../pages/Themesberg"));
const About = lazy(() => import("../../pages/About"));
const Blog = lazy(() => import("../../pages/Blog"));
const Contact = lazy(() => import("../../pages/Contact"));
const Themes = lazy(() => import("../../pages/ThemesPage"));
const Error = lazy(() => import("../../pages/404"));
const Edit = lazy(() => import("../../pages/Edit"));
const NewBook = lazy(() => import("../../pages/NewBook"));
const Login = lazy(() => import("../../pages/Login"));

const toPage = (
  props: RouteComponentProps<{}, any, any>,
  Page: React.LazyExoticComponent<
    React.MemoExoticComponent<(props: any) => JSX.Element>
  >
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
  props: RouteComponentProps<{}, any, any>,
  Page: React.LazyExoticComponent<
    React.MemoExoticComponent<(props: any) => JSX.Element>
  >
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

export const Main = memo(() => {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={(props) => toPage(props, Volt)} />
        <Route path="/volt" render={(props) => toPage(props, Volt)} />
        <Route path="/overview" render={(props) => toPage(props, Overview)} />
        <Route exact path="/books" render={(props) => toPage(props, Book)} />
        <Route
          exact
          path="/books/edit/:id"
          render={(props) => toPage(props, Edit)}
        />
        <Route path="/newBook" render={(props) => toPage(props, NewBook)} />
        <Route path="/settings" render={(props) => toPage(props, Settings)} />
        <Route exact path="/tables" render={(props) => toPage(props, Table)} />
        <Route path="/examples" render={(props) => toPage(props, Example)} />
        <Route path="/plugins" render={(props) => toPage(props, Plugin)} />
        <Route path="/started" render={(props) => toPage(props, Started)} />
        <Route
          path="/components"
          render={(props) => toPage(props, Component)}
        />
        <Route
          path="/themesberg"
          render={(props) => toPage(props, Themesberg)}
        />
        <Route path="/about" render={(props) => toPage(props, About)} />
        <Route path="/blog" render={(props) => toPage(props, Blog)} />
        <Route path="/contact" render={(props) => toPage(props, Contact)} />
        <Route path="/themes" render={(props) => toPage(props, Themes)} />
        <Route path="/login" render={(props) => toLogin(props, Login)} />
        <Route path="*" render={(props) => toPage(props, Error)}></Route>
      </Switch>
    </main>
  );
});
