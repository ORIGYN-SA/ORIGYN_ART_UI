import React from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Grid from "../../layout/Grid";
import Slider, { SliderProps } from "./Slider";
import Flex from "../../layout/Flex";

export default {
  title: "Components/Interface/Slider",
  component: Slider,
} as Meta;

const Image = styled("div")``;

const Slide = styled(Flex)`
  display: flex;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  gap: 30px;
  padding: 100px 32px;

  :first-child {
    flex-grow: 1;
  }
  :nth-child(1) {
    text-align: left;
    flex-grow: 2;
  }
`;

const Template: Story<SliderProps> = (args) => (
  <div>
    <Slider {...args}>
      <Slide>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="154"
            height="84"
            viewBox="0 0 154 84"
            fill="none"
          >
            <path
              d="M32.4627 46.6242V45.8847L31.8761 45.4343L4.91342 24.735L2.5 22.8822V25.9248V56.7756V57.5151L3.08662 57.9655L30.0493 78.6631L32.4627 80.5157V77.4732V46.6242Z"
              fill="#151515"
              stroke="white"
              strokeWidth="3"
            />
            <path
              d="M32.7414 2.67342L31.828 1.97228L30.9147 2.67345L4.05242 23.2949L2.5025 24.4847L4.05242 25.6746L30.9147 46.296L31.828 46.9972L32.7414 46.296L59.6054 25.6746L61.1554 24.4847L59.6054 23.2949L32.7414 2.67342Z"
              fill="#151515"
              stroke="white"
              strokeWidth="3"
            />
            <path
              d="M31.7802 45.4343L31.1936 45.8846V46.6242V77.4732V80.5156L33.6069 78.6631L60.5713 57.9655L61.158 57.5152V56.7756V25.9248V22.8823L58.7446 24.735L31.7802 45.4343Z"
              fill="#151515"
              stroke="white"
              strokeWidth="3"
            />
            <path
              d="M152.996 25.228C152.996 24.9596 152.872 24.7051 152.659 24.5424L124.829 3.18004C124.813 3.16792 124.794 3.17311 124.779 3.16273C124.64 3.06925 124.483 3 124.303 3C124.123 3 123.965 3.06751 123.827 3.16273C123.811 3.17311 123.79 3.16792 123.776 3.18004L95.9482 24.5424C95.7352 24.7069 95.6106 24.9596 95.6106 25.228V56.7764C95.6106 56.7955 95.621 56.8128 95.621 56.8318C95.6227 56.8699 95.6279 56.9045 95.6348 56.9409C95.6418 56.979 95.6521 57.0136 95.666 57.0499C95.6781 57.0863 95.6902 57.1209 95.7075 57.1555C95.7231 57.1884 95.7439 57.2179 95.7647 57.249C95.7751 57.2663 95.7785 57.2854 95.7906 57.3027C95.801 57.3165 95.8166 57.32 95.8287 57.3338C95.8564 57.365 95.8824 57.3927 95.9136 57.4204C95.9274 57.4325 95.9343 57.4498 95.9499 57.4619L123.778 78.8261C123.794 78.8382 123.813 78.833 123.828 78.8434C123.967 78.9369 124.124 79.0061 124.304 79.0061C124.484 79.0061 124.642 78.9386 124.78 78.8434C124.796 78.833 124.817 78.8382 124.831 78.8261L152.661 57.4619C152.676 57.4498 152.683 57.4325 152.697 57.4204C152.726 57.3944 152.752 57.3685 152.778 57.339C152.79 57.3252 152.808 57.3183 152.82 57.3027C152.832 57.2854 152.835 57.2663 152.846 57.249C152.867 57.2179 152.886 57.1884 152.903 57.1555C152.92 57.1209 152.932 57.0863 152.945 57.0499C152.957 57.0136 152.967 56.979 152.976 56.9409C152.983 56.9045 152.988 56.8699 152.99 56.8318C152.991 56.8128 153 56.7955 153 56.7764V25.228H152.996ZM151.265 55.0193L133.003 41.0022L151.265 26.9833V55.0193ZM131.582 39.9116L125.167 34.9864V5.62096L150.71 25.228L131.582 39.9116ZM124.301 45.5014L118.441 41.0022L124.301 36.5047L130.161 41.0022L124.301 45.5014ZM123.435 5.62096V34.9864L117.02 39.9116L97.894 25.228L123.435 5.62096ZM115.598 41.0022L97.3383 55.0193V26.9833L115.598 41.0022ZM117.02 42.0928L123.435 47.0179V76.3834L97.894 56.7747L117.02 42.0928ZM125.167 47.0179L131.582 42.0928L150.71 56.7747L125.167 76.3851V47.0179Z"
              fill="#151515"
              stroke="#151515"
            />
            <path
              d="M90.9762 41.1359L80.1894 31.0156V39.2888H65.1665V43.7725H80.1894V51.9227L90.9762 41.1359Z"
              fill="black"
            />
          </svg>
        </div>
        <div>
          <h3>Digital Twin</h3>
          <br />
          <p>
            Once our governance approves a physical work of art to be added to
            the ORIGYN system, it is then tokenized into a digital twin—a
            virtual duplicate of the authenticated physical object.
          </p>
          <br />
          <p>
            ORIGYN creates this digital twin, which serves as a permanent
            certificate of authenticity. This becomes the starting point for
            owners to fractionalize their highly desirable works of art for sale
            on an open market. It is also the basis for buyers to confirm the
            authenticity of these select works.
          </p>
        </div>
      </Slide>
      <div>Slide1</div>
      <div>Slide1</div>
    </Slider>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
