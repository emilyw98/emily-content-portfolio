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
import marketplaceImageSrc from "images/marketplace.svg";
import copywritingImageSrc from "images/copywriting.svg";
import contentManagementImageSrc from "images/content-management.svg";
import socialMediaImageSrc from "images/social-media.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>Content Lead</Subheading>}
        heading="Paved"
        description = "A sponsored content marketplace aimed at connecting newsletter advertisers and publishers to create sponsorship campaigns that resonate with engaged audiences."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc={marketplaceImageSrc}
      />
      <MainFeature1
        subheading={<Subheading>September 2021 - Now</Subheading>}
        heading="Copywriting"
        description = {<ul><li>• Write copy for Facebook and Google ads</li><li>• Draft email communications for company announcements and feature releases</li><li>• Write and review website and landing page copy</li></ul>}
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc={copywritingImageSrc}
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>September 2021 - Now</Subheading>}
        heading="Content Management"
        description = 
        {<ul>
          <li>• Create quarterly blog strategy based on SEO and industry trends, targeting two main audiences: advertisers and publishers</li>
          <li>• Draft biweekly SEO-optimized blog posts based on Clearscope reports</li>
          <li>• Review and edit drafts with internal SMEs</li>
          <li>• Publish blog posts to WordPress with brand-consistent images, internal links, and CTAs</li>
          <li>• Track blog performance using Google Analytics, Google Search Console, and Heap to inform future strategies</li>
          <li>• Coordinate with external organizations to write sponsored articles to boost incoming traffic</li>
        </ul>}
        imageSrc={contentManagementImageSrc}
      />
      <MainFeature1
        subheading={<Subheading>September 2021 - Now</Subheading>}
        heading="Social Media"
        description = 
        {<ul>
          <li>• Write and post company announcements as needed</li>
          <li>• Promote new and updated blog posts on Facebook, Twitter, and LinkedIn</li>
          <li>• Create and publish click-through guides based on educational blog content</li>
        </ul>}
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc={socialMediaImageSrc}
        textOnLeft={false}
      />
      {/* <TeamCardGrid 
        subheading={<Subheading>September 2021 - Now</Subheading>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
