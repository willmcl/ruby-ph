import React, { Component } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import { convertToSlug } from '../../utils/helpers';

const List = styled.ul`
  list-style: none;
  display: inline;
  padding-left: 0;
  font-size: inherit;
  line-height: inherit;
`;

const TextHighlight = styled.li`
  display: inline;
  font-size: inherit;
  line-height: inherit;
  &:after { content: ', '; }
  &:last-child:after { content: ''; }
  &:last-child:before { content: '& '; }
  a { 
    color: ${props => props.theme.colours.black};
    background-color: ${props => props.colour};
    @-moz-document url-prefix() { 
      padding-top: 4px; 
      @media( ${props => props.theme.breakpoints.sm} ) {
        padding-top: 0.26vw; 
      }
    }
  }
  a:hover { 
    color: ${props => props.theme.colours.link};
    background-color: transparent; 
  }
`;

class TextNavigation extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
            query TextNavigationQuery {
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
            <List>
              {data.allMarkdownRemark.edges.map( edge => (
                <TextHighlight key={edge.node.id} colour={`#${edge.node.frontmatter.colour}`}>
                  <Link to={'/' + convertToSlug( edge.node.frontmatter.title )}>{edge.node.frontmatter.title}</Link>
                </TextHighlight>
              ) )}
            </List>
          )
        }}/>
    )
  }
}

export default TextNavigation;
