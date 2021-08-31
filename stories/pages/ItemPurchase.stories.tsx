import React, {useState} from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Checkbox from "../../components/interface/CheckboxInput";
import Button from '../../components/interface/Button';
import Grid from "../../components/layout/Grid";
import Modal from "../../components/interface/Modal";
import { useStepper } from "../../components/interface/Stepper/Stepper";
import Flex from "../../components/layout/Flex";
import HR from "../../components/interface/HR/HR";
import TextInput from "../../components/interface/TextInput";
import DifinityLogoIcon from "../../components/icons/DifinityLogo";
import CheckIcon from "../../components/icons/Check";
import TransactionIcon from "../../components/icons/Transaction";

export default {
  title: "Pages/Purchase Item",
  component: Modal,
} as Meta;

const StyledPurchaseTable = styled.table`${({theme}) => `
  border-spacing: 0px 20px;

  td {
    padding: 18px;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
  }
  thead {
    border-top: 1px solid #000000;
  
    td {
      padding: 0 18px;
      font-weight: 600;
      font-size: 13px;
      line-height: 160%;
    }
  }
  tbody {
  
    tr {
      &.footer td {
        border-top: 1px solid #000000;
        border-bottom: 1px solid #000000;
      }
      &.bordered {
        border-radius: 2px;
        box-shadow: 0 0 0 1px ${theme.colors.LIGHT_GRAY};
        
        &.active {
          box-shadow: 0 0 0 1px ${theme.colors.BLACK};
          background-color: ${theme.colors.LIGHTER_GRAY};
        }
      }
    }
    td {
    }
  }
`}`;

const StyledBalanceBlock = styled(Flex)`${({theme}) => `
  padding: 20px;
  border: 1px solid ${theme.colors.BLACK};
  box-sizing: border-box;
  border-radius: 2px;
  min-width: 230px;
`}`;

