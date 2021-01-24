import { Tab, Tabs } from "react-bootstrap";
import styled from "styled-components";
import SignInForm from "../components/Forms/SignInForm";
import SignUpForm from "../components/Forms/SignUpForm";

const Container = styled.div`
  max-width: 500px;
  margin: auto;
`;

const SignContainer = () => (
  <Container>
    <Tabs defaultActiveKey="sign-in">
      <Tab eventKey="sign-in" title="Sign In">
        <SignInForm />
      </Tab>
      <Tab eventKey="sign-up" title="Sign Up">
        <SignUpForm />
      </Tab>
    </Tabs>
  </Container>
);

export default SignContainer;
