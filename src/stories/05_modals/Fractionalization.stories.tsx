import React, { useState, useCallback } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import styled from "styled-components";
import Modal from "../../components/interface/Modal";
import Button from "../../components/interface/Button";
import Lots from "../../components/interface/Lots";

import TextInput from "../../components/interface/Inputs/TextInput";
import TextArea from "../../components/interface/Inputs/TextArea";
import Select from "../../components/interface/Inputs/Select";

import HR from "../../components/interface/HR";
import Grid from "../../components/layout/Grid";

import CheckboxInput from "../../components/interface/Inputs/CheckboxInput";
import { useStepper } from "../../components/interface/Stepper/Stepper";
import Flex from "../../components/layout/Flex";
export default {
  title: "Modals/Fractionalization",
} as Meta;

const InputWrapper = styled(Flex)`
  ${({ theme }) => `
    max-width: 200px;
    width: 100%;
    ${theme.media.md}{
        max-width: 100%;
    }
  `}
`;
const ModalTitle = styled.h2`
  ${({ theme }) => `
    font-weight: 500;
    font-size: 30px;
    ${theme.media.md}{
      font-size: 20px;
    }
  `}
`;
const ModalSubTitle = styled.p`
  ${({ theme }) => `
    font-weight: 500;
    font-size: 17px;
    margin: 20px 0;
  `}
`;

const options = [
  { value: "80000", label: "80000" },
  { value: "75000", label: "75000" },
  { value: "70000", label: "70000" },
  { value: "65000", label: "65000" },
  { value: "60000", label: "60000" },
];

const Template: Story = (args) => {
  const [isOpened, setIsOpened] = useState(false);
  const [lots, setLots] = useState([
    {
      quantity: 0,
      fractionPrice: 0,
      lotPrice: 0,
    },
  ]);
  const handleChangeLotValue = (index, value, key) => {
    const copyLots = [...lots];
    copyLots[index][key] = value;
    setLots(copyLots);
  };
  const handleDeleteLot = (currentIndex: number) => {
    const copyLots = [...lots];
    const newLots = copyLots.filter((_, index) => {
      return index !== currentIndex;
    });
    setLots(newLots);
  };

  const handleAddLot = () => {
    const copyLots = [...lots];
    const newLots = [
      ...copyLots,
      {
        quantity: 0,
        fractionPrice: 0,
        lotPrice: 0,
      },
    ];
    setLots(newLots);
  };
  const stepsConfig = [
    {
      label: `FRACTIONS & PRICE`,
      description: <>FRACTIONS & PRICE</>,
      content: <FractionsPrice />,
    },
    {
      label: "CREATE\n LOTS",
      description: <></>,
      content: (
        <CreateLots
          error=""
          lots={lots}
          handleDeleteLot={handleDeleteLot}
          handleAddLot={handleAddLot}
          handleChangeLotValue={handleChangeLotValue}
        />
      ),
    },
    {
      label: "SCHEDULE\n SALE",
      description: <></>,
      content: <ScheduleSale />,
    },
    {
      label: "SUBMIT\n SELL ORDER",
      description: <></>,
      content: <Flex flexFlow="column"></Flex>,
    },
  ];
  const [StepperHeader, StepperContent, step, setStep] =
    useStepper(stepsConfig);
  const closeModal = () => {
    setIsOpened(false);
    setStep(0);
  };
  const openModal = () => {
    setIsOpened(true);
  };

  const renderHeader = useCallback(() => {
    switch (step) {
      case 0:
        return (
          <>
            <ModalTitle>Fractions & Price</ModalTitle>
            <ModalSubTitle>
              How much do you want to sell of the Artwork and what’s your price?
            </ModalSubTitle>
          </>
        );
      case 1:
        return (
          <>
            <ModalTitle>Create Lots</ModalTitle>
            <ModalSubTitle>
              Divide the Artwork up in Lots and adjust prices. <br />
              You need a minimum of one Lot to sell on the Marketplace.
            </ModalSubTitle>
          </>
        );
      case 2:
        return (
          <>
            <ModalTitle>Schedule Sale</ModalTitle>
            <ModalSubTitle>
              Decide if you will accept Offers and schedule the start date and
              duration of the sale.
            </ModalSubTitle>
          </>
        );
      case 3:
        return (
          <>
            <ModalTitle>Artwork is now listed!</ModalTitle>
            <ModalSubTitle>
              The Sell Order has been submitted and your Artwork is listed on
              the open Marketplace. <br /> You will receive a notification email
              when Fractions sell. <br />
              <br /> Check the status of the sale in your portfolio at any time.
            </ModalSubTitle>
          </>
        );
    }
  }, [step]);

  const renderFullyDiluted = useCallback(() => {
    if (step === 0 || step === 3) {
      return;
    }
    return <FullyDilutedValue />;
  }, [step]);
  return (
    <div>
      <Button onClick={openModal}>Fractionalization</Button>
      <Modal title={args.title} isOpened={isOpened} closeModal={closeModal}>
        <Flex justify="center" style={{ marginBottom: 32 }}>
          {step !== 3 && StepperHeader}
        </Flex>
        <Flex flexFlow="column">{renderHeader()}</Flex>
        <div>
          <Flex flexFlow="row" justify="space-between" gap={50}>
            {StepperContent}
            {step !== 3 && <ItemCard />}
          </Flex>
        </div>
        <>{renderFullyDiluted()}</>
      </Modal>
    </div>
  );
};

