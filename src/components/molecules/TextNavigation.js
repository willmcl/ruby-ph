import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled, { withTheme } from 'styled-components';

const TextVersion = styled.nav`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-align: justify;
  p {
    width: 88vw;
    font-size: 5.5vw;
    line-height: 1.16;
  }

  @media( ${props => props.theme.breakpoints.sm} ){
    p {
      font-size: 2.5vw;
      max-width: 75vw;
    }
  }

`;

const TextHighlight = styled.span`
  background-color: ${props => props.colour};
  a {
    color: ${props => props.theme.colours.black};
  }
`;

class TextNavigation extends Component {
  render() {
    return (
      <TextVersion colour={this.props.theme.colours.rubyRed}>
      <p>Ruby PH is a <TextHighlight colour={this.props.theme.colours.rubyRed}><Link to="/strategy">strategy based art director</Link></TextHighlight>, <TextHighlight colour={this.props.theme.colours.rubyBlue}><Link to="/design">designer, writer, illustrator</Link></TextHighlight> and <TextHighlight colour={this.props.theme.colours.rubyYellow}><Link to="/content-creation">online content creator</Link></TextHighlight> from Sydney, Australia. click a colour to read more (downward arrow)</p>
      </TextVersion>
    )
  }
}

export default withTheme( TextNavigation);
