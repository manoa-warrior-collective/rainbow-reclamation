'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { useRouter } from 'next/navigation';
import { addLostItem } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddLostItemSchema } from '@/lib/validationSchemas';

const AddLostItemForm: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddLostItemSchema),
  });

  const onSubmit = async (data: any) => {
    const formattedData = {
      name: data.name,
      description: data.description,
      category: data.category,
      building: data.building,
      location: data.location,
      date: data.date,
      imageUrl: data.imageUrl || undefined,
      contactInfo: data.contactInfo,
      reportedBy: currentUser,
      bountyStatus: data.bountyStatus || false,
      bountyReward: data.bountyReward ? parseFloat(data.bountyReward) : undefined,
    };
    await addLostItem(formattedData);
    swal('Success', 'Your lost item has been reported', 'success', {
      timer: 2000,
    });
    reset();
  };

  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    router.push('/auth/signin');
  }

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Col className="text-center">
            <h2>Report Lost Item</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label>Item Name</Form.Label>
                  <input
                    type="text"
                    {...register('name')}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="e.g., Blue backpack"
                  />
                  <div className="invalid-feedback">{errors.name?.message}</div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <textarea
                    {...register('description')}
                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    rows={3}
                    placeholder="Provide details about your lost item"
                  />
                  <div className="invalid-feedback">{errors.description?.message}</div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <select {...register('category')} className={`form-control ${errors.category ? 'is-invalid' : ''}`}>
                    <option value="">Select a category</option>
                    <option value="ELECTRONICS">Electronics</option>
                    <option value="CLOTHING">Clothing</option>
                    <option value="ACCESSORIES">Accessories</option>
                    <option value="DAILY_NECESSITIES">Daily Necessities</option>
                    <option value="OTHER">Other</option>
                  </select>
                  <div className="invalid-feedback">{errors.category?.message}</div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Building</Form.Label>
                  <select {...register('building')} className={`form-control ${errors.building ? 'is-invalid' : ''}`}>
                    <option value="">Select a building</option>
                    <option value="BIL">BIL</option>
                    <option value="KELL">KELL</option>
                    <option value="POST">POST</option>
                    <option value="CAMPUS_CENTER">Campus Center</option>
                    <option value="OTHER">Other</option>
                  </select>
                  <div className="invalid-feedback">{errors.building?.message}</div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Specific Location</Form.Label>
                  <input
                    type="text"
                    {...register('location')}
                    className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                    placeholder="e.g., Room 204, Near the entrance"
                  />
                  <div className="invalid-feedback">{errors.location?.message}</div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Date Lost</Form.Label>
                  <input
                    type="date"
                    {...register('date')}
                    className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.date?.message}</div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Image URL (Optional)</Form.Label>
                  <input
                    type="text"
                    {...register('imageUrl')}
                    className={`form-control ${errors.imageUrl ? 'is-invalid' : ''}`}
                    placeholder="https://example.com/image.jpg"
                  />
                  <div className="invalid-feedback">{errors.imageUrl?.message}</div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contact Information</Form.Label>
                  <input
                    type="text"
                    {...register('contactInfo')}
                    className={`form-control ${errors.contactInfo ? 'is-invalid' : ''}`}
                    placeholder="Email or phone number"
                  />
                  <div className="invalid-feedback">{errors.contactInfo?.message}</div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" {...register('bountyStatus')} label="Offer a bounty/reward?" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Bounty Amount (Optional)</Form.Label>
                  <input
                    type="number"
                    step="0.01"
                    {...register('bountyReward')}
                    className={`form-control ${errors.bountyReward ? 'is-invalid' : ''}`}
                    placeholder="0.00"
                  />
                  <div className="invalid-feedback">{errors.bountyReward?.message}</div>
                </Form.Group>

                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-end">
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddLostItemForm;
