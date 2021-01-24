import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import DashboardContainer from "../containers/DashboardContainer";
import GameContainer from "../containers/GameContainer";
import HomeContainer from "../containers/HomeContainer";
import SettingsContainer from "../containers/SettingsContainer";
import SignContainer from "../containers/SignContainer";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/sign" }} />
      )
    }
  />
);

const mapStateToProps = (state) => ({ user: state.user });

const BrowserRouter = ({ user }) => (
  <Router>
    <Layout>
      {user.isAuthenticated ? (
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/game/:id" component={GameContainer} />
          <PrivateRoute
            exact
            path="/dashboard"
            component={DashboardContainer}
          />
          <PrivateRoute exact path="/settings" component={SettingsContainer} />
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/sign" component={SignContainer} />
          <Route exact path="/game/:id" component={GameContainer} />
          <Route component={HomeContainer} />
          <Redirect to="/" />
        </Switch>
      )}
    </Layout>
  </Router>
);

export default connect(mapStateToProps)(BrowserRouter);
