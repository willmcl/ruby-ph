import React from "react";
import SEO from "../components/molecules/SEO";
import PageStructure from '../components/molecules/PageStructure';
import Image from '../components/atoms/Image';
import { withTheme } from 'styled-components';

const Design = (props) => {
	return (
  <>
    <SEO title="Design" />

    <PageStructure colour={props.theme.colours.rubyBlue}>
    	<p>Ruby’s personal work is anchored by colour and purposefully free from a singular medium.</p> 
      <p>Ruby’s short form work is primarily illustrated online content and creative assets produced for online mediums like gifs and face filters</p>
			<p>Their larger bodies of work are often motivated by geometry, documentation, collection and how medium extends ideas.</p>
      <Image imgName="/images/uploads/fish.jpg"/>
      <p>Hire Ruby to write, illustrate or design something for you.</p>
			<p>Don’t hire Ruby for photography, 3D design or editing, they don’t do it.</p>
      <p>Visit their full archive of work at <a href="http://archive.rubyph.com?subject=Hey!">archive.rubyph.com</a></p>
    </PageStructure>
  </>
  )
};

export default withTheme( Design );	
