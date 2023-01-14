import React, { PropsWithChildren, useRef, useEffect, useState } from "react";
import ReactModal from "react-modal";
import Flex from "../../layout/Flex";
import Container from "../../layout/Container";
import { theme } from "../../../utils"
import styled from 'styled-components';

export type ProgressProps = {
    open: boolean;
    title: string;
    itemIndex: number;
    itemsTotal: number;
    successMessage: string;
    durationMsSuccess: number;
}

const StyledModal = styled(ReactModal) <{ size: string }>`
  &.ReactModalPortal {
  }
  &.ReactModal__Content {
    ::-webkit-scrollbar {
      display: none;
    }
    
    position: absolute;
    inset: 50% auto auto 50%;

    padding: 0;
    top: 50px;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, 0);
    border: none;
    box-shadow: 0px 10px 15px -3px rgba(26, 32, 44, 0.1),
      0px 4px 6px -2px rgba(26, 32, 44, 0.05);
    overflow-y: auto;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.BACKGROUND};
    color: ${({ theme }) => theme.colors.TEXT};
    width: auto;
    max-height: calc(100% - 100px);

    ${({ theme }) => theme?.media?.lg} {
      max-width: calc(100% - 48px);
    }
  }
  ${({ theme }) => theme?.media?.sm} {
    &.ReactModal__Content {
      inset: auto;
      left: 0;
      right: 0;
      transform: translate(0, 0);
      margin-right: 0;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100vh;
      border-radius: 0;
    }
  }
`;

const StyledProgressContainer = styled.div`
margin-top:48px;
margin-bottom:32px;
margin-left:48px;
margin-right:48px;
height:100%;
`
const StyledProgressTitle = styled.div`
font-size:28px;
color:${theme.colors.TEXT};
`
const StyledProgressMessage = styled.div`
font-size:14px;
color:${theme.colors.SECONDARY_TEXT};
margin-top:32px;
`
const StyleProgressLineContainer = styled.div`
width:538px;
height:6px;
background-color:${theme.colors.PRIMARY_400};
margin-top:16px;
border-radius:999px;
`
const StyleProgressLine = styled.div`
height:6px;
background-color:#000000;
border-radius: 0px 999px 999px 0px;
`
const StyleSuccess = styled.div`
margin-top:16px;
font-size:14px;
color:${theme.colors.SECONDARY_TEXT};
margin-top:16px;
`
const ProgressBar = ({ open, title, itemIndex, itemsTotal, successMessage, durationMsSuccess }: PropsWithChildren<ProgressProps>) => {
    durationMsSuccess = durationMsSuccess || 3000;
    const [Open, setIsOpen] = useState(open)
    const progressLine = useRef<HTMLDivElement>(null);
    const successMsg = useRef<HTMLDivElement>(null);
    const msg = useRef<HTMLDivElement>(null);

    const setLineProgress = () => {

        if (successMsg.current) {
            if (itemIndex == itemsTotal) {
                msg.current.style.display = "none";
                successMsg.current.style.display = "block";
                setTimeout(() => {
                    setIsOpen(false);
                }, durationMsSuccess);
            } else {
                successMsg.current.style.display = "none";
                msg.current.style.display = "block";
            }
        }

        const width = (itemIndex / itemsTotal) * 100;
        if (progressLine.current) {
            progressLine.current.style.width = `${width}%`;
        }
    }

    useEffect(() => {
        if (itemIndex > 0) {
            setLineProgress();
        }
    }, [itemIndex, open]);




    return (
        <StyledModal
            isOpen={Open}
            style={{
                overlay: {
                    zIndex: 10000,
                }
            }}
            size='full'
        >

            <Container>
                <StyledProgressContainer>
                    <StyledProgressTitle>
                        {title}
                    </StyledProgressTitle>
                    {
                        itemIndex > 0 ? (
                            <>
                                <Flex align="center" justify="center">
                                    <StyleSuccess
                                        ref={successMsg}>
                                        {successMessage}
                                    </StyleSuccess>
                                    <StyledProgressMessage ref={msg}>
                                        {itemIndex} of {itemsTotal}
                                    </StyledProgressMessage>
                                </Flex>
                                <StyleProgressLineContainer>
                                    <StyleProgressLine onClick={setLineProgress} ref={progressLine} />
                                </StyleProgressLineContainer>
                            </>
                        ) : (
                            <Flex align="center" justify="center">
                                Loading...
                            </Flex>
                        )
                    }
                </StyledProgressContainer>
            </Container>

        </StyledModal>
    )
}


export default ProgressBar;