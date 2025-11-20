'use client';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ReportItemPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    category: '',
    location: '',
    date: '',
    reportType: 'lost',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to submit item report
    console.log('Submitting item:', formData);
    alert(`${formData.reportType === 'lost' ? 'Lost' : 'Found'} item report submitted successfully!`);
    router.push('/dashboard');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Header>
                <h2>Report Item</h2>
                <p className="mb-0 text-muted">Report a lost or found item on campus</p>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formReportType">
                    <Form.Label>Report Type</Form.Label>
                    <Form.Select
                      name="reportType"
                      value={formData.reportType}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    >
                      <option value="lost">I Lost This Item</option>
                      <option value="found">I Found This Item</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formItemName">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="itemName"
                      value={formData.itemName}
                      onChange={handleChange}
                      placeholder="e.g., Blue Backpack"
                      autoComplete="off"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Detailed description of the item..."
                      autoComplete="off"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    >
                      <option value="">Select category...</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      <option value="accessories">Accessories</option>
                      <option value="books">Books</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formLocation">
                    <Form.Label>{formData.reportType === 'lost' ? 'Last Seen Location' : 'Location Found'}</Form.Label>
                    <Form.Control
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., Hamilton Library"
                      autoComplete="off"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>{formData.reportType === 'lost' ? 'Date Lost' : 'Date Found'}</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </Form.Group>

                  <div className="d-flex gap-2">
                    <Button variant="primary" type="submit">
                      Submit Report
                    </Button>
                    <Button variant="secondary" onClick={() => router.back()}>
                      Cancel
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ReportItemPage;
