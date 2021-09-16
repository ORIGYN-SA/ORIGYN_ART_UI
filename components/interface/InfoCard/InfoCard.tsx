import React from "react";
import styled from "styled-components";

type InfoCardProps = {
  text: string;
  icon?: React.FC;
};
const StyledInfoCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const InfoCardImage = styled.div`
  margin-bottom: 32px;
`;
const InfoCardText = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  min-height: 74px;
  margin-bottom: 22px;
`;
const InfoCardBorder = styled.div`
  width: 100%;
  height: 5px;
  background-color: #151515;
`;

const InfoCard = ({ icon, text }: InfoCardProps) => {
  return (
    <StyledInfoCard>
      <InfoCardImage>{icon}</InfoCardImage>
      <InfoCardText>{text}</InfoCardText>
      <InfoCardBorder />
    </StyledInfoCard>
  );
};

export default InfoCard;
