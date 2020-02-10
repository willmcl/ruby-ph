import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Footer from '../molecules/Footer';

const Holder = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 7.5vw 1fr;
  @media( ${props => props.theme.breakpoints.sm} ){
    grid-template-columns: 1fr 1fr;
  }
`;

const ColourBlock = styled.aside`
  width: 100%;
  height: 100%;
  background-color: ${props => props.colour};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media( ${props => props.theme.breakpoints.sm} ){
    padding: 3.75vw;
  }
`;

const ContentBlock = styled.div`
  padding: 3.75vw;
  p { 
    font-size: 5.75vw; 
    line-height: 1.4;
  }
  @media( ${props => props.theme.breakpoints.sm} ){
    display: flex;
    flex-direction: column;
    p { 
      font-size: 2.4vw; 
      max-width: 80%;
    }
  }
`;


class PageStructure extends Component {
  render() {
    return (
      <>
        <Holder>
          <ColourBlock colour={this.props.colour}>
            <Link to="/">arrow here</Link>
            <a href="mailto:hey@rubyph.com">hey@rubyph.com</a>
          </ColourBlock>

          <ContentBlock>
            {this.props.children}
          </ContentBlock>
        </Holder>

        <Footer />
      </>
    )
  }
}

export default PageStructure;
