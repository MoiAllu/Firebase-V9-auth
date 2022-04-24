import { Fragment, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "./auth-context/AuthContext";
const Signup = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmemail, setConfirmEmail] = useState("");
  const { signUp } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const submitHandler = async(event) => {
    event.preventDefault();
    if (email !== confirmemail) {
      return setError("Email doesn't match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(email, password);
    } catch {
      setError("Opps! Error, not SignUp ");
    }
    setLoading(false);
  };
  // const submitValue = (event) => {
  //   event.preventDefault();
  //   const frmdetails = {
  //     "First Name": fName,
  //     "Last Name": lName,
  //     Phone: phone,
  //     Email: email,
  //     ConfirmEmail: confirmemail,
  //     Password:password,
  //   };
  //   console.log(frmdetails);
  // };
  return (
    <Fragment>
      <Card>
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label name="firstname">First Name </Form.Label>
              <Form.Control
                required
                type="text"
                name="firstname"
                placeholder="First Name"
                onChange={(e) => setfName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label name="lastname"> Last Name </Form.Label>
              <Form.Control
                required
                type="text"
                name="lastname"
                placeholder="Last Name"
                onChange={(e) => setlName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label name="phone">Phone </Form.Label>
              <Form.Control
                required
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
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
              <Form.Label name="confirmemail">Confirm Email </Form.Label>
              <Form.Control
                required
                type="email"
                name="confirmemail"
                placeholder="Confirm Email"
                onChange={(e) => setConfirmEmail(e.target.value)}
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
            <br/>
            <Button disabled={loading} className="w-100" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log in
      </div>
    </Fragment>
  );
};
export default Signup;
