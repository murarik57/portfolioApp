import React from "react";
import "./withspinner.styles";
import { SpinnerContainer, SpinnerOverlay } from "./withspinner.styles";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
