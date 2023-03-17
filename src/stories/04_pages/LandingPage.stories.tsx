import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import styled from "styled-components";
import Header from "../../components/interface/Header";
import Container from "../../components/layout/Container";
import Flex from "../../components/layout/Flex";
import Grid from "../../components/layout/Grid";
import Card from "../../components/interface/Card";
import Button from "../../components/interface/Button";

import LandingBanner from "../../assets/LandingBanner.jpg";
import ArrowRightIcon from "../../components/icons/ArrowRight";
import StyledBanner from "../../components/interface/Banner";
import ProductCard from "../../components/interface/ProductCard";
import HR from "../../components/interface/HR";

export default {
  title: "Pages/Landing Page",
} as Meta;

const StyledLink = styled.a`
  ${({ theme }) => `
  color: ${theme.colors.ACCENT_COLOR};
  font-weight: bold;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
`}
`;

const StyledCustomCardContent = styled(Flex)`
  ${({ theme }) => `
  flex-grow: 1;
  gap: 35px;
  align-items: flex-start;
`}
`;

const CustomButton = styled(Button)`
  ${({ theme }) => `
  border-color: #AEAEAE;
  width: 200px;
`}
`;

const Template: Story = (args) => (
  <div>
    <StyledBanner>
      <Container size="lg">
        <Grid columns={2} gap={200}>
          <div>
            <h1>Be part of the Art Revolution</h1>
            <p>
              ORIGYN Art is a blockchain community created exclusively for the
              art market. We create NFTs of physical art and enable
              fractionalized ownership of art masterpieces, which can be traded
              digitally.
            </p>
            <br />
            <p>
              By tokenizing physical masterpieces, the dream of democratized and
              fractionalized ownership is now possible in the art world.
            </p>
            <br />
            <br />
            <StyledLink href="/">READ MORE</StyledLink>
          </div>
          <Flex justify="flex-end" align="center">
            <img src={LandingBanner} alt="" />
          </Flex>
        </Grid>
      </Container>
    </StyledBanner>
    <Container size="lg" padding="65px 0">
      <Grid columns={2} gap={42}>
        <Card flexFlow="column" padding="25px 30px">
          <h3>Buy Shares in Masterpieces</h3>
          <br />
          <StyledCustomCardContent>
            <img src="http://placehold.jp/65x86.png" alt="" />
            <Flex flexFlow="column" justify="space-between" fullHeight gap={20}>
              <Flex flexFlow="column" gap={10}>
                <p>
                  For the first time, ownership of masterpieces is available to
                  anyone.
                </p>
                <p>
                  ORIGYN Art lets you invest in digital shares in artworks by
                  renowned artists and trade these shares freely on the
                  marketplace.
                </p>
              </Flex>
              <CustomButton bordered primary>
                Buy art
              </CustomButton>
            </Flex>
          </StyledCustomCardContent>
        </Card>
        <Card flexFlow="column" padding="25px 30px">
          <h3>Buy Shares in Masterpieces</h3>
          <br />
          <StyledCustomCardContent>
            <img src="http://placehold.jp/80x80.png" alt="" />
            <Flex flexFlow="column" justify="space-between" fullHeight gap={20}>
              <Flex flexFlow="column" gap={10}>
                <p>
                  Are you a Gallerist or Art Collector? The NFT phenomenon opens
                  the art world to millions of new investors.
                </p>
                <p>Get in touch with our team of experts to get started.</p>
              </Flex>
              <CustomButton bordered primary>
                Sell art
              </CustomButton>
            </Flex>
          </StyledCustomCardContent>
        </Card>
      </Grid>
    </Container>
    <Container size="lg">
      <Flex align="center" justify="space-between">
        <h2>Latest Artworks for Sale</h2>
      </Flex>
      <br />
      <Grid columns={3} gap={33}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
    </Container>
    <Container size="lg">
      <br />
      <br />
      <br />
      <br />
      <h2>What is ORIGYN Art?</h2>
      <br />
      <br />
      <br />
      <br />
      <HR />
    </Container>
    <Container size="lg">
      <br />
      <br />
      <br />
      <br />
      <h2>How it works</h2>
      <br />
      <br />
      <br />
      <br />
      <HR style={{ borderColor: "#ffffff" }} />
      <br />
      <br />
      <br />
    </Container>
  </div>
);

export const Default = Template.bind({});
Default.args = { size: "md" };
