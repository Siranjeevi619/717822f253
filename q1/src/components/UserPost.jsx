import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function UserPost() {
  const [formData, setFormData] = useState("");
  const [userData, setUserData] = useState("");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjI3ODQzLCJpYXQiOjE3NDI2Mjc1NDMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImYwMDAzNDk3LTdmOTMtNDVlMi1iNjZlLTMxODc5Mzk3ZmE5NSIsInN1YiI6InN0ZXZlQGtjZS5hYy5pbiJ9LCJjb21wYW55TmFtZSI6IlN0ZXZlIiwiY2xpZW50SUQiOiJmMDAwMzQ5Ny03ZjkzLTQ1ZTItYjY2ZS0zMTg3OTM5N2ZhOTUiLCJjbGllbnRTZWNyZXQiOiJTUlVzRnlRZW1BT1p1bmVVIiwib3duZXJOYW1lIjiU3RldmUiLCJvd25lckVtYWlsIjoic3RldmVAa2NlLmFjLmluIiwicm9sbE5vIjoiMjMyMyJ9.2nHvJYFvsAg4GmjjskRVXRJPehPHHo1L71vPFtvH7Kw";
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8000/test/users/:userId/posts`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserData(response.data.userData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Container>
        <Row>
          <h3>Get Users and post</h3>
          <Col>
            <Form onSubmit={handleForm}>
              <Form.Group>
                <input
                  type="text"
                  placeholder="userNid"
                  value={formData}
                  onChange={(e) => setFormData(e.target.value)}
                />
              </Form.Group>
              <br />
              <Button type="submit">get User</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <>{JSON.stringify(userData, null, 10)}</>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserPost;
