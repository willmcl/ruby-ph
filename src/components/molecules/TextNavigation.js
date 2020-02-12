import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled, { withTheme } from 'styled-components';
import IconArrow from '../atoms/IconArrow';

const Holder = styled.nav`
  width:100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-align: justify;

  @media( ${props => props.theme.breakpoints.sm} ){
    text-align-last: justify;
  }

`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 88vw;
  height: calc(50vh - 12vw);
  h1 { 
    display: inline; 
    font-size: inherit;
    line-height: inherit;
    margin-top: 0;
  }
  .read-more-arrow {
    vertical-align: middle;
    width: calc(${props => props.theme.vwFontSize.base.nav} * 0.9);
    height: calc(${props => props.theme.vwFontSize.base.nav} * 0.9);
  }

  @media( ${props => props.theme.breakpoints.sm} ){
    display: block;
    justify-content: center;
    max-width: 75vw;
    max-height: calc(${props => props.theme.vwFontSize.sm.nav} * 3 * ${props => props.theme.vwLineHeight.nav});
    text-align-last: justify;

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
`;

const TextHighlight = styled.span`
  a { 
    color: ${props => props.theme.colours.black};
    background-color: ${props => props.colour};
  }
  a:hover { 
    color: ${props => props.theme.colours.link};
    background-color: transparent; 
  }
`;

const Desktop = styled.span `
  display: none;
  @media( ${props => props.theme.breakpoints.sm} ) {
    display: inline;
  }
`;

const Mobile = styled.span `
  display: block;
  margin-top: ${props => props.theme.vwFontSize.base.nav};
  @media( ${props => props.theme.breakpoints.sm} ) {
    display: none;
  }
`;

class TextNavigation extends Component {
  render() {
    return (
      <Holder>
        <TextWrapper className="nav-text"><h1>Ruby PH is a <TextHighlight colour={this.props.theme.colours.rubyRed}><Link to="/strategy">strategy based art director,</Link></TextHighlight><TextHighlight colour={this.props.theme.colours.rubyBlue}><Link to="/design"> designer, writer, illustrator</Link></TextHighlight> and <TextHighlight colour={this.props.theme.colours.rubyYellow}><Link to="/content-creation">online content creator</Link></TextHighlight> from Sydney, Australia.</h1> <Desktop>Click a colour to read more <IconArrow iconName='Read More Arrow' className='read-more-arrow' rotate='180'/></Desktop>
          <Mobile>Swipe left, right & down or tap a colour to read more <IconArrow iconName='Read More Arrow' className='read-more-arrow' rotate='180'/></Mobile>
        </TextWrapper>
      </Holder>
    )
  }
}

export default withTheme( TextNavigation);
