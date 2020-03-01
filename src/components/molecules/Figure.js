import React, { Component } from 'react';
import Image from '../atoms/Image';
import styled, { withTheme } from 'styled-components';

const Holder = styled.figure`
  margin: 5rem 0;
  width: 100%;
  figcaption { 
    ${props => props.theme.typeStyles(2)} 
    margin-top: 2rem;
  }
  @media( ${props => props.theme.breakpoints.sm} ){
    max-width: 80%;
    align-self: flex-end;
  }
`

class Figure extends Component {
    render() {
      if( this.props.captionLine1 || this.props.captionLine2 ) {
          return (
            <Holder>
              <Image imgName={this.props.imgName}/>
              <figcaption>{this.props.captionLine1}<br/>{this.props.captionLine2}</figcaption>
            </Holder>
          )
        } else {
          return (
            <Holder>
              <Image imgName={this.props.imgName}/>
            </Holder>
            )
        }
    }
}

export default withTheme(Figure)
