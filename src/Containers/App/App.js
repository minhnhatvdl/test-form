import React from "react";
import Button from "../../Components/Button/Button";
import DynamicComponent from "../DynamicComponent/DynamicComponent";
// HOCs
import { withOnTopRight } from "../../HOCs/withOnTopRight";
import { withComponents } from "../../HOCs/withComponents";
import { withToggleTheme } from "../../HOCs/withToggleTheme";
// providers
import AppProvider from "../../Providers/AppProvider";

const App = () => {
  const ButtonWithOnTopRight = withToggleTheme(withOnTopRight(Button));
  const DynamicComponentWithInitComponent = withComponents(DynamicComponent);
  return (
    <AppProvider>
      <ButtonWithOnTopRight>Toggle theme</ButtonWithOnTopRight>
      <DynamicComponentWithInitComponent />
    </AppProvider>
  );
};
export default App;
