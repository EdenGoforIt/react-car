import { faCalendarAlt, faHand } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
const Container = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3
        lg:pt-6
        lg:pt-7

    `}
`;

const Title = styled.h2`
  ${tw`
        text-xl
        lg:text-4xl
        text-black
        font-extrabold
    `}
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
  `}
`;

const StepContainer = styled.div`
  ${tw`
        flex
        flex-col
        items-center
        cursor-text
        transition-colors
        hover:text-red-500
    `}
`;

const Step = styled.div`
  ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6
    `}
`;

const StepTitle = styled.h4`
  ${tw`
        text-black
        text-lg
        font-semibold
        mt-4
    `}
`;

const StepDescription = styled.p`
  ${tw`
        text-xs
        md:text-sm
        text-center
        w-10/12
        text-gray-600

`}
`;

const StepIcon = styled.span`
  ${tw`
        text-red-500
        text-3xl
        mr-2
        mb-2
    `}
`;

export function BookingSteps() {
  return (
    <Container>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
            <StepTitle>Choose Location</StepTitle>
            <StepDescription>
              Find the nearest car point and book your car
            </StepDescription>
          </Step>
        </StepContainer>

        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
            <StepTitle>Pick-up Date</StepTitle>
            <StepDescription>Pck up the date to rent a car</StepDescription>
          </Step>
        </StepContainer>

        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faHand} />
            </StepIcon>
            <StepTitle>Book a Car</StepTitle>
            <StepDescription>Book your Car</StepDescription>
          </Step>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
