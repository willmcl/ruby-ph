import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled, { withTheme } from 'styled-components';

const Holder = styled.nav`
  width: 100%;
`;

const TextVersion = styled.nav`
  max-width: 80rem;
  margin: 10rem 0;
`;
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
  height: 0;
  padding-bottom: 50%;
  background-color: ${props => props.colour};
`;

class HomeNavigation extends Component {
  render() {
    return (
      <Holder>
        <TextVersion>
        <p>Ruby PH is a <Link to="/strategy">strategy based art director</Link>, <Link to="/design">designer, writer, illustrator</Link> and <Link to="/content-creation">online
          content creator</Link> from Sydney, Australia. click a colour to read more (downward arrow)</p>
        </TextVersion>
        <ColourVersion>
          <Link to="/strategy">
            <Colour colour={this.props.theme.colours.red}/>
          </Link>
          
          <Link to="/design">
            <Colour colour={this.props.theme.colours.yellow}/>
          </Link>

          <Link to="/content-creation">
            <Colour colour={this.props.theme.colours.blue}/>
          </Link>
        </ColourVersion>
      </Holder>
    )
  }
}

export default withTheme( HomeNavigation);
