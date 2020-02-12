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
  a, a:visited { color: ${props => props.theme.colours.black} }
  a:hover { color: ${props => props.theme.colours.link} }
  a:focus { color: ${props => props.theme.colours.highlightPink} }

  @media( ${props => props.theme.breakpoints.sm} ){
    padding: 4.5vw 4.5vw 9vw;
    > * { display: block }
    .back-home { position: sticky; top: 4.5vw; }
    .contact-email { margin-bottom: -4.5vw; }
  }
`;

class ColourBlock extends Component {
  render() {
    return (
        <Holder colour={this.props.colour}>
          <Link className="back-home" to="/"><IconArrow iconName='Back Arrow' size='6vw'/></Link>
          <a className="contact-email" href="mailto:hey@rubyph.com">hey@rubyph.com</a>
        </Holder>
    )
  }
}

export default ColourBlock;
