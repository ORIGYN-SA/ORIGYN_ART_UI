import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import styled from "styled-components";
import Modal from "../../components/interface/Modal";
import Button from "../../components/interface/Button";

import TextInput from "../../components/interface/Inputs/TextInput";
import TextArea from "../../components/interface/Inputs/TextArea";

import HR from "../../components/interface/HR";
import CheckboxInput from "../../components/interface/Inputs/CheckboxInput";

import Flex from "../../components/layout/Flex";

export default {
  title: "Modals/Stay Connected",
} as Meta;

const InputWrapper = styled(Flex)`
  max-width: 437px;
  width: 100%;
`;

const ModalSubTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 20px 0;
`;

const PrivacyPolicy = styled.p`
  margin-top: 15px;
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

//TODO
//Need to rework Checkbox component UI, add props for label and checkbox position

const Template: Story = (args) => {
  const [isOpened, setIsOpened] = useState(false);
  const closeModal = () => {
    setIsOpened(false);
  };
  const openModal = () => {
    setIsOpened(true);
  };
  return (
    <div>
      <Button onClick={openModal}>SUBSCRIBE</Button>
      <Modal title={args.title} isOpened={isOpened} closeModal={closeModal}>
        <div>
          <ModalSubTitle>
            Receive regular information about ORIGYN developments.
          </ModalSubTitle>
          <ResponsiveGrid>
            <InputWrapper flexFlow="row" fullHeight gap={10}>
              <TextInput
                label="First Name"
                name="firstName"
                placeholder="Type in your first name"
              />
            </InputWrapper>

            <InputWrapper flexFlow="row" fullHeight gap={10}>
              <TextInput
                label="Last Name"
                name="lastName"
                placeholder="Type in your last name"
              />
            </InputWrapper>
            <InputWrapper flexFlow="row" fullHeight gap={10}>
              <TextInput
                label="Email Address"
                name="email"
                placeholder="Type in your email address"
              />
            </InputWrapper>
          </ResponsiveGrid>
          <TextArea
            resize="none"
            name="message"
            label="Your Message"
            placeholder="Type in a message (max. 500 characters)"
            rows={5}
          />
          <CheckboxInput
            name="privacyPolicy"
            label={`By sending this form, I agree that my personal data will be \n saved and processed according to data protection regulations and will be used only for commercial and marketing purposes.`}
          />
          <HR marginTop={60} marginBottom={30} />
          <Flex align="flex-start" justify="flex-end" gap={40} fullWidth>
            <Flex flexFlow="column">
              <p>
                Origyn is committed to protecting and respecting your privacy,
                and we’ll only use your personal information to administer your
                account and to provide the services you requested from us. From
                time to time, we would like to connect you about our services,
                as well as other content that may be of interest to you. You can
                unsubscribe from these communicaitons at any time. By clicking
                and sending this form, you consent to allow ORIGYN.ch to store
                and process the personal information submitted above to provide
                you the content requested.
              </p>
              <PrivacyPolicy>
                For more information, please review our Privacy Policy
              </PrivacyPolicy>
            </Flex>
            <Flex align="center" gap={50}>
              <b onClick={closeModal}>Cancel</b>
              <Button>SUBMIT</Button>
            </Flex>
          </Flex>
        </div>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Stay Connected",
};
