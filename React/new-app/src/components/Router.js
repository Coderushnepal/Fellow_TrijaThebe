import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import history from "./utils/history";
import * as routes from "../constants/routes";

import Main from "./main";
import Favorites from "./favorites"

const AppRouter = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path={routes.HOME} component={Main} />
      <Route exact path={routes.FAVORITES} component={Favorites} />
      {/* <MainRouter /> */}
    </Switch>
  </BrowserRouter>
);

export default AppRouter;