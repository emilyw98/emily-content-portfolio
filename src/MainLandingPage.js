import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import DownloadApp from "components/cta/DownloadApp.js";
import PavedPage from "pages/Paved.js";
import CandorPage from "pages/Candor.js";
import Scholarships360Page from "pages/Scholarships360.js";
import FamousBirthdaysPage from "pages/FamousBirthdays.js";
import TheMomProjectPage from "pages/TheMomProject.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import candorIconImageSrc from "images/candor.svg";
import theMomProjectIconImageSrc from "images/the-mom-project.svg";
import pavedIconImageSrc from "images/paved.svg";
import famousBirthdaysIconImageSrc from "images/famous-birthdays.svg";
import scholarshipsIconImageSrc from "images/scholarships360.svg";
import emilyImageSrc from "images/emily-wong.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-rose text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Hi, I'm < HighlightedText>Emily Wong</HighlightedText></>}
        description="I’m a content specialist, copywriter, and social media manager with a passion for growing companies and connecting with niche audiences. Keep reading to check out what I've been working on."
        imageSrc={emilyImageSrc}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Filler"
        watchVideoButtonText="Filler"
      />
      {/* <MainFeature
        subheading={<Subheading>Established Since 2014</Subheading>}
        heading={
          <>
            We've been serving for
            <wbr /> <HighlightedText>over 5 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      /> */}
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            My featured <HighlightedText>writing projects</HighlightedText>
          </>
        }
      />
      <MainFeature
        heading={
          <>
            Check out <HighlightedText>my portfolio</HighlightedText>
          </>
        }
        description = "Flip through an up-to-date summary on my work, content samples, and strategies for success in each of my projects and roles."
      />
      <Features
        heading={
          <>
            Browse my career history <HighlightedText>by company</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: pavedIconImageSrc,
            title: "Paved",
            description: "Content Lead",
            url: `/components/innerPages/PavedPage`
          },
          {
            imageSrc: candorIconImageSrc,
            title: "Candor",
            description: "Content Writer",
            url: `/components/innerPages/CandorPage`
          },
          {
            imageSrc: scholarshipsIconImageSrc,
            title: "Scholarships360",
            description: "Content Writer & Social Media Manager",
            url: `/components/innerPages/Scholarships360Page`
          },
          {
            imageSrc: theMomProjectIconImageSrc,
            title: "The Mom Project",
            description: "Content Intern",
            url: `/components/innerPages/TheMomProjectPage`
          },
          {
            imageSrc: famousBirthdaysIconImageSrc,
            title: "Famous Birthdays",
            description: "Writer & Editor",
            url: `/components/innerPages/FamousBirthdaysPage`
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      {/* <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+"
          },
          {
            key: "Chefs",
            value: "1500+"
          }
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
}