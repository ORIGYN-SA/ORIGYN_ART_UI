import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Navbar from "./Navbar";
import HomeIcon from "../../../components/icons/Home";
import GovernanceIcon from "../../../components/icons/Governance";
import WalletIcon from "../../../components/icons/Wallet";
import { SafeIcon, TransactionIcon } from "../../icons";

export default {
  title: "Components/Interface/Navbar/All stories",
  component: Navbar,
} as Meta;

const Template: Story = (args: any) => {
  return (
    <div
      style={{
        height: "1050px",
        backgroundColor: "#d3d3d3",
      }}
    >
      <Navbar
        navItems={[
          {
            href: "#",
            title: "Home",
            icon: HomeIcon,
          },
          {
            href: "#",
            title: "Governance",
            icon: GovernanceIcon,
          },
          {
            href: "url",
            title: "Wallet",
            icon: WalletIcon,
          },
          {
            href: "url",
            title: "Wallet",
            icon: SafeIcon,
          },
          {
            href: "url",
            title: "Wallet",
            icon: TransactionIcon,
          },
        ]}
        dAppsVersion="1.0.0"
        darkMode
        showThemeButton={false}
      />
    </div>
  );
};

export const basic = Template.bind({});
basic.args = {};
