import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../layout/Flex";
import { theme } from "../../../utils";

export type BreadCrumbsProps = {
  data: Array<{ title: string; link: string }>;
};

const SBreadCrumbs = styled("div")`
  display: flex;
  font-size: 10px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.1px;
  text-align: left;
  font-weight: 400;
  color: ${theme.colors.BREADCRUMB_TEXT};
  background-color: ${theme.colors.ACCENT_PURPLE_900};
  padding: 16px 32px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  svg {
    fill: ${theme.colors.TEXT};
  }
  }
`;

const BreadCrumbs = ({ data }: BreadCrumbsProps) => {
  return (
    <SBreadCrumbs>
      {data.map(({ link, title }, index) => (
        <Flex gap={15} smFlexFlow="row" align="center" key={title}>
          {index > 0 && (
            <span
              className="material-symbols-rounded"
              style={{
                fontSize: 12,
                color:
                  index != data.length - 1
                    ? theme.colors.BREADCRUMB_TEXT
                    : theme.colors.BREADCRUMB_TEXT_ACTIVE,
              }}
            >
              chevron_right
            </span>
          )}
          {index + 1 === data.length ? (
            <span
              style={{
                color:
                  index != data.length - 1
                    ? theme.colors.BREADCRUMB_TEXT
                    : theme.colors.BREADCRUMB_TEXT_ACTIVE,
              }}
            >
              {title}
            </span>
          ) : (
            <Link
              style={{
                color:
                  index != data.length - 1
                    ? theme.colors.BREADCRUMB_TEXT
                    : theme.colors.BREADCRUMB_TEXT_ACTIVE,
              }}
              to={link}
            >
              {title}
            </Link>
          )}
        </Flex>
      ))}
    </SBreadCrumbs>
  );
};

export default BreadCrumbs;