const Template: Story = (args) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedRow, setSelectedRow] = useState();
  const [isItemPurchased, setIsItemPurchased] = useState(false);
  const stepsConfig = [
    {
      label: 'SELECT SHARE',
      description: 'Select a share of the Artwork ',
      content: <Flex flexFlow="column">
          <p><b>available shares</b></p>
          <br/>
          <HR />
          <StyledPurchaseTable>
            <thead>
            <tr>
              <td></td>
              <td>Percentage</td>
              <td>Fractions</td>
              <td>Price</td>
            </tr>
            </thead>
            <tbody>
            <tr className={`bordered ${selectedRow === 1 && 'active'}`}>
              <td><Checkbox name="row1" isChecked={selectedRow === 1} onChange={() => setSelectedRow(1)} /></td>
              <td><b>20%</b></td>
              <td>200,000</td>
              <td><b>ICP 3,451.82</b></td>
            </tr>
            <tr className={`bordered ${selectedRow === 2 && 'active'}`}>
              <td><Checkbox name="row2"  isChecked={selectedRow === 2} onChange={() => setSelectedRow(2)} /></td>
              <td><b>40%</b></td>
              <td>400,000</td>
              <td><b>ICP 6,451.82</b></td>
            </tr>
            <tr className={`bordered ${selectedRow === 3 && 'active'}`}>
              <td><Checkbox name="row3"  isChecked={selectedRow === 3} onChange={() => setSelectedRow(3)} /></td>
              <td><b>60%</b></td>
              <td>600,000</td>
              <td><b>ICP 9,451.82</b></td>
            </tr>
            <tr className={`bordered ${selectedRow === 4 && 'active'}`}>
              <td><Checkbox name="row4"  isChecked={selectedRow === 4} onChange={() => setSelectedRow(4)} /></td>
              <td><b>80%</b></td>
              <td>800,000</td>
              <td><b>ICP 12,451.82</b></td>
            </tr>
            <tr className={`bordered ${selectedRow === 5 && 'active'}`}>
              <td><Checkbox name="row5"  isChecked={selectedRow === 5} onChange={() => setSelectedRow(5)} /></td>
              <td><b>100%</b></td>
              <td>1000,000</td>
              <td><b>ICP 15,451.82</b></td>
            </tr>
            </tbody>
          </StyledPurchaseTable>
          <br/>
          <Flex justify="space-between">
            <b style={{fontSize: 13}}>YOUR WALLET BALANCE</b>
            <StyledBalanceBlock flexFlow="column" align="center" gap={13}>
              <p><DifinityLogoIcon height={16} /><b>ICP</b></p>
              <h2>10,000.00</h2>
            </StyledBalanceBlock>
          </Flex>
        </Flex>
    },
    {
      label: 'CONFIRM',
      description: 'Confirm your selection',
      content: <Flex flexFlow="column">
          <p><b>YOUR PURCHASE</b></p>
          <br/>
          <HR />
          <StyledPurchaseTable>
            <thead>
            <tr>
              <td></td>
              <td>Percentage</td>
              <td>Fractions</td>
              <td>Price</td>
            </tr>
            </thead>
            <tbody>
            <tr className="bordered active">
              <td></td>
              <td><b>20%</b></td>
              <td>200,000</td>
              <td><b>ICP 3,451.82</b></td>
            </tr>
            <tr>
              <td></td>
              <td><p>Net Total</p><p>5% Fee</p></td>
              <td><p>ICP 6,903.64</p><p>ICP 345.18</p></td>
              <td></td>
            </tr>
            <tr className="footer">
              <td></td>
              <td><b>Total</b></td>
              <td><b> ICP 7,594.00</b></td>
              <td></td>
            </tr>
            </tbody>
          </StyledPurchaseTable>
        </Flex>
    },
    {
      label: 'PAYMENT',
      description: <>Transfer ICP from your balance to ORIGYN Art.<br/>The transaction can take up to 2 days.</>,
      content: <Flex flexFlow="column">
        <p><b>YOUR PURCHASE</b></p>
        <br/>
        <HR />
        <StyledPurchaseTable>
          <thead>
          <tr>
            <td></td>
            <td>Percentage</td>
            <td>Fractions</td>
            <td>Price</td>
          </tr>
          </thead>
          <tbody>
          <tr className="bordered active">
            <td></td>
            <td><b>20%</b></td>
            <td>200,000</td>
            <td><b>ICP 3,451.82</b></td>
          </tr>
          <tr>
            <td></td>
            <td><p>Net Total</p><p>5% Fee</p></td>
            <td><p>ICP 6,903.64</p><p>ICP 345.18</p></td>
            <td></td>
          </tr>
          <tr className="footer">
            <td></td>
            <td><b>Total</b></td>
            <td><b> ICP 7,594.00</b></td>
            <td></td>
          </tr>
          </tbody>
        </StyledPurchaseTable>
      </Flex>
    }
  ];
  const [StepperHeader, StepperContent, step, setStep] = useStepper(stepsConfig);

  const closeModal = () => {
    setIsOpened(false);
    setIsItemPurchased(false);
    setStep(0);
  }
  const openModal = () => {
    setIsOpened(true);
  }

  const buyItem = () => {
    setIsItemPurchased(true);
  }

  return (
    <div>
      <Button onClick={openModal}>Buy item</Button>
      <Modal
        isOpened={isOpened}
        closeModal={closeModal}
      >
        {
          isItemPurchased ? (
            <Flex flexFlow="column">
              <Flex gap={20} align="center"><CheckIcon fill="#50AA3E" /><h2>ICP Sent</h2></Flex>
              <br/>
              <p>Payment has been send to the seller’s wallet. The transaction can take up to 2 days.</p>
              <br/>
              <p>Once the payment has been received, the NFT will be transferred to your Portfolio.</p>
              <br/>
              <p><b>Check your portfolio for status updates.</b></p>
              <br/>
              <br/>
              <br/>
              <Flex flexFlow="column" align="center" gap={18}>
                <TransactionIcon />
                <p><b>IN PROGRESS</b></p>
              </Flex>
              <HR marginBottom={32} marginTop={92} />
              <Flex align="center" justify="flex-end" gap={50} fullWidth>
                <Button onClick={closeModal}>CONTINUE TO MY PORTFOLIO</Button>
              </Flex>
            </Flex>
          ) : (
            <>
              <Flex justify="space-between">
                <h2>Buy Shares</h2>
                <Flex>{StepperHeader}</Flex>
                <div></div>
              </Flex>
              <br/>
              <h4>{stepsConfig[step].description}</h4>
              {
                step === 2 && (
                  <>

                    <br/>
                    <TextInput
                      name="recipient"
                      placeholder="Enter wallet ID"
                      label="RECIPIENT (WALLET ADDRESS)"
                    />
                    <br/>
                  </>
                )
              }
              <br/>
              <Grid columns={2} gap={80}>
                <Flex flexFlow="column" gap={15}>
                  <img src="http://placehold.jp/526x325.png" alt=""/>
                  <h3>Nude Woman leaning on pillows</h3>
                  <h4>Pablo Picasso</h4>
                  <HR marginBottom={16} marginTop={16} />
                  <Flex justify="space-between">
                    <Flex flexFlow="column">
                      <p>Total value</p>
                      <p><b>ICP 1,000,000.00</b></p>
                    </Flex>
                    <Flex flexFlow="column">
                      <p>Total shares</p>
                      <p><b>10,000</b></p>
                    </Flex>
                    <div></div>
                  </Flex>
                </Flex>
                {StepperContent}
              </Grid>
              <HR marginBottom={32} marginTop={32} />
              <Flex align="center" justify="flex-end" gap={50} fullWidth>
                <b onClick={closeModal}>Cancel</b>
                {
                  step < stepsConfig.length - 1 ? (
                    <Button disabled={!selectedRow} onClick={() => setStep(step+1)}>NEXT: {stepsConfig[step + 1].label}</Button>
                  ) : (
                    <Button onClick={buyItem}>BUY NOW</Button>
                  )
                }
              </Flex>
            </>
          )
        }
      </Modal>
    </div>
  );
}

export const Default = Template.bind({});
Default.args = { title: 'Buy Shares'};
