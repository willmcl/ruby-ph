import React from "react";
import SEO from "../components/molecules/SEO";
import HomeNavigation from '../components/molecules/HomeNavigation';

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeNavigation/>
  </>
);

export default IndexPage;
