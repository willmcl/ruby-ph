import React, { Component } from 'react';
import styled from 'styled-components';
import ColourBlock from '../molecules/ColourBlock';
import Footer from '../molecules/Footer';

const Holder = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 7.5vw 1fr;
  @media( ${props => props.theme.breakpoints.sm} ){
    grid-template-columns: 1fr 1fr;
  }
`;

const ContentBlock = styled.section`
  padding: 4.5vw 2vw 80px 4.5vw;
  p { 
    font-size: ${props => props.theme.vwFontSize.base.para}; 
    line-height: ${props => props.theme.vwLineHeight.para};
    &:first-child { margin-top: 0; }
    &:last-child { margin-bottom: 0; }
  }
  @media( ${props => props.theme.breakpoints.sm} ){
    display: flex;
    flex-direction: column;
    padding-bottom: 4.5vw;
    p { 
      font-size: ${props => props.theme.vwFontSize.sm.para}; 
      max-width: 80%;
    }
  }
`;


class PageStructure extends Component {
  render() {
    return (
      <>
        <Holder>
          <ColourBlock colour={this.props.colour}/>

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
