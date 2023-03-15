import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import styled from "styled-components";
import Header from "../../components/interface/Header";
import BreadCrumbs from "../../components/interface/BreadCrumbs";
import TextInput from "../../components/interface/Inputs/TextInput";
import DatePicker from "../../components/interface/DatePicker";
import Button from "../../components/interface/Button";
import Table from "../../components/interface/Table/CustomTable";
import HR from "../../components/interface/HR";
import ContactCard from "../../components/interface/ContactCard";

import { TabContentVertical } from "../../components/interface/TabContent";
import Container from "../../components/layout/Container";
import Flex from "../../components/layout/Flex";
import Grid from "../../components/layout/Grid";

export default {
  title: "Pages/Account Page",
} as Meta;
const personalInfo = {
  name: "Rosalie Pernot",
  role: "Account Manager",
  email: "rosalie@origyn.ch",
  phone: "T +41 78 204 65 25 / T +33 6 17 86 79 83",
  company: "ORIGYN Foundation",
  address: "Rue des Usines 44",
  zip: "2000 Neuchâtel",
  country: "Switzerland",
  website: "www.origyn.ch/art",
  avatar: "http://placehold.jp/150x150.png",
};
const StyledTitle = styled.h4`
  margin-bottom: 21px;
`;
const InputWrapper = styled(Flex)`
  max-width: 437px;
  width: 100%;
`;

const ResponsiveGrid = styled("div")`
  ${({ theme }) => `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 50px;
  ${theme.media.md}{
    grid-template-columns: repeat(1, 1fr);
  }
`}
`;

const Template: Story = (args) => (
  <div>
    <Container padding="0 33px">
      <BreadCrumbs
        data={[
          { title: "Profile", link: "#" },
          { title: "My Account", link: "#" },
        ]}
      />
      <Flex align="center">
        <h2>My Account</h2>
      </Flex>
      <TabContentVertical
        tabs={[
          { title: "Profile" },
          { title: "Payment Methods" },
          { title: "Transaction History" },
          { title: "Privacy Settings" },
          { title: "Notifications" },
          { title: "Contact Us" },
        ]}
        content={[
          <AccountProfile />,
          <AccountPayment />,
          <div>Content 3</div>,
          <div>Content 4</div>,
          <div>Content 5</div>,
          <div></div>,
        ]}
      />
    </Container>
  </div>
);

const AccountProfile = () => {
  return (
    <Container size="full">
      <ResponsiveGrid>
        <StyledTitle>Profile</StyledTitle>
        <br />
        <InputWrapper flexFlow="column" fullHeight gap={10}>
          <TextInput label="Display Name" name="name" placeholder="Name" />
        </InputWrapper>
      </ResponsiveGrid>
      <ResponsiveGrid>
        <StyledTitle>Personal Information</StyledTitle>
        <br />
        <InputWrapper flexFlow="row" fullHeight gap={10}>
          <TextInput
            label="First Name"
            name="firstName"
            placeholder="First Name"
          />
        </InputWrapper>
        <InputWrapper flexFlow="row" fullHeight gap={10}>
          <TextInput
            label="Last Name"
            name="lastName"
            placeholder="Last Name"
          />
        </InputWrapper>
        <InputWrapper flexFlow="row" fullHeight gap={10}>
          <TextInput label="Email Address" name="email" placeholder="Email" />
        </InputWrapper>
      </ResponsiveGrid>

      <HR marginTop={75} marginBottom={32} />

      <Button primary={false}>Save</Button>
    </Container>
  );
};

const rows = [
  {
    date: "07 Jul, 2021",
    activity: "ICP Deposit",
    details: "xxxxxxx",
    amount: "100",
    status: "2 hrs 23sec",
  },
  {
    date: "07 Jul, 2021",
    activity: "ICP Deposit",
    details: "xxxxxxx",
    amount: "100",
    status: "2 hrs 23sec",
  },
];

const cells = [
  { id: "date", label: "Date" },
  { id: "activity", label: "Activity" },
  { id: "details", label: "Details" },
  { id: "amount", label: "Amount" },
  { id: "status", label: "Status" },
];

const AccountPayment = () => {
  return (
    <Container size="full">
      <StyledTitle>BALANCES</StyledTitle>
      <HR marginTop={75} marginBottom={32} />
      <StyledTitle>BALANCE HISTORY</StyledTitle>
      <Table rows={rows} cells={cells} />
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = { size: "md" };
