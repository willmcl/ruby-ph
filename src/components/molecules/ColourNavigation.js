import React, { Component } from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import styled, { withTheme } from 'styled-components';
import { convertToSlug } from '../../utils/helpers';

const ColourVersion = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  @media( ${props => props.theme.breakpoints.sm} ){
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Colour = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.colour};
`;

class ColourNavigation extends Component {
  render() {
    return (
        <StaticQuery
          query={graphql`
            query ColourNavigationQuery {
            allMarkdownRemark(
              sort: {
                fields: [frontmatter___date]
                order: DESC
              }
            ){
              edges {
                node{
                  id
                  frontmatter {
                    title
                    colour
                  }
                }
              }
            }
          }`}
          render={data => {
            return (
              <ColourVersion className={this.props.classProp}>
                {data.allMarkdownRemark.edges.map( edge => (
                  <Link key={edge.node.id} to={'/' + convertToSlug( edge.node.frontmatter.title )}>
                    <Colour colour={`#${edge.node.frontmatter.colour}`}/>
                  </Link>
                ) )}
              </ColourVersion>
            )
          }}/>
    )
  }
}

export default withTheme( ColourNavigation);
