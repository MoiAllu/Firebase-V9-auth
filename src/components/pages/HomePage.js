import { Fragment } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../auth-context/AuthContext";

const HomePage = () => {
  const { logOut } = useAuth();
  const { currentUser } = useAuth();
  const history = useHistory();
  const onLogoutHandler = async (e) => {
    e.preventDefault();
    try {
      await logOut();
      await history.push("/login");
    } catch {
      console.error("Error while LogOut");
    }
  };
  const passwordChanger = (event) => {
    history.push("/changepassword");
  };

  return (
    <Fragment>
      <Card>
        <h2 className="text-center mb-4">Home page</h2>
        <h5>User: {currentUser.email}</h5>
        <Card.Body>
          <Form>
            <Button onClick={passwordChanger} className="w-100" type="submit">
              Change Password
            </Button>
          </Form>
          <br />
          <Form>
            <Button onClick={onLogoutHandler} className="w-100" type="submit">
              LogOut
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Fragment>
  );
};
export default HomePage;
