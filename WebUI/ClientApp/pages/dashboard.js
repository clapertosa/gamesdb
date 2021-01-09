import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const AccordionHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .icon-chevron-left {
    transform: ${({ open }) => (open ? "rotateZ(90deg)" : "rotateZ(270deg)")};
    transition: transform 0.3s;
  }
`;

const Dashboard = () => {
  const router = useRouter();
  const [actives, setActives] = useState({
    followed: 1,
    wanted: 1,
    played: 1
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) router.push("/");
  }, [router]);

  return (
    <Container>
      <Accordion defaultActiveKey={1} activeKey={actives.followed}>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as="div"
              variant="link"
              eventKey={1}
              onClick={() =>
                setActives((prev) => ({
                  ...prev,
                  followed: prev.followed === 1 ? 0 : 1
                }))
              }
            >
              <AccordionHeader open={actives.followed === 1}>
                <span>Followed</span>
                <span className="icon-chevron-left" />
              </AccordionHeader>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={actives.followed}>
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Accordion defaultActiveKey={1} activeKey={actives.wanted}>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as="div"
              variant="link"
              eventKey={1}
              onClick={() =>
                setActives((prev) => ({
                  ...prev,
                  wanted: prev.wanted === 1 ? 0 : 1
                }))
              }
            >
              <AccordionHeader open={actives.wanted === 1}>
                <span>Wanted</span>
                <span className="icon-chevron-left" />
              </AccordionHeader>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={1}>
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Accordion defaultActiveKey={1} activeKey={actives.played}>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as="div"
              variant="link"
              eventKey={actives.played}
              onClick={() =>
                setActives((prev) => ({
                  ...prev,
                  played: prev.played === 1 ? 0 : 1
                }))
              }
            >
              <AccordionHeader open={actives.played === 1}>
                <span>Played</span>
                <span className="icon-chevron-left" />
              </AccordionHeader>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={actives.played}>
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default Dashboard;
