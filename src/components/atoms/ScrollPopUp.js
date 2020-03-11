import React, { Component } from 'react';
import styled from 'styled-components';

const Holder = styled.p`
  position: absolute;
  bottom: 2rem;
  left: 25%;
  text-align: center;
  width: 50%;
  opacity: ${p => p.active ? 1 : 0};
  transform: ${p => p.active ? 'translateY(0)' : 'translateY(6px)'};
  transition: 250ms ease-out;
  transition-property: opacity, transform;
  text-transform: uppercase;
`;

class ScrollPopUp extends Component {
  state = {
    scrolled: false,
  }

  componentDidMount() {
    document.addEventListener('wheel', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('wheel', this.handleScroll);
  }

  handleScroll = () => {
    this.setState( { scrolled: true } );
    setTimeout( () => { 
      this.setState( { 
        scrolled: false 
      } )
    }, 3000 );
  }

  render() {
    return (
      <Holder
        className="nav-text"
        active={this.state.scrolled}>
        Select a colour
      </Holder>
    )
  }
}

export default ScrollPopUp;