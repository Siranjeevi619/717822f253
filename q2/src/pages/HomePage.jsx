import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";

function HomePage() {
  const [form, setForm] = useState("even");
  const [response, setResponse] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjI2OTg5LCJpYXQiOjE3NDI2MjY2ODksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImYwMDAzNDk3LTdmOTMtNDVlMi1iNjZlLTMxODc5Mzk3ZmE5NSIsInN1YiI6InN0ZXZlQGtjZS5hYy5pbiJ9LCJjb21wYW55TmFtZSI6IlN0ZXZlIiwiY2xpZW50SUQiOiJmMDAwMzQ5Ny03ZjkzLTQ1ZTItYjY2ZS0zMTg3OTM5N2ZhOTUiLCJjbGllbnRTZWNyZXQiOiJTUlVzRnlRZW1BT1p1bmVVIiwib3duZXJOYW1lIjoiU3RldmUiLCJvd25lckVtYWlsIjoic3RldmVAa2NlLmFjLmluIiwicm9sbE5vIjoiMjMyMyJ9.bhYjHDxqpQMo0tTr9kSDmIf-c-rA9weZiWl7cl8tOko";
  const [data, setData] = useState({
    windowPrevState: [],
    windowCurrState: [],
    numbers: [],
    avg: 0,
  });

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      console.log(`Fetching from: http://localhost:8000/test/${form}`);

      const res = await axios.get(`http://localhost:8000/test/${form}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newNumbers = res.data.numbers;
      setResponse(newNumbers);

      var total = 0;
      for (var i of newNumbers) {
        total += i;
      }
      const avg = newNumbers.length > 0 ? total / newNumbers.length : 0;
      const currWindowSlice = newNumbers.slice(0, 10);
      setData((prevData) => ({
        windowPrevState: prevData.windowCurrState,
        windowCurrState: currWindowSlice,
        numbers: newNumbers,
        avg: avg,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md="5">
          <Form onSubmit={handleForm}>
            <Form.Select value={form} onChange={(e) => setForm(e.target.value)}>
              <option value="prime">Prime</option>
              <option value="fibo">Fibonacci</option>
              <option value="rand">Random</option>
              <option value="even">Even</option>
            </Form.Select>
            <Button type="submit" className="mt-3">
              Search
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Response Data */}
      <Row className="mt-4">
        <Col md="5">
          <h5>Response</h5>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md="5">
          <h5>Result</h5>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
