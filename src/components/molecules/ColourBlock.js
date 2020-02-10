import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import IconArrow from '../atoms/IconArrow';

const Holder = styled.aside`
  width: 100%;
  height: 100%;
  background-color: ${props => props.colour};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: ${props => props.theme.vwFontSize.sm.para};
  line-height: ${props => props.theme.vwLineHeight.para};
  > * { display: none; }
  @media( ${props => props.theme.breakpoints.sm} ){
    padding: 4.5vw;
    > * { display: block }
  }
`;

class ColourBlock extends Component {
  render() {
    return (
        <Holder colour={this.props.colour}>
          <Link to="/"><IconArrow width='6vw' height='6vw' /></Link>
          <a href="mailto:hey@rubyph.com">hey@rubyph.com</a>
        </Holder>
    )
  }
}

export default ColourBlock;
