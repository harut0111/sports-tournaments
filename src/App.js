import React from "react";
import "./style/index.scss";
import { StateProvider } from "./context/index";
import { initialState, reducer } from "./context/reducer";
import SearchBox from "./components/SearchBox";
import SavedItems from "./components/SavedItems";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <SearchBox />
      <SavedItems />
    </StateProvider>
  );
}

export default App;
