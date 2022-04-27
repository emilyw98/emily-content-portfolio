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
import calendarImage from "images/calendar.svg";
import profileImage from "images/profile.svg";
import editingImage from "images/editing.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>Writer & Editor</Subheading>}
        heading="Famous Birthdays"
        description="A media and entertainment platform that provides celebrity profiles, as well as popularity rankings based on user activity."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc={calendarImage}
      />
      <MainFeature1
        subheading={<Subheading>February - May 2021</Subheading>}
        heading="Profile Writing"
        buttonRounded={false}
        primaryButtonText="Contact Us"
        description="Conduct research via social media and news sources to create concise profiles up-and-coming celebrities, according to website style guidelines."
        imageSrc={profileImage}
        textOnLeft={false}
      />
      <MainFeature1
        subheading={<Subheading>May 2021 - February 2022</Subheading>}
        heading="Reviewing & Editing"
        description="Manage multiple high-traffic queues, updating published profiles for quality, accuracy, and style consistency."
        imageSrc={editingImage}
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
      />F
      {/* <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
