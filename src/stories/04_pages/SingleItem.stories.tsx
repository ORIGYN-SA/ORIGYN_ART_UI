import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import styled from "styled-components";
import Header from "../../components/interface/Header";
import Container from "../../components/layout/Container";
import Flex from "../../components/layout/Flex";
import Grid from "../../components/layout/Grid";
import Card from "../../components/interface/Card";
import HR from "../../components/interface/HR";
import Button from "../../components/interface/Button";

import FBIcon from "../../components/icons/FB";
import PDFIcon from "../../components/icons/PDF";
import InstagramIcon from "../../components/icons/Instagram";
import TwitterIcon from "../../components/icons/Twitter";
import SafeIcon from "../../components/icons/Safe";
import ArrowRightIcon from "../../components/icons/ArrowRight";
import BreadCrumbs from "../../components/interface/BreadCrumbs/BreadCrumbs";
import TabContent from "../../components/interface/TabContent/TabContent";
export default {
  title: "Pages/Single item",
} as Meta;

const StyledCustomCard = styled(Card)`
  ${({ theme }) => `
  justify-content: center;
  padding: 68px 75px 85px 75px;
  img {
    max-width: 100%;
  }
`}
`;

const StyledCustomText = styled("div")`
  ${({ theme }) => `
  width: 468px;
  max-width: 100%;
  
  p {
    font-size: 14px;
    line-height: 24px;
  }
`}
`;

const StyledCustomGrid = styled(Grid)`
  ${({ theme }) => `
  grid-template-columns: 1fr 2fr 1fr;
  gap: 32px;
  margin-bottom: 39px;
`}
`;

const StyledArtistGrid = styled(Grid)`
  ${({ theme }) => `
  grid-template-columns: 2fr 1fr;
  gap: 34px;
`}
`;

const StyledCircle = styled.span`
  ${({ theme }) => `
  display: inline-block;
  vertical-align: middle;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${theme.colors.ACCENT_COLOR};
  margin: 0 10px;
`}
`;

