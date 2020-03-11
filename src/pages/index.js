import React, { Component } from "react";
import styled from 'styled-components';
import SEO from "../components/molecules/SEO";
import TextNavigation from '../components/molecules/TextNavigationHolder';
import ColourNavigation from '../components/molecules/ColourNavigation';
import ScrollPopUp from '../components/atoms/ScrollPopUp';

const Holder = styled.nav`
	width: 100%;
	height: 100vh;
	display: grid;
  grid-template-rows: 50% 50%;
  position: relative;
  overflow: hidden;
`;

class IndexPage extends Component {

  render() {
    return (
      <Holder>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <TextNavigation />
        <ColourNavigation />
        <ScrollPopUp />
      </Holder>
    )
  }
}

export default IndexPage;
