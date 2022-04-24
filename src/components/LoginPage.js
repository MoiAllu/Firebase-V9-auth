import { useAuth } from "./auth-context/AuthContext";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { logIn } = useAuth();

  const submitValue = (event) => {
    event.preventDefault();
    logIn(email, password);
  };
  return (
    <Fragment>
      <Card>
        <h2 className="text-center mb-4">Sign Up</h2>
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
            <br/>
            <Button className="w-100" type='submit'>Submit</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log in
      </div>
    </Fragment>
  );
};

export default Login;
