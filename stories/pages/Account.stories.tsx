import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import styled from "styled-components";
import Header from "../../components/interface/Header";
import BreadCrumbs from "../../components/interface/BreadCrumbs";
import TextInput from "../../components/interface/TextInput";
import DatePicker from "../../components/interface/DatePicker";
import Button from "../../components/interface/Button";
import BalanceCard from "../../components/interface/BalanceCard";
import Table from "../../components/interface/Table";
import HR from "../../components/interface/HR";

import { TabContentVertical } from "../../components/interface/TabContent";
import Container from "../../components/layout/Container";
import Flex from "../../components/layout/Flex";
import Grid from "../../components/layout/Grid";

export default {
  title: "Pages/Account Page",
} as Meta;

const StyledTitle = styled.h4`
  margin-bottom: 21px;
`;
const InputWrapper = styled(Flex)`
  max-width: 437px;
  width: 100%;
`;

const Template: Story = (args) => (
  <div>
    <Header isLoggedIn />
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
          <div>Content 6</div>,
        ]}
      />
    </Container>
  </div>
);

const AccountProfile = () => {
  return (
    <Container size="full">
      <Grid columns={2} gap={20}>
        <StyledTitle>Profile</StyledTitle>
        <br />
        <InputWrapper flexFlow="column" fullHeight gap={10}>
          <TextInput label="Display Name" name="name" placeholder="Name" />
        </InputWrapper>
      </Grid>
      <Grid columns={2} gap={20}>
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
        <InputWrapper flexFlow="row" fullHeight gap={10}>
          <TextInput label="Phone Number" name="phone" placeholder="Phone" />
        </InputWrapper>
        <InputWrapper align="flex-end">
          <DatePicker
            placeholderText="DD"
            showMonthsPicker={true}
            dateFormat="dd"
            selected={null}
            onChange={() => undefined}
            label="Date of birth"
          />
          <DatePicker
            placeholderText="MM"
            showMonthsPicker={true}
            dateFormat="MM"
            showMonthYearPicker={true}
            hideHeader={true}
            selected={null}
            onChange={() => undefined}
          />
          <DatePicker
            dateFormat="yyyy"
            showYearPicker={true}
            placeholderText="YYYY"
            selected={null}
            onChange={() => undefined}
          />
        </InputWrapper>
      </Grid>

      <Grid columns={2} gap={20}>
        <StyledTitle>Address</StyledTitle>
        <br />
        <Flex flexFlow="column" gap={20}>
          <InputWrapper flexFlow="column" fullHeight gap={10}>
            <TextInput label="Country" name="country" placeholder="Country" />
          </InputWrapper>
          <InputWrapper gap={20}>
            <Flex flexFlow="column" fullHeight gap={10}>
              <TextInput label="Town or City" name="city" placeholder="City" />
            </Flex>
            <Flex flexFlow="column" fullHeight gap={10}>
              <TextInput label="ZIP code" name="code" placeholder="ZIP" />
            </Flex>
          </InputWrapper>
          <InputWrapper flexFlow="column" fullHeight gap={10}>
            <TextInput
              label="Street address"
              name="address"
              placeholder="Street"
            />
          </InputWrapper>
        </Flex>
      </Grid>
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
      <BalanceCard />
      <HR marginTop={75} marginBottom={32} />
      <StyledTitle>BALANCE HISTORY</StyledTitle>
      <Table rows={rows} cells={cells} />
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = { size: "md" };
