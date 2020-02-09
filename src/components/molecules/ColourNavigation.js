import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled, { withTheme } from 'styled-components';

const ColourVersion = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  @media( ${props => props.theme.breakpoints.sm} ){
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Colour = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.colour};
`;

class ColourNavigation extends Component {
  render() {
    return (
      <ColourVersion className={this.props.classProp}>
        <Link to="/strategy">
          <Colour colour={this.props.theme.colours.rubyRed}/>
        </Link>
        
        <Link to="/design">
          <Colour colour={this.props.theme.colours.rubyBlue}/>
        </Link>

        <Link to="/content-creation">
          <Colour colour={this.props.theme.colours.rubyYellow}/>
        </Link>
      </ColourVersion>
    )
  }
}

export default withTheme( ColourNavigation);
