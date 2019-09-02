import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.sass";
import { StartPage } from "./features/StartPage/StartPage";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./shared/Navigation";

const LazyStartPage = lazy(() => import("./features/StartPage"));
const LazyFinder = lazy(() => import("./features/Finder"));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation></Navigation>
        <Suspense fallback={"Loading..."}>
          <Switch>
            <Route exact path="/" component={LazyStartPage} />
            <Route path="/finder" component={LazyFinder} />
            <Route component={StartPage} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
