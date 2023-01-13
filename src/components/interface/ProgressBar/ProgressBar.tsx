import React, { PropsWithChildren } from "react";
import Modal from "../Modal";
import Flex from "../../layout/Flex";
import Container from "../../layout/Container";
import { theme } from "../../../utils"
import styled from 'styled-components';

export type ProgressProps = {
    open: boolean;
    closeModal: () => void;
    itemsNumber: number;
    title: string;
}
const StyledProgressContainer = styled.div`
margin-top:48px;
margin-bottom:32px;
margin-left:48px;
margin-right:48px;
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
width:90%;
height:6px;
background-color:#000000;
border-radius: 0px 999px 999px 0px;
`
const ProgressBar = ({ open, closeModal, title }: PropsWithChildren<ProgressProps>) => {
    return (
        <Modal isOpened={open} closeModal={closeModal}>
            <Container>
                <StyledProgressContainer>
                    <StyledProgressTitle>
                        {title}
                    </StyledProgressTitle>
                    <Flex align="center" justify="center">
                        <StyledProgressMessage>
                            1/5
                        </StyledProgressMessage>
                    </Flex>
                    <StyleProgressLineContainer>
                        <StyleProgressLine />
                    </StyleProgressLineContainer>
                </StyledProgressContainer>
            </Container>
        </Modal>
    )
}


export default ProgressBar;