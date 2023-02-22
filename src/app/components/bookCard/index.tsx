import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  faCalendarAlt,
  faCaretSquareDown,
  faCaretSquareUp,
} from "@fortawesome/free-regular-svg-icons";
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
const SmallIcon = styled.span`
  ${tw`
    text-gray-700
    fill-current
    text-xs
    mt-0.5
    md:text-base
    ml-1
  `}
`;

const Name = styled.span`
  ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        mt-1
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
  top: 3.5em;
`;

export function BookCard() {
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);

  const [returnDate, setReturnDate] = useState(new Date());
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);

  const openStartCalendar = () => {
    if (isReturnCalendarOpen) setIsReturnCalendarOpen(false);
    setIsStartCalendarOpen(!isStartCalendarOpen);
  };

  const openReturnCalendar = () => {
    if (isStartCalendarOpen) setIsStartCalendarOpen(false);
    setIsReturnCalendarOpen(!isReturnCalendarOpen);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={openStartCalendar}>Pick up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretSquareUp : faCaretSquareDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar
            value={startDate}
            onChange={(event: any) => {
              openStartCalendar();
              setStartDate(event);
            }}
          />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={openReturnCalendar}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretSquareUp : faCaretSquareDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar
            value={returnDate}
            onChange={(event: any) => {
              openReturnCalendar();
              setReturnDate(event);
            }}
          />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button theme="filled" text="Book Your Ride" />
    </CardContainer>
  );
}
