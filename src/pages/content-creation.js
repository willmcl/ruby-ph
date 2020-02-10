import React from "react";
import SEO from "../components/molecules/SEO";
import PageStructure from '../components/molecules/PageStructure';
import Figure from '../components/molecules/Figure';
import { withTheme } from 'styled-components';

const ContentCreation = (props) => {
	return (
  <>
    <SEO title="Content Creation" />

    <PageStructure colour={props.theme.colours.rubyYellow}>
    	<p>Ruby is a digital content creator operating under the name <span className="highlight-pink">irlrubyph</span>.</p> 
      <p>Ruby’s digital work is made for creative practitioners with the aim to motivate, encourage, inform and share advice about life. It is also an opportunity to make work that is silly on purpose.</p>
      <Figure 
        imgName="/images/uploads/2019-travel-advice-for-melbourne-illustration.png"
        captionLine1="Travel Advice for Melbourne"
        captionLine2="Illustration, 2019"/>
      <p>Hire Ruby to speak at your event, design a digital asset for you, endorse a product, or collaborate on a new one with you.</p>
			<p>Don’t hire Ruby to film or photograph things.</p>
      <p>Visit their <a href="https://www.youtube.com/channel/UCSGL5jOpXX6YuwXiUDRZ5Lw">Youtube Channel</a>, <s>Listen to their Podcast</s> or view their work on <a href="http://instagram.com/irlrubyph">Instagram</a>.</p>
    </PageStructure>
  </>
  )
};

export default withTheme( ContentCreation );
