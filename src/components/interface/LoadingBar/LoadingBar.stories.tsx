import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import LoadingBar from "./LoadingBar";
import Container from "../../layout/Container/Container";
import Flex from "../../layout/Flex/Flex";

export default {
  title: "Components/Interface/LoadingBar/All stories",
  component: LoadingBar,
} as Meta;

const Template = () => (
  <>
    <Container padding="56px">
      <Flex justify="center" align="center">
        <LoadingBar />
      </Flex>
    </Container>
  </>
);

export const Default = Template.bind({});
