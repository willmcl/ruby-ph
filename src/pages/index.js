import React from "react";
import styled from 'styled-components';
import SEO from "../components/molecules/SEO";
import TextNavigation from '../components/molecules/TextNavigation';
import ColourNavigation from '../components/molecules/ColourNavigation';

const Holder = styled.nav`
	width: 100%;
	height: 100vh;
	display: grid;
  grid-template-rows: 50% 50%;
  @media( ${props => props.theme.breakpoints.sm} ){
  }
`;

const IndexPage = () => (
  <Holder>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <TextNavigation />
    <ColourNavigation />
  </Holder>
);

export default IndexPage;
