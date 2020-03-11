import React, { Component } from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/molecules/SEO';
import PageStructure from '../components/molecules/PageStructure';
import Figure from '../components/molecules/Figure';
import MarkdownConverter from '../components/atoms/MarkdownConverter';

class Page extends Component {
  render() {
    const { markdownRemark } = this.props.data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;
    return (

      <>
        <SEO title={`irlruphph - ${frontmatter.title}`}/>

        <PageStructure colour={`#${frontmatter.colour}`}>
          <MarkdownConverter content={frontmatter.intro}/>
          <Figure
            imgName={frontmatter.thumbnail}
            captionLine1={frontmatter.caption}/>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
        </PageStructure>
      </>
    )
  }
}

export default Page;

export const pageQuery = graphql`
    query($title: String!) {
        markdownRemark(frontmatter: { title: { eq: $title } }) {
            html
            frontmatter {
                title
                thumbnail
                colour
                caption
                intro
            }
        }
    }
`;
