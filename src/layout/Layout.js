/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import React, { Fragment } from "react";
import WelcomeDialog from "../App/WelcomeDialog";
import Ticker from "../components/common/Ticker";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PolicyBanner from "../components/Privacy/PolicyBanner";
import Content from "./Content";

const Layout = () => {
  return (
    <Fragment>
      <Ticker />
      <Header />
      <WelcomeDialog />
      <PolicyBanner />
      <Content />
      <Footer />
    </Fragment>
  );
};

export default Layout;
