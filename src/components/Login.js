import { useAuth } from "./auth-context/AuthContext";
import { Fragment, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  // const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { logIn } = useAuth();
  const { currentUser } = useAuth();
  const submitValue = async (event) => {
    event.preventDefault();
    try {
      setError("");
      setLoading(true);
      await logIn(email, password);
      // history.push("/");
      // await logIn(email, password).then(history.push("/"));
    } catch {
      setError("Opps! Error, Unable to Sign In");
    }
    setLoading(false);
  };
  return (
    <Fragment>
      <Card>
        <h2 className="text-center mb-4">Log in</h2>
        {error && <Alert variant="danger">{error}</Alert>}

        {currentUser ? currentUser.email : ""}
        <Card.Body>
          <Form onSubmit={submitValue}>
            <Form.Group>
              <Form.Label name="email">Email </Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label name="password">Password </Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <br />
            <Button disabled={loading} className="w-100" type="submit">
              LogIn
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Forgot Password? <Link to="/reset">Reset</Link> Create an Account?
        <Link to="signup">Sign Up</Link>
      </div>
    </Fragment>
  );
};

export default Login;
