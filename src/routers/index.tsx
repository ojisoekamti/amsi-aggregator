import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "components/Footer/Footer";
import Page404 from "containers/Page404/Page404";
import PageArchive from "containers/PageArchive/PageArchive";
import PageAuthor from "containers/PageAuthor/PageAuthor";
import PageSearch from "containers/PageSearch/PageSearch";
import PageSingle from "containers/PageSingle/PageSingle";
import PageSingleHasSidebar from "containers/PageSingle/PageSingleHasSidebar";
import PageSingleTemplate2 from "containers/PageSingle/PageSingleTemp2";
import PageSingleTemp2Sidebar from "containers/PageSingle/PageSingleTemp2Sidebar";
import PageSingleTemplate3 from "containers/PageSingle/PageSingleTemp3";
import PageSingleTemp3Sidebar from "containers/PageSingle/PageSingleTemp3Sidebar";
import PageAbout from "containers/PageAbout/PageAbout";
import PageContact from "containers/PageContact/PageContact";
import PageLogin from "containers/PageLogin/PageLogin";
import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageForgotPass from "containers/PageForgotPass/PageForgotPass";
import PageDashboard from "containers/PageDashboard/PageDashboard";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import HeaderContainer from "containers/HeaderContainer/HeaderContainer";
import PageHome from "containers/PageHome/PageHome";
import PageHomeDemo2 from "containers/PageHome/PageHomeDemo2";
import PageHomeDemo3 from "containers/PageHome/PageHomeDemo3";
import PageAuthorV2 from "containers/PageAuthor/PageAuthorV2";
import PageHomeDemo4 from "containers/PageHome/PageHomeDemo4";
import PageSearchV2 from "containers/PageSearch/PageSearchV2";
import MediaRunningContainer from "containers/MediaRunningContainer/MediaRunningContainer";
import PageSingleGallery from "containers/PageSingleGallery/PageSingleGallery";
import PageSingleAudio from "containers/PageSingleAudio/PageSingleAudio";
import PageSingleVideo from "containers/PageSingleVideo/PageSingleVideo";
import PageArchiveVideo from "containers/PageArchive/PageArchiveVideo";
import PageArchiveAudio from "containers/PageArchive/PageArchiveAudio";
import PageHomeDemo5 from "containers/PageHome/PageHomeDemo5";
import PageHomeDemo6 from "containers/PageHome/PageHomeDemo6";
import MediaRunningContainerForSafari from "containers/MediaRunningContainer/MediaRunningContainerForSafari";
import isSafariBrowser from "utils/isSafariBrowser";
import PageHomeDemo7 from "containers/PageHome/PageHomeDemo7";
import PageSingleTemp4Sidebar from "containers/PageSingle/PageSingleTemp4Sidebar";
import LayerHome from "containers/LayerHome/LayerHome";
import LayerHome2 from "containers/LayerHome2/LayerHome2";
import LayerHome3 from "containers/LayerHome3/LayerHome3";
import LayerHome4 from "containers/LayerHome4/LayerHome4";
import LayerHome5 from "containers/LayerHome5/LayerHome5";

export const pages: Page[] = [
  { path: "/", exact: true, component: LayerHome },
  { path: "/#", exact: true, component: LayerHome },
  //
  { path: "/home-header-style2", exact: true, component: LayerHome },
  { path: "/home-header-style2-logedin", exact: true, component: LayerHome },
  //
  { path: "/archive/:slug", component: PageArchive },
  { path: "/archive-video/:slug", component: PageArchiveVideo },
  { path: "/archive-audio/:slug", component: PageArchiveAudio },
  //
  { path: "/author/:slug", component: PageAuthor },
  { path: "/author-v2/:slug", component: PageAuthorV2 },
  //
  { path: "/single/:slug", component: PageSingleTemp3Sidebar },
  {
    path: "/single-sidebar/:slug",
    component: PageSingleTemplate3,
  },
  {
    path: "/single-template-2/:slug",
    component: PageSingleTemplate2,
  },
  {
    path: "/single-2-sidebar/:slug",
    component: PageSingleTemp2Sidebar,
  },
  {
    path: "/single-template-3/:slug",
    component: PageSingle,
  },
  {
    path: "/single-3-sidebar/:slug",
    component: PageSingleHasSidebar,
  },
  {
    path: "/single-4-sidebar/:slug",
    component: PageSingleTemp4Sidebar,
  },
  {
    path: "/single-gallery/:slug",
    component: PageSingleGallery,
  },
  {
    path: "/single-audio/:slug",
    component: PageSingleAudio,
  },
  {
    path: "/single-video/:slug",
    component: PageSingleVideo,
  },

  { path: "/search", component: PageSearch },
  { path: "/search-v2", component: PageSearchV2 },
  { path: "/about", component: PageAbout },
  { path: "/contact", component: PageContact },
  { path: "/page404", component: Page404 },
  { path: "/login", component: PageLogin },
  { path: "/signup", component: PageSignUp },
  { path: "/forgot-pass", component: PageForgotPass },
  { path: "/dashboard", component: PageDashboard },
  { path: "/subscription", component: PageSubcription },
  //
  { path: "/home-demo-2", component: PageHomeDemo2 },
  { path: "/home-demo-3", component: PageHomeDemo3 },
  { path: "/home-demo-4", component: PageHomeDemo4 },
  { path: "/home-demo-5", component: PageHomeDemo5 },
  { path: "/home-demo-6", component: PageHomeDemo6 },
  { path: "/home-demo-7", component: PageHomeDemo7 },
  { path: "/layer-home-2", component: LayerHome2 },
  { path: "/layer-home-3", component: LayerHome3 },
  { path: "/layer-home-4", component: LayerHome4 },
  { path: "/layer-home-5", component: LayerHome5 },
  //
];

const Routes = () => {
  return (
    <BrowserRouter
      basename={
        // import.meta.env.VITE_LRT_OR_RTL === "rtl" ? "/ncmaz-rtl" : "/ncmaz"
        ""
      }
    >
      <ScrollToTop />
      <HeaderContainer />
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return <Route key={path} component={component} exact={!!exact} path={path} />;
        })}
        <Route component={Page404} />
      </Switch>
      <Footer />
      {/* MEDIA */}

      {/* //is Safari on an apple touch-screen device */}
      {isSafariBrowser() ? <MediaRunningContainerForSafari /> : <MediaRunningContainer />}
    </BrowserRouter>
  );
};

export default Routes;
