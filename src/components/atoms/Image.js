import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Gif = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

class Image extends Component {
  render() {
    if( this.props.imgName.includes('.gif') ) {
      return (
        <Gif alt="Work" src={this.props.imgName}/>
      );
    } else {
      return (
        <StaticQuery
          query={graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    originalName
                  }
                }
              }
            }
          }
        `}
          render={data => {
            const image = data.allImageSharp.edges.find(
              edge => edge.node.fluid.originalName === this.props.imgName.replace( /^.*[\\/]/, '' )
            );
            if ( !image ) {
              return null
            }
            return <Img fluid={image.node.fluid}/>
          }}
        />
      )
    }
  }
}

export default Image;
