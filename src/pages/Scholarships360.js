import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import scholarshipImage from "images/scholarship.svg";
import contentWritingImage from "images/content-writing.svg";
import socialMediaImage from "images/social-media.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>Content Writer & Social Media Manager</Subheading>}
        heading="Scholarships360"
        description="A platform that connects students to scholarships and financial aid resources, providing students, parents, and educators with personalized, unbiased advice so they can make smart financial moves when it comes time to pay for college."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc={scholarshipImage}
      />
      <MainFeature1
        subheading={<Subheading>March 2021 - July 2021</Subheading>}
        heading="Content Writing"
        description="Wrote educational articles aimed at helping prospective and current college students, centering on topics including scholarships, college admissions, careers, and personal finance."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc={contentWritingImage}
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>July 2021 - Now</Subheading>}
        heading="Social Media"
        description=
        {<ul>
            <li>• Conducted competitor research through a SWAT analysis to build an Instagram growth strategy</li>
            <li>• Created a style and design guide to standardize Instagram posts</li>
            <li>• Design and schedule Instagram posts 5x per week</li>
        </ul>}
        imageSrc={socialMediaImage}
        // cards={[
        //   {
        //     imageSrc: SupportIconImage,
        //     title: "24/7 Support",
        //     description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
        //   },
        //   {
        //     imageSrc: ShieldIconImage,
        //     title: "Strong Teams",
        //     description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
        //   },
        //   {
        //     imageSrc: CustomerLoveIconImage,
        //     title: "Customer Satisfaction",
        //     description: "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
        //   },
        // ]}
        linkText=""
      />
      {/* <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
