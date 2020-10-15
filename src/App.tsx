import React from "react";
import GlobalStyle from "./Styles/gStyle";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Principal from "./pages/Principal";
import NossaCarta from "./pages/NossaCarta";
import DrinkSemana from "./pages/DrinkSemana";
import LinkError from "./pages/LinkError";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/main" component={Principal} />
        <Route path="/nossa_carta" component={NossaCarta} />
        <Route path="/drink_semana" component={DrinkSemana} />
        <Route path="*" component={LinkError} />
      </Switch>
    </Router>
  );
};
export default App;
