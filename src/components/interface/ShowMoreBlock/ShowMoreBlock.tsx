import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Flex from "../../layout/Flex";
import './ShowMoreBlock.scss'

const StyledShowMoreBlock = styled("div")``;

// const OverflowText = styled("div")<{ showFull?: boolean }>`
//   height: ${({ showFull }) =>
//     showFull ? "auto" : "calc(var(--text-line-height) * 2em)"};
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

const ShowMoreBlock: React.FC<PropsWithChildren<{ btnText?: string }>> = ({
  btnText,
  children,
}) => {
  const [showFull, setShowFull] = useState<boolean | undefined>(true);
  const [overflow, setOverflow] = useState<boolean | undefined>(false);
  const textBlock = useRef(null);

  useEffect(() => {
    if (overflow === false) {
      if (textBlock.current.scrollHeight > textBlock.current.offsetHeight) {
        setOverflow(true);
      }
    } else {
      return;
    }
    if (textBlock.current.scrollHeight > textBlock.current.offsetHeight) {
      setShowFull(true);
    } else {
      setShowFull(false);
    }
  }, [textBlock]);

  return (
    <Flex flexFlow="column" align="flex-start" gap={8}>
      {showFull ? 
      (<div className="overflow-text-div" ref={textBlock} style={{height: "auto"}}>
        {children}
      </div>) : 
      (<div className="overflow-text-div" ref={textBlock} style={{height: "calc(var(--text-line-height) * 2em)"}}>
        {children}
      </div>)}
      {overflow && (
        <>
          {showFull ? (
            <Button size="small" textButton onClick={() => setShowFull(false)}>
              {btnText ? btnText : "Show more"}
            </Button>
          ) : (
            <Button size="small" textButton onClick={() => setShowFull(true)}>
              Hide
            </Button>
          )}
        </>
      )}
    </Flex>
  );
};

export default ShowMoreBlock;
