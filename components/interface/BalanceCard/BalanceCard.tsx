import React, { ReactNode } from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex/Flex";
import HR from "../HR";
import MenuLink from "../MenuLink";
import StyledBanner from "../Banner";
import { BannerProps } from "../Banner/Banner";
import Card from "../Card";

import { numberWithCommas } from "../../../utils";

export interface BalanceCardProps extends BannerProps {
  balance: number;
  name: string;
  icon?: ReactNode;
  actions?: any;
}

const StyledBalanceCardContent = styled(Flex)`
  ${({ theme }) => `
    background-color: ${theme.colors.WHITE};
    padding: 24px;
  `}
`;

const StyledMenuLink = styled(MenuLink)`
  text-align: center;
  padding: 14px 0;
`;

const StyledBalance = styled.h2`
  word-break: break-all;
  text-align: center;
`;

const BalanceCard = ({
  balance,
  icon,
  name,
  actions,
  bgColor,
  textColor,
  padding,
}: BalanceCardProps) => {
  return (
    <Card flexFlow="column">
      <StyledBanner
        flexFlow="column"
        justify="center"
        align="center"
        padding={padding || "24px"}
        bgColor={bgColor}
        textColor={textColor}
        gap={10}
      >
        <Flex gap={5} align="center">
          {icon}
          <b style={{ fontSize: 13 }}>{name}</b>
        </Flex>
        <StyledBalance>{numberWithCommas(balance)}</StyledBalance>
      </StyledBanner>
      {actions ? (
        <StyledBalanceCardContent flexFlow="column" justify="center">
          <HR accent={false} />
          <StyledMenuLink to="/deposit">TOP UP</StyledMenuLink>
          <HR accent={false} marginBottom={80} />
        </StyledBalanceCardContent>
      ) : null}
    </Card>
  );
};

export default BalanceCard;
