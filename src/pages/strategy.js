import React from "react";
import SEO from "../components/molecules/SEO";
import PageStructure from '../components/molecules/PageStructure';
import Figure from '../components/molecules/Figure';
import { withTheme } from 'styled-components';

const Strategy = (props) => {
	return (
  <>
    <SEO title="Art director" />

    <PageStructure colour={props.theme.colours.rubyRed}>
    	<p>Ruby is an independent art director. Their work is primarily based in Branding, Marketing & Digital Design and Creative Programming.</p> 
      <p>They aim to help businesses communicate better through good design, writing and strategy.</p>
      <Figure 
        imgName="/images/uploads/fish.jpg" />
      <p>Hire Ruby to design your brand identity, build your website, program your next event or collaborate on a product (physical or digital.)</p>
      <p>Don’t hire Ruby to do SEO, or solve financial problems.</p>
      <p>Visit their full archive of work at <a href="http://archive.rubyph.com?subject=Hey!">archive.rubyph.com</a>.</p>
    </PageStructure>
  </>
  )
};

export default withTheme( Strategy );
