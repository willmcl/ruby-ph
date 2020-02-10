import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled, { withTheme } from 'styled-components';
import IconArrow from '../atoms/IconArrow';

const TextVersion = styled.nav`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-align: justify;
  h1 {
    width: 88vw;
    .read-more-arrow {
      vertical-align: middle;
      width: calc(${props => props.theme.vwFontSize.base.nav} * 0.9);
      height: calc(${props => props.theme.vwFontSize.base.nav} * 0.9);
    }
  }

  @media( ${props => props.theme.breakpoints.sm} ){
    text-align-last: justify;
    h1 {
      max-width: 75vw;
      .read-more-arrow {
        width: calc(${props => props.theme.vwFontSize.sm.nav} * 0.9);
        height: calc(${props => props.theme.vwFontSize.sm.nav} * 0.9);
      }
      :after {
        content: "";
        display: inline-block;
        width: 100%;
        line-height: 0;
      }
    }
  }

`;

const TextHighlight = styled.span`
  background-color: ${props => props.colour};
  a {
    color: ${props => props.theme.colours.black};
  }
`;

const NoWrap = styled.span `
  opacity: 0;
`;

class TextNavigation extends Component {
  render() {
    return (
      <TextVersion colour={this.props.theme.colours.rubyRed}>
        <h1 className="nav-text">Ruby PH is a <TextHighlight colour={this.props.theme.colours.rubyRed}><Link to="/strategy">strategy based art director,</Link></TextHighlight><TextHighlight colour={this.props.theme.colours.rubyBlue}><Link to="/design"> designer, writer, illustrator</Link></TextHighlight> and <TextHighlight colour={this.props.theme.colours.rubyYellow}><Link to="/content-creation">online content creator</Link></TextHighlight> from Sydney, Australia. Click a colour to read more <IconArrow iconName='Read More Arrow' className='read-more-arrow' rotate='180'/></h1>
      </TextVersion>
    )
  }
}

export default withTheme( TextNavigation);
