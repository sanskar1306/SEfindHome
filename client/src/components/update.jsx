import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Modal, Button, Form, Row, Col } from "bootstrap-4-react";
toast.configure();

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
};

class update extends Component {
   
    render() {
        return (
            <div>
                <Modal.Body>
                    <Form>
                        <div className="formRoot">
                            <div className="form-child-left">
                                <Row>
                                    <Form.LabelCol col="sm-3" htmlFor="staticEmail">
                                        Email
                                    </Form.LabelCol>
                                    <Col col="sm-8">
                                        <Form.PlainText value={this.state.email}></Form.PlainText>
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.LabelCol col="sm-3" htmlFor="title">
                                        Title
                                    </Form.LabelCol>
                                    <Col col="sm-8">
                                        <Form.CustomSelect
                                            sm
                                            mb="3"
                                            id="title"
                                            onChange={this.handleChange}
                                            value={this.state.title}
                                        >
                                            <option defaultValue hidden>
                                                Open this to select title
                                            </option>
                                            <option value="Mr.">Mr.</option>
                                            <option value="Mrs.">Mrs.</option>
                                            <option value="Ms.">Ms.</option>
                                        </Form.CustomSelect>
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.LabelCol col="sm-3" htmlFor="userName">
                                        Name
                                        <nobr style={{ color: "red" }}>
                                            {this.state.errors.userName}
                                        </nobr>
                                    </Form.LabelCol>
                                    <Col col="sm-8">
                                        <Form.Input
                                            id="userName"
                                            type="text"
                                            placeholder="Enter Full Name"
                                            onChange={this.handleChange}
                                            value={this.state.userName}
                                        />
                                    </Col>
                                </Row>
                                <br />

                                <Row>
                                    <Form.LabelCol col="sm-3" htmlFor="rent">
                                        Rent
                                    </Form.LabelCol>
                                    <Col col="sm-8">
                                        <Form.Input
                                            id="rent"
                                            type="number"
                                            placeholder="Enter the rent for your house(in Rupees)"
                                            onChange={this.handleChange}
                                            value={this.state.rent}
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Form.LabelCol col="sm-3" htmlFor="about">
                                        About
                                        <nobr style={{ color: "red" }}>
                                            {this.state.errors.about}
                                        </nobr>
                                    </Form.LabelCol>
                                    <Col col="sm-8">
                                        <Form.Input
                                            id="about"
                                            type="text"
                                            placeholder="Write about the house to be hosted"
                                            onChange={this.handleChange}
                                            value={this.state.about}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div className="form-child-right">
                                <Row>
                                    <Form.LabelCol col="sm-2" htmlFor="address">
                                        address
                                        <nobr style={{ color: "red" }}>
                                            {this.state.errors.address}
                                        </nobr>
                                    </Form.LabelCol>
                                    <Col col="sm-10">
                                        <Form.Input
                                            id="address"
                                            type="text"
                                            placeholder="Enter Full address"
                                            onChange={this.handleChange}
                                            value={this.state.address}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.LabelCol col="sm-2" htmlFor="city">
                                        city
                                        <nobr style={{ color: "red" }}>
                                            {this.state.errors.city}
                                        </nobr>
                                    </Form.LabelCol>
                                    <Col col="sm-10">
                                        <Form.Input
                                            id="city"
                                            type="text"
                                            placeholder="Enter city name"
                                            onChange={this.handleChange}
                                            value={this.state.city}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.LabelCol col="sm-2" htmlFor="pin">
                                        pin
                                        <nobr style={{ color: "red" }}>
                                            {this.state.errors.pin}
                                        </nobr>
                                    </Form.LabelCol>
                                    <Col col="sm-10">
                                        <Form.Input
                                            id="pin"
                                            type="number"
                                            placeholder="6-digit postal code"
                                            onChange={this.handleChange}
                                            value={this.state.pin}
                                        />
                                        {this.state.errormessage1}
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.LabelCol col="sm-2" htmlFor="phone">
                                        phone
                                        <nobr style={{ color: "red" }}>
                                            {this.state.errors.phone}
                                        </nobr>
                                    </Form.LabelCol>
                                    <Col col="sm-10">
                                        <Form.Input
                                            id="phone"
                                            type="number"
                                            placeholder="10-digit phone"
                                            onChange={this.handleChange}
                                            value={this.state.phone}
                                        />
                                        {this.state.errormessage2}
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button secondary data-dismiss="modal">
                        Close
                    </Button>
                    <Button primary onClick={this.handleSubmit} data-dismiss="modal">
                        Submit
                    </Button>
                </Modal.Footer>
            </div>
        );
    }
}





export default connect(mapStatetoProps, mapDispatchtoProps)(update);