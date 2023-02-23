import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navBar";
import { BookingSteps } from "./bookingSteps";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  ${tw`
	flex
	flex-col
	w-full
	h-full
	items-center
	overflow-x-hidden 
	 `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="2em" />
      <BookCard />
      <Marginer direction="vertical" margin="5em" />
      <BookingSteps />
    </PageContainer>
  );
}