const StyledGalleryGrid = styled(Grid)`
  ${({ theme }) => `
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  &>img {
    width: 100%;
    
    &:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`}
`;

const Template: Story = (args) => (
  <div>
    <Container padding="0 33px">
      <BreadCrumbs
        data={[
          { title: "My portfolio", link: "#" },
          { title: "Digital twins", link: "#" },
        ]}
      />
      <StyledCustomGrid>
        <Flex flexFlow="column" gap={15}>
          <h2>The Newlyweds with Rooster, 1975</h2>
          <h3>Marc Chagall</h3>
          <p>Oil, tempera, ink and India ink on canvas laid down on panel</p>
          <p>
            <b>12 3/5 × 25 1/5 in</b>
            <StyledCircle />
            <b>32.1 × 64 cm</b>
          </p>
          <HR accent />
          <Flex gap={21} align="center">
            <SafeIcon className="noShrink" />
            <p style={{ fontWeight: 500 }}>
              The Physical Artwork is securely stored in the ORIGYN Art storage
              facility, Geneva, Switzerland.
            </p>
          </Flex>
          <Flex gap={21} align="center">
            <SafeIcon className="noShrink" />
            <p style={{ fontWeight: 500 }}>
              The Digital Twin (NFT) and all updates are registered on the
              Blockchain.
            </p>
          </Flex>
        </Flex>
        <StyledCustomCard>
          <img src="http://placehold.jp/526x325.png" alt="" />
        </StyledCustomCard>
        <Flex flexFlow="column">
          <HR marginBottom={18} />
          <Grid columns={2} gap={18}>
            <Flex flexFlow="column">
              <p>Total Fractions</p>
              <p style={{ fontWeight: 500 }}>1,000,000</p>
            </Flex>
            <Flex flexFlow="column">
              <p>Owned Fractions</p>
              <p style={{ fontWeight: 500 }}>1,000,000</p>
            </Flex>
            <Flex flexFlow="column">
              <p>Owned value</p>
              <p style={{ fontWeight: 500 }}>$1,000,000.00</p>
            </Flex>
            <Flex flexFlow="column">
              <p>Ownership</p>
              <p style={{ fontWeight: 500 }}>100%</p>
            </Flex>
          </Grid>
          <HR marginTop={18} marginBottom={18} />
          <Button fullWidth>SELL SHARES</Button>
          <br />
          <Flex gap={15} align="center">
            <p style={{ fontWeight: 500 }}>Share</p>
            <FBIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Flex>
        </Flex>
      </StyledCustomGrid>
    </Container>
    <TabContent
      tabs={[{ title: "Artist" }, { title: "Media" }, { title: "Documents" }]}
      content={[
        <Container padding="31px 33px">
          <StyledArtistGrid>
            <Card padding="43px 75px 30px 43px" flexFlow="column" gap={20}>
              <Flex align="center" gap={20}>
                <img src="http://placehold.jp/76x76.png" alt="" />
                <Flex flexFlow="column">
                  <h2>Marc Chagall</h2>
                  <p>
                    <b>Russian-French, 1887–1985</b>
                  </p>
                </Flex>
              </Flex>
              <p>
                Though he actively engaged in the Parisian artistic community,
                art for Chagall was first and foremost a means of personal
                expression. He preferred to be considered separately from other
                artists, his imagery and allegory uniquely his own.
              </p>
              <p>
                Honored for his distinct style and pioneering role among Jewish
                artists, Marc Chagall painted dream-like subjects rooted in
                personal history and Eastern European folklore. He worked in
                several mediums, including painting, printmaking, and book
                illustration, and his stained glass windows can be seen in New
                York, France, and Jerusalem.
              </p>
              <p>
                Chagall arrived in Paris in 1910 and began experimenting with
                Cubism, befriending painters Robert Delaunay and Fernand Léger.
                Chagall’s style has been described as a hybrid of Cubism,
                Fauvism, and Symbolism, and his supernatural subjects are
                thought to have significantly influenced the Surrealists.
              </p>
              <b>SELECTED EXHIBITIONS</b>
              <Flex flexFlow="column" gap={8}>
                <Flex gap={20} align="center">
                  <b>2018</b>
                  <p>
                    Chagall. The breakthrough years, 1911-1919, Guggenheim
                    Museum Bilbao
                  </p>
                </Flex>
                <Flex gap={20} align="center">
                  <b>2017</b>
                  <p>
                    Chagall. The Breakthrough Years, 1911–1919, Kunstmuseum
                    Basel
                  </p>
                </Flex>
                <Flex gap={20} align="center">
                  <b>2013</b>
                  <p>Chagall: Beyond Color, Dallas Museum of Art</p>
                </Flex>
              </Flex>
            </Card>
            <Card padding="35px 48px 35px 40px" flexFlow="column" gap={20}>
              <b>ARTIST APPRECIATION</b>
              <br />
              <div>
                <p>Auction Record</p>
                <p>
                  <b>$28.5m, Sotheby's, 2017</b>
                </p>
                <br />
                <p>Representation</p>
                <p>
                  <b>Industry leading galleries</b>
                </p>
                <br />
                <p>Collections</p>
                <p>
                  <b>
                    Tate, Museum of Modern Art (MoMA), Indianapolis Museum of
                    Art at Newfields
                  </b>
                </p>
              </div>
            </Card>
          </StyledArtistGrid>
        </Container>,
        <Container padding="31px 33px">
          <Card padding="43px 75px 30px 43px" flexFlow="column" gap={20}>
            <h3>Images</h3>
            <StyledGalleryGrid>
              <img src="http://placehold.jp/850x400.png" alt="" />
              <img src="http://placehold.jp/377x445.png" alt="" />
              <img src="http://placehold.jp/410x240.png" alt="" />
              <img src="http://placehold.jp/410x240.png" alt="" />
            </StyledGalleryGrid>
            <br />
            <h3>Video</h3>
            <Grid columns={2}>
              <Flex flexFlow="column" gap={10}>
                <img src="http://placehold.jp/554x324.png" alt="" />
                <h4>Watch the creation of the Digital Twin</h4>
              </Flex>
            </Grid>
          </Card>
        </Container>,
        <Container padding="31px 33px">
          <Card padding="43px 75px 30px 43px" flexFlow="column" gap={20}>
            <Flex align="center" gap={18}>
              <PDFIcon />
              <h4>Originator Trust Certificate</h4>
            </Flex>
            <Flex align="center" gap={18}>
              <PDFIcon />
              <h4>Authentication Source</h4>
            </Flex>
            <Flex align="center" gap={18}>
              <PDFIcon />
              <h4>Sales Agreement</h4>
            </Flex>
            <Flex align="center" gap={18}>
              <PDFIcon />
              <h4>Possession / Jurisdiction / Fractions Agreement</h4>
            </Flex>
            <Flex align="center" gap={18}>
              <PDFIcon />
              <h4>Ownership Agreement</h4>
            </Flex>
            <Flex align="center" gap={18}>
              <PDFIcon />
              <h4>Purchase Agreement</h4>
            </Flex>
            <Flex align="center" gap={18}>
              <PDFIcon />
              <h4>Lifetime Earning Agreement</h4>
            </Flex>
          </Card>
        </Container>,
      ]}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = { size: "md" };
