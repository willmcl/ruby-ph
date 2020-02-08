import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled, { withTheme } from 'styled-components';
import Image from '../atoms/Image';

const Holder = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  @media( ${props => props.theme.breakpoints.sm} ){
    grid-template-columns: 1fr 1fr;
  }
`;

const ColourBlock = styled.div`
`;
const ContentBlock = styled.div`
`;


class PageStructure extends Component {
  render() {
    return (
      <Holder>
        <ColourBlock colour={this.props.theme.colours.red}>
          <p>arrow here</p>
        <ColourBlock/>

        <ContentBlock>
          <p>Ruby is an independent art director. Their work is primarily based in Branding, Marketing & Digital Design and Creative Programming.</p> 
          <p>They aim to help businesses communicate better through good design, writing and strategy.</p>
          <Image imgName="/images/uploads/tea-gardens-hotel.jpg"/>
          <p>Hire Ruby to design your brand identity, build your website, program your next event or collaborate on a product (physical or digital.) Don’t hire Ruby to do SEO, or solve financial problems.</p>
          <p>Visit their full archive of work at <a href="http://archive.rubyph.com">archive.rubyph.com</a></p>
        </ContentBlock>
      </Holder>
    )
  }
}

export default withTheme( PageStructure);
