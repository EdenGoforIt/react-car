import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { Marginer } from "../marginer";
import { Button } from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "react-calendar";
import "../../assets/styles/react-calendar.css";

const CardContainer = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  min-height: 4.3em;
  ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-6
        md:pr-6
    `};
`;

const ItemContainer = styled.div`
  ${tw`
        flex
        relative
    `}
`;

const Icon = styled.span`
  ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `}
`;

const Name = styled.span`
  ${tw`
        text-gray-600
        text-xs
        md:text-sm
 `}
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;

  ${tw`
        mr-2
        ml-2
        md:mr-5
        md:ml-5
        bg-gray-300
    `}
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  top: 1em;
  left: -1.5em;
  max-width: none;
  top: 1.5em;
`;

export function BookCard() {
  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Pick up Date</Name>
        <DateCalendar />
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Return Date</Name>
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button theme="filled" text="Book Your Ride" />
    </CardContainer>
  );
}
