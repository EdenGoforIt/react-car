import "./App.css";
import styled from "styled-components";
import tw from "twin.macro";
import { HomePage } from "./app/containers/HomePage";
import { useRef } from "react";
import { useOnClickOutside } from "./app/hooks/useOnClickOutside";

const AppContainer = styled.div`
  ${tw`
		w-full
		h-full
		flex
		flex-col
	`}
`;

function App() {
  const ref = useRef(null);

  useOnClickOutside(ref, () => console.log("clicked"));

  return (
    <AppContainer ref={ref}>
      <HomePage />
    </AppContainer>
  );
}

export default App;
