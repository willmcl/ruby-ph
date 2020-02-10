import React, { Component } from 'react';
import styled from 'styled-components';
import ColourNavigation from '../molecules/ColourNavigation';

const Holder = styled.footer`
	min-height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media( ${props => props.theme.breakpoints.sm} ){
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 50% 50%;
		grid-template-areas:
			"colournav ."
			"textfooter textfooter";
		min-height: 100vh;
  }

  .colournav {
  	grid-area: colournav;
  	display: none;
		@media( ${props => props.theme.breakpoints.sm} ){
			display: inherit;
			height: 100%;
		}
  }

  .textfooter {
  	grid-area: textfooter;
  }
`

const NoBreak = styled.span`
	white-space: nowrap;
`

const TextFooter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: justify;
	text-transform: uppercase;
	* { 	max-width: 88vw; }
	@media( ${props => props.theme.breakpoints.sm} ){
		text-align: center;
		* { margin: 0; }
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