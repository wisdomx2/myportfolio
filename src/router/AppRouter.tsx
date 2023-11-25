import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalFonts } from "../styles/GlobalFonts";
import { GlobalStyles } from "../styles/GlobalStyle";
import Main from "../pages/Main/Main";
import SignIn from "../pages/SignIn/SignIn";
import Hello from "../pages/Hello/Hello";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";
import ApplicationLayout from "../layouts/common/ApplicationLayout";

import ScrollToTop from "../components/common/ScrollToTop/index";

function AppRouter() {
  return (
    <ApplicationLayout>
      <BrowserRouter>
        <GlobalFonts />
        <GlobalStyles />
        <ScrollToTop />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/" element={<Main />} />
          <Route path="/projectdetail/:projectId" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </ApplicationLayout>
  );
}
export default AppRouter;
