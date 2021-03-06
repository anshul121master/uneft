import React from "react";
import {  Form, Row,Col ,Button} from "react-bootstrap";
import { AiOutlineHeart, AiOutlineArrowRight } from "react-icons/ai";
import '../TabProfile.css'
export default function Personal() {

    return (
        <React.Fragment>
            <div className="card-personal">
            <h6 className="Profile-Detail">Profile Detail</h6>

            <Form>
  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridText">
      <Form.Label className="label-color">Login</Form.Label>
      <Form.Control type="text" placeholder="User123" className="input-back"/>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label className="label-color">Email</Form.Label>
      <Form.Control type="email" placeholder="email@email.com" className="input-back" />
    </Form.Group>

    


  </Row>

  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridText">
      <Form.Label className="label-color">First name</Form.Label>
      <Form.Control type="text" placeholder="John" className="input-back"/>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridText">
      <Form.Label className="label-color">Last name</Form.Label>
      <Form.Control type="text" placeholder="Doe" className="input-back"/>
    </Form.Group>

    


  </Row>



  <Button variant="primary" type="submit" className="save-personal">
    Save
  </Button>
</Form>
            </div>
        </React.Fragment>
    );
}

