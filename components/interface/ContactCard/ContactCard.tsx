import React from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import Grid from "../../layout/Grid";
export type ContactCardProps = {};

const StyledContactCard = styled(Flex)`
  background: #ffffff;
  padding: 32px;
  width: 100%;
  max-width: 900px;
`;

const StyledContactCardContent = styled(Grid)`
  width: 100%;
  padding-left: 25px;
`;
const StyledCardTitle = styled.h4`
  padding-bottom: 25px;
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
const ContactAddress = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;
const ContactCard = () => {
  return (
    <StyledContactCard>
      <Flex flexFlow="column" fullWidth>
        <StyledCardTitle>YOUR ORIGYN ART CONTACT</StyledCardTitle>
        <Flex>
          <Flex>
            <img src="http://placehold.jp/150x150.png" alt="logo" />
          </Flex>
          <StyledContactCardContent columns={2}>
            <Flex flexFlow="column">
              <AccountName>Rosalie Pernot</AccountName>
              <InfoTitle>Account Manager</InfoTitle>
              <ContactInfo>rosalie@origyn.ch </ContactInfo>
              <ContactInfo>
                T +41 78 204 65 25 / T +33 6 17 86 79 83
              </ContactInfo>
            </Flex>
            <Flex flexFlow="column">
              <InfoTitle>ORIGYN Foundation</InfoTitle>
              <ContactAddress>Rue des Usines 44</ContactAddress>
              <ContactAddress>2000 Neuchâtel</ContactAddress>
              <ContactAddress>Switzerland</ContactAddress>
              <ContactAddress>www.origyn.ch/art</ContactAddress>
            </Flex>
          </StyledContactCardContent>
        </Flex>
      </Flex>
    </StyledContactCard>
  );
};

export default ContactCard;
