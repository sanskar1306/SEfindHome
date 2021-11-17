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

class form extends Component {
    state = {
        title: "",
        userName: this.props.currentUser,
        address: "",
        type: "",
        about: "",
        rent: "",
        city: "",
        pin: "",
        phone: "",
        image: "",
        errormessage1: "",
        errormessage2: "",
        errors: {
            title: "*",
            userName: "",
            rent: "*",
            about: "*",
            type: "*",
            address: "*",
            city: "*",
            pin: "*",
            phone: "*",
        },
    };
    render() {
        return (
            <div>
            </div>
        )
    }
}
export default form;