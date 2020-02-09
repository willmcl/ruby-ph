import React, { Component } from 'react';
import styled from 'styled-components';
import ColourNavigation from '../molecules/ColourNavigation';

const Holder = styled.footer`
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

const TextFooter = styled.div`
	text-align: center;
	text-transform: uppercase;
`

class Footer extends Component {
  render() {
    return ( 
  		<Holder className="Footer">
  			<ColourNavigation classProp="colournav" />
  			<TextFooter className="textfooter">	
	        <p>Contact — Archive — Instagram — Youtube — Shop</p>
	        <p>Copyright Ruby PH {new Date().getFullYear()} — Coded by <a href="https://www.willmclean.net">Will McLean</a></p>
	        </TextFooter>
			</Holder>
    )
  }
}

export default Footer;