import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { FinderContainer } from "./containers/Finder/Finder";
import "./App.sass";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <FinderContainer />
    </Provider>
  );
};

export default App;
