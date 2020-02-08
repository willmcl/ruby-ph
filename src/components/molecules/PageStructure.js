import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Holder = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  @media( ${props => props.theme.breakpoints.sm} ){
    grid-template-columns: 1fr 1fr;
  }
`;

const ColourBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.colour};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2vw;
`;
const ContentBlock = styled.div`
  padding: 2vw;
`;


class PageStructure extends Component {
  render() {
    return (
      <Holder>
        <ColourBlock colour={this.props.colour}>
          <Link to="/">arrow here</Link>
          <a href="mailto:hey@rubyph.com">hey@rubyph.com</a>
        </ColourBlock>

        <ContentBlock>
          {this.props.children}
        </ContentBlock>
      </Holder>
    )
  }
}

export default PageStructure;
