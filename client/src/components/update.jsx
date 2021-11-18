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
    state = {
        email: this.props.data.email,
        title: this.props.data.title,
        userName: this.props.data.username,

        rent: this.props.data.rent,
        about: this.props.data.about,

        address: this.props.data.address,
        city: this.props.data.city,
        pin: this.props.data.pin,
        phone: this.props.data.phone,
        errormessage1: "",
        errormessage2: "",
        errors: {
            title: "",
            userName: "",

            rent: "",
            about: "",
            c1: "",
            address: "",
            city: "",
            pin: "",
            phone: "",
        },
    };

    handleChange = (e) => {
        let nam = e.target.id;
        let val = e.target.value;
        let errors = this.state.errors;
        const pinRegex = RegExp(/[1-9][0-9]{5}/);
        const phoneRegex = RegExp(/^[0-9\b]+$/);
        let err = "";
        if (nam === "pin") {
            if (!pinRegex.test(val) || (val.length !== 6 && val !== "")) {
                err = <span style={{ color: "red" }}>Please enter valid pincode!</span>;
                document.getElementById("pin").style.border = "1px solid red";
            } else {
                document.getElementById("pin").style.borderColor = "";
            }
            this.setState({ errormessage1: err });
        }

        if (nam === "phone") {
            if (!phoneRegex.test(val) || (val.length !== 10 && val !== "")) {
                err = (
                    <span style={{ color: "red" }}>
                        Please enter valid mobile number!
                    </span>
                );
                document.getElementById("phone").style.border = "1px solid red";
            } else {
                document.getElementById("phone").style.borderColor = "";
            }
            this.setState({ errormessage2: err });
        }
        switch (nam) {
            case "title":
                errors.title = val === "" ? "*" : "";
                break;
            case "userName":
                errors.userName = val.length < 1 ? "*" : "";
                break;

            case "rent":
                errors.rent = val === "" ? "*" : "";
                break;

            case "about":
                errors.about = val.length < 1 ? "*" : "";
                break;

            case "address":
                errors.address = val.length < 1 ? "*" : "";
                break;
            case "city":
                errors.city = val.length < 1 ? "*" : "";
                break;
            case "pin":
                errors.pin = val.length < 1 ? "*" : "";
                break;
            case "phone":
                errors.phone = val.length < 1 ? "*" : "";
                break;
            default:
                break;
        }

        this.setState({ errors, [e.target.id]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm(this.state.errors)) {
            axios
                .post(`https://find-home2021.herokuapp.com/users/update/${this.props.data._id}`, {
                    title: this.state.title,
                    userName: this.state.userName,

                    rent: this.state.rent,
                    about: this.state.about,
                    address: this.state.address,
                    city: this.state.city,
                    pin: this.state.pin,
                    phone: this.state.phone,
                })
                .then((response) => {
                    if (response.status === 200) {
                        if (
                            !alert(
                                `Congratulations!! ${this.state.userName.toUpperCase()} Your profile Updated Successfully `
                            )
                        ) {
                            window.location.reload();
                        }
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            toast.error("Please fill out all the required fields to proceed.");
        }
    };

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

const mapStatetoProps = (state) => {
    return {
        emailid: state.email,
        logged: state.loggedin,
        data: state.registeredUserData,
    };
};

const mapDispatchtoProps = (dispatch) => {
    return {
        email: (email) => dispatch({ type: "Email", email: email }),
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(update);