import { Fragment, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../auth-context/AuthContext";

const ChangePass = () => {
  const { passUp } = useAuth();
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();
  const [Error, setError] = useState();
  const passwordHandler = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setMessage("");
      await passUp(password);
      setMessage("Successfully change Passowrd");
      history.push("/");
    } catch {
      setError("Unable to change the Passowrd");
    }
  };
  return (
    <Fragment>
      <Card>
        <h2 className="text-center mb-4">Log in</h2>
        {Error && <Alert variant="danger">{Error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Card.Body>
          <Form onSubmit={passwordHandler}>
            <Form.Group>
              <Form.Label name="password">New Password </Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <br />
            <Button className="w-100" type="submit">
              Confirm
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Fragment>
  );
};
export default ChangePass;
