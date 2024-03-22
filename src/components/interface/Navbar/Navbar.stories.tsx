import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Navbar from './Navbar';
import {
  Home as HomeIcon,
  Governance as GovernanceIcon,
  Wallet as WalletIcon,
  SearchIcon,
  SafeIcon,
  TransactionIcon,
} from '../../icons';

export default {
  title: 'Components/Interface/Navbar/All stories',
  component: Navbar,
} as Meta;

const Template: Story = (args: any) => {
  return (
    <div
      style={{
        height: '1050px',
        backgroundColor: '#d3d3d3',
      }}
    >
      <Navbar
        navItems={{
          // start: [
          //   {
          //     href: '#',
          //     title: 'Home',
          //     icon: HomeIcon,
          //   },
          // ],
          center: [
            {
              href: '#',
              title: 'Home',
              icon: HomeIcon,
            },
            {
              href: '#',
              title: 'Governance',
              icon: GovernanceIcon,
            },
            {
              href: '#',
              title: 'Transaction',
              icon: TransactionIcon,
            },
          ],
          end: [
            {
              href: '#',
              title: 'Search',
              icon: SearchIcon,
            },
            {
              href: '#',
              title: 'Wallet',
              icon: WalletIcon,
            },
          ],
        }}
        dAppsVersion="1.0.0"
        darkMode
        showThemeButton={false}
      />
    </div>
  );
};

export const basic = Template.bind({});
basic.args = {};
