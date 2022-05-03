import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./Login";
import ChangePass from "./pages/ChangePass";
import { useAuth } from "./auth-context/AuthContext";

import ResetPassword from "./pages/ResetPassword";

function App() {
  const { islogin } = useAuth();
  console.log(islogin);
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Switch>
          {/* <Route path="/reset">
            <ResetPassword />
          </Route> */}
          <Route path="/" exact>
            {islogin ? <HomePage /> : <Login />}
          </Route>
          <Route path="/signup">
            {!islogin ? <Signup /> : <Redirect to="/" />}
          </Route>
          <Route path="/login">
            {islogin ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/reset">{!islogin && <ResetPassword />}</Route>
          <Route path="/changepassword">
            {islogin ? <ChangePass /> : <Redirect to="/" />}
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Container>
  );
}

export default App;