const ItemCardWrapper = styled(Flex)`
  ${({ theme }) => `
    flex-flow: column;
    gap: 15px;
    ${theme.media.md}{
        flex-flow: row;
    }
  `}
`;
const ItemCardTitle = styled.h3`
  ${({ theme }) => `
    font-size: 17px;
    font-weight: 600;
    line-height: 22px;

    ${theme.media.md}{
        font-size: 15px;
    }
  `}
`;
const ItemCardSubTitle = styled.p`
  ${({ theme }) => `
    font-size: 15px;
    font-weight: 400;
    color: #151515;
    ${theme.media.md}{
        font-size: 15px;
    }
  `}
`;

const ItemCardImage = styled.img`
  ${({ theme }) => `            
    
    height: 100%;
    max-width: 360px;
    max-height: 220px;
    ${theme.media.lg}{
      width: 100%;
      max-width: 280px;
      max-height: 150px;
    }
    ${theme.media.md}{
      width: 100%;
      max-width: 100px;
      max-height: 66px;
    }
    
  `}
`;

const ItemCard = () => {
  return (
    <ItemCardWrapper>
      <ItemCardImage src="http://placehold.jp/360x220.png" alt="image" />
      <Flex flexFlow="column">
        <ItemCardTitle>The Newlyweds with Rooster, 1975</ItemCardTitle>
        <ItemCardSubTitle>Marc Chagall</ItemCardSubTitle>
      </Flex>
    </ItemCardWrapper>
  );
};

const StyledFullyDilutedValueBlock = styled(Flex)`
  width: 50%;
  font-weight: 600;
  font-size: 15px;
`;
const FullyDilutedValue = ({ value = 0 }) => {
  return (
    <>
      <HR marginBottom={32} marginTop={32} />
      <Flex>
        <StyledFullyDilutedValueBlock>
          Fully Diluted Value
        </StyledFullyDilutedValueBlock>
        <StyledFullyDilutedValueBlock>{value}</StyledFullyDilutedValueBlock>
      </Flex>
    </>
  );
};

//Lots Tab

const CreateLots = ({
  lots,
  error,
  handleAddLot,
  handleDeleteLot,
  handleChangeLotValue,
}) => {
  return (
    <Flex fullWidth flexFlow="column">
      <SellInfo />
      <Lots
        lots={lots}
        error={error}
        quantityOptions={options}
        fractionPriceOptions={options}
        lotPriceOptions={options}
        handleAddLot={handleAddLot}
        handleDeleteLot={handleDeleteLot}
        handleChangeLotValue={handleChangeLotValue}
      />
    </Flex>
  );
};

//FractionsPrice Tab
const FractionsPriceSelectWrapper = styled(Flex)`
  ${({ theme }) => `
    background-color: #f5f5f5;
    padding: 38px 24px;
    justify-content: space-between;
    margin-top: 18px;
    ${theme.media.md}{
      flex-flow: column;
    }
  `}
`;

const FractionsPrice = () => {
  return (
    <Flex fullWidth flexFlow="column">
      <InputWrapper>
        <Select name="totalFractions" label="Total Fractions" />
      </InputWrapper>
      <p style={{ marginTop: 24 }}>
        Configure the number of fractions you want to sell and set your
        targetprice.
      </p>
      <p>In the next step, you can divide the fractions for sale up in lots.</p>

      <FractionsPriceSelectWrapper>
        <InputWrapper>
          <Select name="fractions" label="Fractions for Sale" />
        </InputWrapper>
        <InputWrapper>
          <Select name="pricePerFraction" label="Price per Fraction" />
        </InputWrapper>
        <InputWrapper>
          <Select name="askPrice" label="Ask Price" />
        </InputWrapper>
      </FractionsPriceSelectWrapper>
    </Flex>
  );
};

//Schedule Sale Tab
const ScheduleSaleInputsWrapper = styled(Flex)`
  margin: 24px 0 0 0;
`;

const ScheduleSale = () => {
  return (
    <Flex flexFlow="column">
      <CheckboxInput
        name="permission"
        label="Allow Buyers to submit an Offer for your consideration."
      />
      <ScheduleSaleInputsWrapper gap={18}>
        <InputWrapper>
          <Select label="Duration of Sale" name="duration" />
        </InputWrapper>
        <InputWrapper>
          <Select label="Start Date" name="start" />
        </InputWrapper>
      </ScheduleSaleInputsWrapper>
      <ScheduleSaleInputsWrapper gap={18} align="flex-end">
        <InputWrapper>
          <Select label="Lock-up Period" name="lockUp" />
        </InputWrapper>
        <InputWrapper>
          <Select label={" "} name="lockUpdate" />
        </InputWrapper>
      </ScheduleSaleInputsWrapper>
      <p>
        During the Lock-up Period you are the only person who can sell fractions
        of the artwork.
      </p>
    </Flex>
  );
};

const Col = styled("div")`
  width: 100%;
`;
const SellInfo = () => {
  return (
    <>
      <Flex
        fullWidth
        style={{
          padding: "15px 5px",
          backgroundColor: "#6F6F6F",
          color: "white",
        }}
      >
        <Col style={{ padding: 0, maxWidth: 40 }}></Col>
        <Col style={{ padding: "0 10px", maxWidth: 200 }}>
          <Flex flexFlow="column" align="center">
            Fractions for Sale
            <b>40000</b>
          </Flex>
        </Col>
        <Col style={{ padding: "0 10px", maxWidth: 200 }}>
          <Flex flexFlow="column" align="center">
            Price per Fraction
            <b>25.00</b>
          </Flex>
        </Col>
        <Col style={{ padding: "0 10px", maxWidth: 200 }}>
          <Flex flexFlow="column" align="center">
            Ask Price
            <b>1,000,000.00</b>
          </Flex>
        </Col>
        <Col style={{ padding: "0 10px", maxWidth: 20 }}></Col>
      </Flex>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "",
};
