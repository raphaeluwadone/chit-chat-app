import React from "react";
import { Route, Switch } from "react-router-dom";
import Chat from "../components/Chat/Chat";
import Signup from '../components/signup/Signup'



const ROUTES = [
    { path: "/", key: "ROOT", exact: true, component: () => <Signup /> },
    { path: "/chat", key: "ROOT", exact: true, component: () => <Chat /> }
]

export default ROUTES

function AllRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    );
  }

export function RenderRoutes({ routes }) {
    return (
      <>
        <Switch>
          {routes.map((route, i) => {
            return <AllRoutes key={route.key} {...route} />;
          })}
          <Route component={() => <h1 className="font-black">Not Found!</h1>} />
        </Switch>
      </>
    );
  }