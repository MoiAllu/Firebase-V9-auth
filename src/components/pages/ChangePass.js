import { Fragment, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../auth-context/AuthContext";

const ChangePass = () => {
   const {passUp}= useAuth();
  const [password, setPassword] = useState("");
  const passwordHandler = (e) => {
    e.preventDefault();
    passUp(e);
  };
  return (
    <Fragment>
      <Card>
        <h2 className="text-center mb-4">Log in</h2>
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
