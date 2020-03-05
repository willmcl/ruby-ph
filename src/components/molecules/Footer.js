import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Holder = styled.footer`
	min-height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
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

	.line { 
		width: 100%;
		display: flex; 
		flex-direction: row;
		justify-content: space-between;
		text-align: center;
		> * { width: unset; }
	}

	.hide {
		display: none;
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
		.line, .hide {
			display: inline;
		}
	}
`;

const link = {
	email : "mailto:hey@rubyph.com",
	archive : "archive.rubyph.com",
	ig : `http://instagram.com/irlrubyph`,
	yt : `https://www.youtube.com/channel/UCSGL5jOpXX6YuwXiUDRZ5Lw`,
	willsWebsites : `https://wills-websites.com/`,
};

class Footer extends Component {
  render() {
    return ( 
  		<Holder className="Footer">
  			<TextFooter className="textfooter">
  				<h2 className="nav-text">
  					<Link to='/' className="line">
	  					<span>Return </span>
	  					<span>to </span>
	  					<span>Home</span>
  					</Link>
					</h2>
	        <h2 className="nav-text">
	        	<span className="line">
		        	<a href={link.email}>Contact</a>
		        	<span> — </span>
		        	<a href={link.archive}>Archive</a>
		        	<span className="hide"> — </span>
	        	</span> 
	        	<span className="line">
		        	<a href={link.ig}>Instagram</a>
		        	<span> — </span>
		        	<a href={link.yt}>Youtube</a>
		        	<span className="hide"> — </span>
	        	</span> 
	        	<span className="line">
		        	<s>Podcast</s>
		        	<span> — </span>
		        	<s>Shop</s>
	        	</span> 
        	</h2>
	        <p className="nav-text">
	        	<a href={link.ig} className="line">
	        		<span>Designed </span>
	        		<span>by </span>
	        		<span>Ruby </span>
	        		<span>PH</span>
	        		<span className="hide"> — </span>
        		</a>
        		<a href={link.willsWebsites} className="line">
        			<span>Built </span>
        			<span>by </span>
        			<span>Will’s </span>
        			<span>Websites</span>
      			</a>
        	</p>
	        </TextFooter>
			</Holder>
    )
  }
}

export default Footer;
