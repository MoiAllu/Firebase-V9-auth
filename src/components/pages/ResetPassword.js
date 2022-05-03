import { async } from "@firebase/util";
import { useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../auth-context/AuthContext";

const ResetPassword = () => {
  const { passReset } = useAuth();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState();
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setMessage("");
      setError("");
      await passReset(email);
      setMessage("Check inbox for further instruction");
    } catch {
      setError("Unable to reset password");
    }
  };
  return (
    <>
      <Card>
        <h2 className="text-center mb-4">Reset Password</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Card.Body>
          <Form onSubmit={submitHandler}>
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
            <br />
            <Button className="w-100" type="submit">
              Reset
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Login?{" "}
        <Link to="/" replace>
          Log In
        </Link>{" "}
        Create an Account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};
export default ResetPassword;
