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

import FBIcon from "../../components/icons/FB";
import ArrowRightIcon from "../../components/icons/ArrowRight";
import DifinityLogoIcon from "../../components/icons/DifinityLogo";
import IllustrationImage from "../../assets/Illustration.png";

export default {
  title: "Pages/Login page",
} as Meta;

const StyledCustomCard = styled(Card)`
  ${({ theme }) => `
  border-top: 5px solid ${theme.colors.ACCENT_COLOR};
  flex-flow: column;
  align-items: flex-start;
  gap: 30px;
  padding: 50px 117px;
`}
`;

const StyledCustomButton = styled(Button)`
  ${({ theme }) => `
  width: 437px;
  max-width: 100%;
  font-weight: normal;
  text-transform: none;
  justify-content: flex-start;
  padding: 0 20px;
  box-sizing: border-box;
  gap: 20px;
  
  svg {
    width: 50px;
    height: 29px;
  }
`}
`;

const StyledFBButton = styled(StyledCustomButton)`
  ${({ theme }) => `
  background-color: #1062CB;
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

const Template: Story = (args) => (
  <div>
    <Container size="sm" padding="60px 0" smPadding="0">
      <StyledCustomCard>
        <h3>Log in</h3>
        <Flex flexFlow="column" gap={10} fullWidth>
          <StyledCustomButton>
            <DifinityLogoIcon />
            <span>
              <b>Log in</b> with your Internet Identity
            </span>
          </StyledCustomButton>
          <StyledFBButton>
            <FBIcon fill="#ffffff" />
            <span>
              {" "}
              <b>Log in</b> with Facebook
            </span>
          </StyledFBButton>
        </Flex>
        <StyledCustomText>
          <p>
            The ORIGYN Art Marketplace is build on the Internet Computer
            Protocol (ICP), offering a tamperproof environment enabled by
            Blockchain technology.
          </p>
          <br />
          <p>
            To log in to the ICP, you need an <b>Internet Identity.</b>
            <br />
            The Internet Identity is an Identity Anchor number paired with a
            Device (Face/touch ID or hardware authentication service such as
            YubiKey.
          </p>
        </StyledCustomText>
        <img src={IllustrationImage} alt="Internet Identity illustration" />
      </StyledCustomCard>
    </Container>
  </div>
);

export const Default = Template.bind({});
Default.args = { size: "md" };
