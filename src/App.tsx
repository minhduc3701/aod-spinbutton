import React from "react";
import "./App.css";
import { Toggle } from "aod-dependencies/Toggle";
import { initializeIcons } from "aod-dependencies/@uifabric/icons";
import { Wrapper } from "./AppStyle";
import CustomSpinButton from "aod-dependencies/SpinButton/CustomSpinButton";

initializeIcons();

function App() {
  const [darkMode, setDarkMode] = React.useState<string>("");
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const onChangeMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    }
    if (darkMode !== "dark") {
      setDarkMode("dark");
    }
  };
  const onChangeDisable = () => {
    setDisabled(!disabled);
  };
  return (
    <div className="App">
      <Wrapper theme={darkMode}>
        <div className="toggle-wrapper">
          <Toggle label="Dark mode" onChange={onChangeMode} />
          <Toggle label="Disable" onChange={onChangeDisable} />
        </div>
        <CustomSpinButton
          defaultValue="0"
          label={"Basic SpinButton:"}
          min={0}
          max={100}
          step={1}
          disabled={disabled}
          //<SpinButtonDarkMode>
          darkMode={darkMode}
          //</SpinButtonDarkMode>
          iconProps={{ iconName: "IncreaseIndentLegacy" }}
          incrementButtonAriaLabel={"Increase value by 1"}
          decrementButtonAriaLabel={"Decrease value by 1"}
        />
      </Wrapper>
    </div>
  );
}

export default App;
