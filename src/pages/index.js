import React from "react";
import SEO from "../components/molecules/SEO";
import HomeNavigation from '../components/molecules/HomeNavigation';

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Home</h1>
    <HomeNavigation/>
  </>
);

export default IndexPage;
