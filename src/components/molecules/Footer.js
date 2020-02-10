import React, { Component } from 'react';
import styled from 'styled-components';
import ColourNavigation from '../molecules/ColourNavigation';

const Holder = styled.footer`
	text-align: center;
	@media( ${props => props.theme.breakpoints.sm} ){
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 100px 100px;
		grid-template-areas:
			"colournav ."
			"textfooter textfooter";
  }

  .colournav {
  	grid-area: colournav;
  }

  .textfooter {
  	grid-area: textfooter;
  }
`

const NoBreak = styled.span`
	white-space: nowrap;
`

const TextFooter = styled.div`
	text-align: justify;
	text-transform: uppercase;
	@media( ${props => props.theme.breakpoints.sm} ){
		text-align: center;
	}
`

class Footer extends Component {
  render() {
    return ( 
  		<Holder className="Footer">
  			<ColourNavigation classProp="colournav" />
  			<TextFooter className="textfooter">	
	        <h2 className="nav-text">
	        	<a href="mailto:hey@rubyph.com">Contact</a> — <a href="archive.rubyph.com">Archive</a> — <a href="http://instagram.com/irlrubyph">Instagram</a> — <a href="https://www.youtube.com/channel/UCSGL5jOpXX6YuwXiUDRZ5Lw">Youtube</a> — <s>Podcast</s> — <s>Shop</s> 
        	</h2>
	        <p className="nav-text">
	        	Designed by Ruby PH — <NoBreak>Coded by <a href="https://www.willmclean.net">Will McLean</a></NoBreak>
        	</p>
	        </TextFooter>
			</Holder>
    )
  }
}

export default Footer;