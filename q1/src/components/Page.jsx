import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Page() {
  const [user, setUser] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjI3ODQzLCJpYXQiOjE3NDI2Mjc1NDMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImYwMDAzNDk3LTdmOTMtNDVlMi1iNjZlLTMxODc5Mzk3ZmE5NSIsInN1YiI6InN0ZXZlQGtjZS5hYy5pbiJ9LCJjb21wYW55TmFtZSI6IlN0ZXZlIiwiY2xpZW50SUQiOiJmMDAwMzQ5Ny03ZjkzLTQ1ZTItYjY2ZS0zMTg3OTM5N2ZhOTUiLCJjbGllbnRTZWNyZXQiOiJTUlVzRnlRZW1BT1p1bmVVIiwib3duZXJOYW1lIjoiU3RldmUiLCJvd25lckVtYWlsIjoic3RldmVAa2NlLmFjLmluIiwicm9sbE5vIjoiMjMyMyJ9.2nHvJYFvsAg4GmjjskRVXRJPehPHHo1L71vPFtvH7Kw";
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8000/test/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data.user);
      console.log(response.data.user);

      console.log("data");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container>
        <Row>
          <h3>Get Users</h3>
          <Col>
            <Form onSubmit={handleForm}>
              <>{JSON.stringify(user, null, 10)}</>
              <br />
              <Button type="submit">get User</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Page;
