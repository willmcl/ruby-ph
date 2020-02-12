import React, { Component } from 'react';
import { Link } from 'gatsby';
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

const TextFooter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: justify;
	text-transform: uppercase;
	padding: 4.5vw 0;
	* { 
		width: 76vw; 
		text-align-last: justify; 
		line-height: calc( ${props => props.theme.vwFontSize.base.nav} + 2rem );
	}
	span {
		display: block;
		width: 100%;
		> * {
			padding: 1rem 0;
			&:after { content: ' — '; }
			&:last-child:after { content: ''; }
		}
		> s { &:after { color: #fff; } }
	}
	@media( ${props => props.theme.breakpoints.sm} ){
		text-align: center;
		* { 
			width: 88vw; 
			margin: 0; 
			text-align-last: center;
			line-height: ${props => props.theme.vwLineHeight.nav};
		}
		*:first-child { margin-bottom: calc(${props => props.theme.vwLineHeight.nav} * ${props => props.theme.vwFontSize.sm.nav}); }
		span {
			display: inline;
			> * { padding: 0; }
			> *:last-child:after { content: ' — '; }
		}
		span:last-child > *:last-child:after { content: ''; }
	}
`

class Footer extends Component {
  render() {
    return ( 
  		<Holder className="Footer">
  			<ColourNavigation classProp="colournav" />
  			<TextFooter className="textfooter">
  				<h2 className="nav-text">
  					<Link to='/'>Return to Home</Link>
					</h2>
	        <h2 className="nav-text">
	        	<span><a href="mailto:hey@rubyph.com">Contact</a> <a href="archive.rubyph.com">Archive</a></span> <span><a href="http://instagram.com/irlrubyph">Instagram</a> <a href="https://www.youtube.com/channel/UCSGL5jOpXX6YuwXiUDRZ5Lw">Youtube</a></span> <span><s>Podcast</s> <s>Shop</s></span> 
        	</h2>
	        <p className="nav-text">
	        	<span>Designed by <Link to='/'>Ruby PH</Link></span> <span>Coded by <a href="https://wills-websites.com/">Will's Websites</a></span>
        	</p>
	        </TextFooter>
			</Holder>
    )
  }
}

export default Footer;