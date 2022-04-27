import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

import startupLiquidityImage from "images/startup-liquidity.jpeg";
import bondsVsStocksImage from "images/bonds-vs-stocks.jpeg";
import legalTechImage from "images/legal-tech.jpeg";
import hedgeFundsImage from "images/hedge-funds.jpeg";
import mattUphamImage from "images/matt-upham.jpeg";
import airbnbImage from "images/airbnb.jpeg";
import foodTechImage from "images/food-tech.jpeg";
import FacebookUniversityAnalyticsImage from "images/facebook-university-analytics.jpeg";
import stockRefreshImage from "images/stock-refresh.jpeg";
import allenCheungImage from "images/allen-cheung.png";
import employeeStockOptionsImage from "images/employee-stock-options.jpeg";
import goldmanSachsImage from "images/goldman-sachs.jpeg";

import budgetImage from "images/budget.jpeg";
import continuedInterestImage from "images/continued-interest.jpeg";
import waitlistImage from "images/waitlist.jpeg";
import coverLetterImage from "images/cover-letter.jpeg";
import cantPayImage from "images/cant-pay.jpeg";
import onlineTutoringImage from "images/online-tutoring.jpeg";
import textbooksImage from "images/textbooks.jpeg";
import businessManagementImage from "images/business-management.jpeg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "My featured work",
  tabs = {
    Paved: [
      {
        imageSrc:
          "https://www.paved.com/blog/wp-content/uploads/2021/11/shutterstock_1922347511-1536x795.jpg",
        title: "How To Optimize Your Holiday Advertising Budget With Newsletter Sponsorships",
        content: "Paved Blog",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://www.paved.com/blog/how-to-optimize-your-holiday-advertising-budget-with-newsletter-sponsorships"
      },
      {
        imageSrc:
          "https://www.paved.com/blog/wp-content/uploads/2021/12/email-conference-1536x845.jpg",
        title: "2022 Email Marketing Conferences to Add to Your Calendar",
        content: "Paved Blog",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://www.paved.com/blog/2022-email-marketing-conferences-to-add-to-your-calendar/"
      },
      {
        imageSrc:
          "https://www.paved.com/blog/wp-content/uploads/2022/02/experiential-marketing-blog-1536x970.png",
        title: "What Does Experiential Marketing Look Like in a Digital World?",
        content: "Paved Blog",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://www.paved.com/blog/experiential-marketing-in-a-digital-world/"
      },
      {
        imageSrc:
          "https://www.paved.com/blog/wp-content/uploads/2021/12/shutterstock_2018479490.jpg",
        title: "The Ultimate Guide to Coping With the Death of Email Open Rates",
        content: "Paved Blog",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://www.paved.com/blog/the-ultimate-guide-to-coping-with-the-death-of-email-open-rates/"
      },
      {
        imageSrc:
          "https://www.paved.com/blog/wp-content/uploads/2021/11/shutterstock_1433498078-1536x1176.png",
        title: "How To Design a Sponsorship Placement To Maximize Revenue",
        content: "Paved Blog",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://www.paved.com/blog/how-to-design-a-sponsorship-placement-to-maximize-revenue/"
      },
      {
        imageSrc:
          "https://www.paved.com/blog/wp-content/uploads/2022/01/email-referral.png",
        title: "How To Launch an Email Referral Program in 5 Steps",
        content: "Paved Blog",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://www.paved.com/blog/how-to-launch-an-email-referral-program-in-5-steps/"
      },
      {
        imageSrc:
          "https://www.paved.com/blog/wp-content/uploads/2022/02/ab-testing-1536x970.png",
        title: "A Step-by-Step Guide to A/B Testing Your Email Newsletter",
        content: "Paved Blog",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://www.paved.com/blog/a-step-by-step-guide-to-a-b-testing-your-email-newsletter/"
      },
      {
        imageSrc:
          "https://www.paved.com/blog/wp-content/uploads/2022/02/programmatic-advertising-1536x970.png",
        title: "A Marketer’s Guide to Programmatic Advertising",
        content: "Paved Blog",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://www.paved.com/blog/a-marketers-guide-to-programmatic-advertising/"
      },
      {
        imageSrc:
          "https://cdn.searchenginejournal.com/wp-content/uploads/2021/11/featured-image-3-61a5020fa1983-sej-1520x800.png",
        title: "How Newsletter Sponsorships Can Improve Your Marketing Strategy",
        content: "SEJ | Sponsored",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://www.searchenginejournal.com/paved-newsletter-sponsorships-strategy/427897/"
      },
      {
        imageSrc:
          "https://uploads-ssl.webflow.com/60597bf3dc4cbafe29158491/619e62286fce235b938cdecb_shutterstock_1017256963.jpg",
        title: "How To Monetize Your Newsletter With Sponsorships",
        content: "Newsletter Crew | Sponsored",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://www.newslettercrew.com/blog/how-to-monetize-your-newsletter-with-sponsorships"
      },
      {
        imageSrc:
          "https://www.paved.com/blog/wp-content/uploads/2022/03/email-marketing-1536x970.png",
        title: "Why Newsletter Sponsorships Are the Future of Targeted Advertising",
        content: "Marketing Dive | Sponsored",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://www.marketingdive.com/spons/why-newsletter-sponsorships-are-the-future-of-targeted-advertising/616787/"
      },
      {
        imageSrc:
          "https://www.paved.com/blog/wp-content/uploads/2022/01/newsletter-sponsorships-pdf-1024x720.jpg",
        title: "How to Expand Your Reach with Newsletter Advertising",
        content: "Social Media Today | Sponsored",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://www.socialmediatoday.com/spons/how-to-expand-your-reach-with-newsletter-advertising/617397/"
      }
    ],
    Candor:
      [
        {
          imageSrc:startupLiquidityImage,
          title: "Startup Liquidity Events: What to Expect",
          content: "Investing",
          price: "0",
          rating: "0",
          reviews: "0",
          url: "https://candor.co/articles/money-matters/startup-liquidity-events-what-to-expect"
        },
        {
          imageSrc:bondsVsStocksImage,
          title: "Bonds vs. Stocks: What's the Difference?",
          content: "Investing",
          price: "0",
          rating: "0",
          reviews: "0",
          url: "https://candor.co/articles/money-matters/bonds-vs-stocks-what-you-need-to-know"
        },
        {
          imageSrc:legalTechImage,
          title: "Top 5 Legal Tech Trends for 2021",
          content: "Roundup",
          price: "0",
          rating: "0",
          reviews: "0",
          url: "https://candor.co/articles/career-paths/top-5-legal-tech-trends-for-2021"
        },
        {
          imageSrc:hedgeFundsImage,
          title: "Top Hedge Funds in the US by 2020 Profits",
          content: "Roundup",
          price: "0",
          rating: "0",
          reviews: "0",
          url: "https://candor.co/articles/money-matters/top-hedge-funds-in-the-us-by-2020-profits"
        },
        {
          imageSrc:mattUphamImage,
          title: "Q&A with a Software TikToker",
          content: "Q&A",
          price: "0",
          rating: "0",
          reviews: "0",
          url: "https://candor.co/articles/profiles/q-and-a-with-a-software-tiktoker"
        },
        {
          imageSrc:airbnbImage,
          title: "Interview with a Former Airbnb Intern",
          content: "Q&A",
          price: "0",
          rating: "0",
          reviews: "0",
          url: "https://candor.co/articles/profiles/interview-airbnb-internship"
        },
        {
          imageSrc:foodTechImage,
          title: "Top 5 FoodTech Trends of 2021",
          content: "Roundup",
          price: "0",
          rating: "0",
          reviews: "0",
          url: "https://candor.co/articles/career-paths/top-5-foodtech-trends-of-2020"
        },
        {
          imageSrc:FacebookUniversityAnalyticsImage,
          title: "Is the Facebook University Analytics Program right for you?",
          content: "Career Paths",
          price: "0",
          rating: "0",
          reviews: "0",
          url: "https://candor.co/articles/interview-prep/is-the-fbu-analytics-program-right-for-you"
        },
        {
          imageSrc:stockRefreshImage,
          title: "What's a Stock Refresh and Why Should You Care?",
          content: "Investing",
          price: "0",
          rating: "0",
          reviews: "0",
          url: "https://candor.co/articles/salary-negotiation/what-s-a-stock-refresh-and-why-should-you-care"
        },
        {
          imageSrc:allenCheungImage,
          title: "Becoming an Engineering Manager in Silicon Valley",
          content: "Q&A",
          price: "0",
          rating: "0",
          reviews: "0",
          url: "https://candor.co/articles/profiles/becoming-an-engineering-manager-in-silicon-valley"
        },
        {
          imageSrc:employeeStockOptionsImage,
          title: "Employee Stock Options: What You Need to Know",
          content: "Investing",
          price: "0",
          rating: "0",
          reviews: "0",
          url: "https://candor.co/articles/salary-negotiation/employee-stock-options-what-you-need-to-know"
        },
        {
          imageSrc:goldmanSachsImage,
          title: "What's It Like to Be a Summer Analyst at Goldman Sachs?",
          content: "Career Paths",
          price: "0",
          rating: "0",
          reviews: "0",
          url: "https://candor.co/articles/career-paths/what-s-it-like-to-be-a-summer-analyst-at-goldman-sachs"
        }
      ],
    Scholarships360:
    [
      {
        imageSrc:budgetImage,
        title: "How To Create a Budget as a College Student",
        content: "Personal Finance",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://scholarships360.org/personal-finance/how-to-create-a-budget-as-a-college-student/"
      },
      {
        imageSrc:continuedInterestImage,
        title: "How To Write a Letter of Continued Interest (With Example)",
        content: "College Admissions",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://scholarships360.org/college-admissions/how-to-write-a-letter-of-continued-interest-with-example/"
      },
      {
        imageSrc:waitlistImage,
        title: "College Waitlist: What Students Need to Know",
        content: "College Admissions",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://scholarships360.org/college-admissions/what-does-waitlisted-mean/"
      },
      {
        imageSrc:coverLetterImage,
        title: "How To Write a Cover Letter for an Internship",
        content: "Careers",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://scholarships360.org/careers/how-to-write-a-cover-letter-for-an-internship/"
      },
      {
        imageSrc:cantPayImage,
        title: "What To Do if You Can’t Pay for College",
        content: "Personal Finance",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://scholarships360.org/personal-finance/what-to-do-if-you-cant-pay-for-college/"
      },
      {
        imageSrc:onlineTutoringImage,
        title: "Online Tutoring Jobs for College Students",
        content: "Careers",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://scholarships360.org/careers/online-tutoring-jobs-for-college-students/"
      },
      {
        imageSrc:textbooksImage,
        title: "Should You Buy or Rent Textbooks?",
        content: "Personal Finance",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://scholarships360.org/personal-finance/should-you-buy-or-rent-textbooks/"
      },
      {
        imageSrc:businessManagementImage,
        title: "What Can You Do With a Business Management Degree?",
        content: "College Admissions",
        price: "0",
        rating: "0",
        reviews: "0",
        url: "https://scholarships360.org/college-admissions/business-management-degree/"
      }
    ]

  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest" target="_blank">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Read Now</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Chilled",
      content: "Chicken Main Course",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Samsa Beef",
      content: "Fried Mexican Beef",
      price: "$3.99",
      rating: "4.5",
      reviews: "34",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Carnet Nachos",
      content: "Chilli Crispy Nachos",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Guacamole Mex",
      content: "Mexican Chilli",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chillie Cake",
      content: "Deepfried Chicken",
      price: "$2.99",
      rating: "5.0",
      reviews: "61",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Nelli",
      content: "Hamburger & Fries",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Jalapeno Poppers",
      content: "Crispy Soyabeans",
      price: "$8.99",
      rating: "4.6",
      reviews: "12",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Cajun Chicken",
      content: "Roasted Chicken & Egg",
      price: "$7.99",
      rating: "4.2",
      reviews: "19",
      url: "#"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
