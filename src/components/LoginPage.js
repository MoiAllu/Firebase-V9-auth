const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  const submitValue = (event) => {
    event.preventDefault();
    const frmdetails = {
      Email: email,
      Password: password,
    };
    console.log(frmdetails);
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
          </Form>
        </Card.Body>
        <Button className="w-100">Submit</Button>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log in
      </div>
    </Fragment>
  );
};

export default Login;
