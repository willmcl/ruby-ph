import React, { Component } from 'react';
import styled from 'styled-components';

const Holder = styled.footer`

`

const TextFooter = styled.div`
	text-align: center;
	text-transform: uppercase;
`

class Footer extends Component {
  render() {
    return ( 
  		<Holder className="Footer">
  			<TextFooter>	
	        <p>Contact — Archive — Instagram — Youtube — Shop</p>
	        <p>Copyright Ruby PH {new Date().getFullYear()} — Coded by <a href="https://www.willmclean.net">Will McLean</a></p>
	        </TextFooter>
			</Holder>
    )
  }
}

export default Footer;