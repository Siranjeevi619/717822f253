import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function Page() {
  const [user, setUser] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjI1NjM0LCJpYXQiOjE3NDI2MjUzMzQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImYwMDAzNDk3LTdmOTMtNDVlMi1iNjZlLTMxODc5Mzk3ZmE5NSIsInN1YiI6InN0ZXZlQGtjZS5hYy5pbiJ9LCJjb21wYW55TmFtZSI6IlN0ZXZlIiwiY2xpZW50SUQiOiJmMDAwMzQ5Ny03ZjkzLTQ1ZTItYjY2ZS0zMTg3OTM5N2ZhOTUiLCJjbGllbnRTZWNyZXQiOiJTUlVzRnlRZW1BT1p1bmVVIiwib3duZXJOYW1lIjoiU3RldmUiLCJvd25lckVtYWlsIjoic3RldmVAa2NlLmFjLmluIiwicm9sbE5vIjoiMjMyMyJ9.wjN8ieq2JRT1ZOfiIphv9N7bdMzrOoeibLRRUPjbedE";
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8000/test/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.users);
        console.log("data");
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <>{JSON.stringify(user, null, 4)}</>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Page;
