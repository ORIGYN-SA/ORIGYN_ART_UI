import React from "react";
import styled from "styled-components";
import Flex from "../../layout/Flex";
import Select from "../Inputs/Select";
import { numberWithCommas } from "../../../utils/index";

export interface LotsProps {
  error?: any;
  lots: any;
  handleAddLot: Function;
  handleDeleteLot: Function;
  quantityOptions: any;
  fractionPriceOptions: any;
  lotPriceOptions: any;
  handleChangeLotValue: Function;
}

interface LotRowProps extends Omit<LotsProps, "lots" | "handleAddLot"> {
  index: number;
  quantity: any;
  fractionPrice: any;
  lotPrice: any;
}
const LotsHeaderWrapper = styled(Flex)`
  ${({ theme }) => `
    padding: 15px 5px;
    text-align: center;
    ${theme.media.sm} {
      display: none;
    }
  `}
`;
const SelectWrapper = styled.div`
  ${({ theme }) => `
    width: 100%;
    padding: 0 10px;
    max-width: 200px;
    ${theme.media.sm} {
      display: flex;
      align-items: center;
      text-align: end;
      max-width: 100%;
      padding: 0;
    }
  `}
`;
const Col = styled.div`
  width: 100%;
`;
const Square = styled(Flex)`
  ${({ theme }) => `
    min-width: 40px;
    height: 40px;
    background-color: #000000;
    color: white;
    font-weight: 600;
    font-size: 15px;
    ${theme.media.sm} {
      position: absolute;
    }
  `}
`;
const ErrorMessage = styled.p`
  color: #e42932;
  font-weight: 400;
  font-size: 15px;
  padding-left: 64px;
  padding-top: 10px;
`;

const StyledLotRow = styled(Flex)`
  ${({ theme }) => `
    background-color: #f5f5f5;
    padding: 5px;
    border: 1px solid #151515;
    margin: 5px 0;
    ${theme.media.sm} {
      position: relative;
    }
  `}
`;
const LotsWrapper = styled.div`
  ${({ theme }) => `
    display: contents;
    ${theme.media.sm} {
      display: block;
      margin-top: 50px;
      width: 100%;
    }
  `}
`;
const MobileLotTitle = styled.span`
  ${({ theme }) => `
    display: none;
    ${theme.media.sm} {
      display: block;
      width: 100%;
      padding-right: 10px;
    }
  `}
`;
const CloseIconWrapper = styled.div`
  ${({ theme }) => `
    padding: 0 10px;
    max-width: 40px;
    ${theme.media.sm} {
      position: absolute;
      top: 17px;
      right: 15px;
    }
  `}
`;
const CloseIcon = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    content: " ";
    height: 16px;
    width: 2px;
    background-color: #333;
    left: 50%;
    top: 50%;
  }
  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const AddLot = styled.button`
  font-weight: 700;
  background: transparent;
  outline: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  display: flex;
`;

const Lots = ({
  error,
  lots,
  handleAddLot,
  handleDeleteLot,
  quantityOptions,
  fractionPriceOptions,
  lotPriceOptions,
  handleChangeLotValue,
}: LotsProps) => {
  return (
    <>
      <LotsHeaderWrapper fullWidth>
        <Col style={{ padding: 0, maxWidth: 40 }}>
          <span>Lot</span>
        </Col>
        <Col style={{ padding: "0 10px", maxWidth: 200 }}>
          <span>Quantity</span>
        </Col>
        <Col style={{ padding: "0 10px", maxWidth: 200 }}>
          <span>Price per Fraction</span>
        </Col>
        <Col style={{ padding: "0 10px", maxWidth: 200 }}>
          <span>Lot Price</span>
        </Col>
        <Col style={{ padding: "0 10px", maxWidth: 40 }}></Col>
      </LotsHeaderWrapper>
      {lots.map((lot: any, i: number) => (
        <LotRow
          key={i}
          index={i}
          handleDeleteLot={handleDeleteLot}
          quantityOptions={quantityOptions}
          fractionPriceOptions={fractionPriceOptions}
          lotPriceOptions={lotPriceOptions}
          quantity={lot.quantity}
          fractionPrice={lot.fractionPrice}
          lotPrice={lot.lotPrice}
          handleChangeLotValue={handleChangeLotValue}
        />
      ))}

      {error && <ErrorMessage>{error}</ErrorMessage>}
      <AddLot onClick={() => handleAddLot()}>+ ADD LOT</AddLot>
    </>
  );
};

const LotRow = ({
  index,
  handleDeleteLot,
  quantityOptions = [],
  fractionPriceOptions = [],
  lotPriceOptions = [],
  quantity,
  fractionPrice,
  lotPrice,
  handleChangeLotValue,
}: LotRowProps) => {
  return (
    <StyledLotRow>
      <Square align="center" justify="center">
        {index + 1}
      </Square>
      <LotsWrapper>
        <SelectWrapper>
          <MobileLotTitle>Quantity</MobileLotTitle>
          <Select
            height="40px"
            options={quantityOptions}
            selectedOption={quantity}
            handleChange={(event) =>
              handleChangeLotValue(index, event, "quantity")
            }
          />
        </SelectWrapper>
        <SelectWrapper>
          <MobileLotTitle>Price per Fraction</MobileLotTitle>
          <Select
            height="40px"
            options={fractionPriceOptions}
            selectedOption={fractionPrice}
            handleChange={(event) =>
              handleChangeLotValue(index, event, "fractionPrice")
            }
          />
        </SelectWrapper>
        <SelectWrapper>
          <MobileLotTitle>Lot Price</MobileLotTitle>
          <Select
            height="40px"
            options={lotPriceOptions}
            selectedOption={lotPrice}
            handleChange={(event) =>
              handleChangeLotValue(index, event, "lotPrice")
            }
          />
        </SelectWrapper>
      </LotsWrapper>

      <CloseIconWrapper>
        <CloseIcon onClick={() => handleDeleteLot(index)} />
      </CloseIconWrapper>
    </StyledLotRow>
  );
};

export default Lots;
