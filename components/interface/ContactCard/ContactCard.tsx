import React from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
export type ContactCardProps = {
  personalInfo: PersonalInfo;
};
type PersonalInfo = {
  name?: string;
  role?: string;
  email?: string;
  phone?: string;
  company?: string;
  address?: string;
  zip?: string;
  country?: string;
  website?: string;
  avatar?: string;
};

const StyledContactCard = styled(Flex)`
  background: #ffffff;
  padding: 32px;
  max-width: 900px;
`;

const StyledCardTitle = styled.h4`
  ${({ theme }) => `
  padding-bottom: 25px;
  ${theme.media.md}{
    text-align: center;
  }
`}
`;

const AccountName = styled.p`
  font-size: 30px;
  line-height: 44px;
  font-weight: 500;
`;
const InfoTitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;
const ContactInfo = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;
const ContactEmail = styled.a`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;
const ContactAddress = styled.address`
  ${({ theme }) => `
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  font-style: initial;
  ${theme.media.md}{
    text-align: center;
  }
`}
`;

const ContactWrapper = styled(Flex)`
  ${({ theme }) => `
  flex-flow: column;
  width: 50%;
  padding-left: 25px;
  ${theme.media.md}{
    padding-left: 0;
    align-items: center;
    width: 100%;
  }
`}
`;

const AvatarWrapper = styled(Flex)`
  ${({ theme }) => `
  ${theme.media.md}{
    justify-content: center;
  }
`}
`;

const ContactCard = ({ personalInfo }: ContactCardProps) => {
  const {
    name,
    role,
    email,
    phone,
    company,
    address,
    zip,
    country,
    website,
    avatar,
  } = personalInfo;
  return (
    <StyledContactCard>
      <Flex flexFlow="column" fullWidth>
        <StyledCardTitle>YOUR ORIGYN ART CONTACT</StyledCardTitle>
        <Flex adapt>
          <AvatarWrapper>
            <img src={avatar} alt="logo" width="150" height="150" />
          </AvatarWrapper>
          <Flex fullWidth adapt>
            <ContactWrapper>
              <AccountName>{name}</AccountName>
              <InfoTitle>{role}</InfoTitle>
              <ContactEmail href={`mailto:${email}`}>{email}</ContactEmail>
              <ContactInfo>{phone}</ContactInfo>
            </ContactWrapper>
            <ContactWrapper>
              <InfoTitle>{company}</InfoTitle>
              <ContactAddress>
                {address} <br />
                {zip} <br />
                {country} <br />
                {website} <br />
              </ContactAddress>
            </ContactWrapper>
          </Flex>
        </Flex>
      </Flex>
    </StyledContactCard>
  );
};

export default ContactCard;
