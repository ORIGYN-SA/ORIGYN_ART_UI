import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import styled from "styled-components";
import Header from "../../components/interface/Header";
import Container from '../../components/layout/Container';
import Flex from '../../components/layout/Flex';
import Grid from '../../components/layout/Grid';
import Card from '../../components/interface/Card';
import HR from '../../components/interface/HR';
import Button from '../../components/interface/Button';

import FBIcon from '../../components/icons/FB';
import SafeIcon from'../../components/icons/Safe';
import ArrowRightIcon from '../../components/icons/ArrowRight';
import BreadCrumbs from "../../components/interface/BreadCrumbs/BreadCrumbs";
import TabContent from "../../components/interface/TabContent/TabContent";
import Filters from "../../components/interface/Filters";
import ProductCard from "../../components/interface/ProductCard";

export default {
  title: "Pages/Single item",
} as Meta;

const StyledCustomCard = styled(Card)`${({theme}) => `
  justify-content: center;
  padding: 68px 75px 85px 75px;
`}`;

const StyledCustomText = styled.div`${({theme}) => `
  width: 468px;
  max-width: 100%;
  
  p {
    font-size: 14px;
    line-height: 24px;
  }
`}`;

const StyledCustomGrid = styled(Grid)`${({theme}) => `
  grid-template-columns: 1fr 2fr 1fr;
  gap: 32px;
  margin-bottom: 39px;
`}`;

const StyledArtistGrid = styled(Grid)`${({theme}) => `
  grid-template-columns: 2fr 1fr;
  gap: 34px;
`}`;

// TODO: move to components
const StyledCustomMoreLink = styled.a`${({theme}) => `
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  color: ${theme.colors.BLACK};
  display: flex;
  gap: 10px;
`}`;

const Template: Story = (args) => (
  <div>
    <Header isLoggedIn={false}/>
    <Container padding="0 33px">
      <BreadCrumbs data={[{title: "My portfolio", link: "#"}, {title: "Digital twins", link: "#"}]} />
      <StyledCustomGrid>
        <Flex flexFlow="column" gap={15}>
          <h2>The Newlyweds with Rooster, 1975</h2>
          <h3>Marc Chagall</h3>
          <p>Oil, tempera, ink and India ink on canvas laid down on panel</p>
          <HR accent />
          <Flex gap={21} align="center">
            <SafeIcon className="noShrink" />
            <p style={{fontWeight: 500}}>The Physical Artwork is securely stored in the ORIGYN Art storage facility, Geneva, Switzerland.</p>
          </Flex>
          <Flex gap={21} align="center">
            <SafeIcon className="noShrink" />
            <p style={{fontWeight: 500}}>The Digital Twin (NFT) and all updates are registered on the Blockchain.</p>
          </Flex>
          <StyledCustomMoreLink href="#">Read more <ArrowRightIcon fill="#EE9907" /></StyledCustomMoreLink>
        </Flex>
        <StyledCustomCard>
          <img src="http://placehold.jp/526x325.png" alt=""/>
        </StyledCustomCard>
        <Flex flexFlow="column">
          <HR marginBottom={18} />
          <Grid columns={2} gap={18}>
            <Flex flexFlow="column">
              <p>Total Fractions</p>
              <p style={{fontWeight: 500}}>1,000,000</p>
            </Flex>
            <Flex flexFlow="column">
              <p>Owned Fractions</p>
              <p style={{fontWeight: 500}}>1,000,000</p>
            </Flex>
            <Flex flexFlow="column">
              <p>Owned value</p>
              <p style={{fontWeight: 500}}>$1,000,000.00</p>
            </Flex>
            <Flex flexFlow="column">
              <p>Ownership</p>
              <p style={{fontWeight: 500}}>100%</p>
            </Flex>
          </Grid>
          <HR marginTop={18} marginBottom={18} />
          <Button fullWidth>SELL SHARES</Button>
        </Flex>
      </StyledCustomGrid>
    </Container>
    <TabContent
      tabs={[{title: 'Artist'}, {title: 'Media'}, {title: 'Market Appreciation'}, {title: 'Order Book'}, {title: 'Documents'}]}
      content={[
        <Container padding="31px 33px">
          <StyledArtistGrid>
            <Card padding="43px 75px 30px 43px" flexFlow="column" gap={20}>
              <Flex align="center" gap={20}>
                <img src="http://placehold.jp/76x76.png" alt=""/>
                <Flex flexFlow="column">
                  <h2>Marc Chagall</h2>
                  <p><b>Russian-French, 1887–1985</b></p>
                </Flex>
              </Flex>
              <p>
                Though he actively engaged in the Parisian artistic community, art for Chagall was first and foremost a means of personal expression. He preferred to be considered separately from other artists, his imagery and allegory uniquely his own.
              </p>
              <p>
                Honored for his distinct style and pioneering role among Jewish artists, Marc Chagall painted dream-like subjects rooted in personal history and Eastern European folklore. He worked in several mediums, including painting, printmaking, and book illustration, and his stained glass windows can be seen in New York, France, and Jerusalem.
              </p>
              <p>
                Chagall arrived in Paris in 1910 and began experimenting with Cubism, befriending painters Robert Delaunay and Fernand Léger. Chagall’s style has been described as a hybrid of Cubism, Fauvism, and Symbolism, and his supernatural subjects are thought to have significantly influenced the Surrealists.
              </p>
              <b>SELECTED EXHIBITIONS</b>
              <Flex flexFlow="column" gap={8}>
                <Flex gap={20} align="center">
                  <b>2018</b>
                  <p>Chagall. The breakthrough years, 1911-1919, Guggenheim Museum Bilbao</p>
                </Flex>
                <Flex gap={20} align="center">
                  <b>2017</b>
                  <p>Chagall. The Breakthrough Years, 1911–1919, Kunstmuseum Basel</p>
                </Flex>
                <Flex gap={20} align="center">
                  <b>2013</b>
                  <p>Chagall: Beyond Color, Dallas Museum of Art</p>
                </Flex>
              </Flex>
            </Card>
            <Card padding="35px 48px 35px 40px" flexFlow="column" gap={20}>
              <b>ARTIST APPRECIATION</b>
              <br/>
              <div>
                <p>Auction Record</p>
                <p><b>$28.5m, Sotheby's, 2017</b></p>
                <br/>
                <p>Representation</p>
                <p><b>Industry leading galleries</b></p>
                <br/>
                <p>Collections</p>
                <p><b>Tate, Museum of Modern Art (MoMA), Indianapolis Museum of Art at Newfields</b></p>
              </div>
            </Card>
          </StyledArtistGrid>
        </Container>,
        <div>Content 2</div>,
        <div>In Development</div>,
        <div>In Development</div>,
        <div>Content 4</div>
      ]}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {size: "md"};