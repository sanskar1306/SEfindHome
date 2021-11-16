import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import { Card, Button } from 'bootstrap-4-react';
import img_src from './im'

class card extends Component {

    handleClick = () => {
        // console.log(this.props.user._id.toString());
        axios
            .post(`https://find-home2021.herokuapp.com/users/book/${this.props.user._id}/${1}`)
            .then(
                res => {
                    console.log(res)
                    axios
                        .post(`https://find-home2021.herokuapp.com/guest/add/${this.props.user._id}/`, {
                            email: this.props.email
                        })
                        .then(
                            res => {
                                console.log(res);
                                window.location.reload();
                            },
                            error => {
                                console.log(`Error: ${error}`);
                            }
                        );
                },
                error => {

                    console.log(`Error: ${error}`);
                },

            );

    };

    handleClick1 = () => {
        console.log(this.props.user._id.toString());
        axios
            .post(`https://find-home2021.herokuapp.com/users/book/${this.props.user._id}/${0}`)
            .then(
                res => {

                    axios
                        .delete(`https://find-home2021.herokuapp.com/guest/delete/${this.props.user._id}/`)
                        .then(
                            res => {
                                console.log(res);
                                window.location.reload();
                            },
                            error => {
                                console.log(`Error: ${error}`);
                            }
                        );
                },
                error => {
                    console.log(`Error: ${error}`);
                }
            );

    };

    render() {
        var imageUrl = '';

        if (this.props.user.profilePic === '') {
            imageUrl = img_src;
        } else {
            imageUrl = `./uploads/${this.props.user.profilePic}`;
        }
        return (
            <div className='box-container'>
                <div className='box-item'>
                    <Card style={{ width: '18rem', height: "30rem" }} className='flip-box'>
                        <Card.Header>{this.props.user.name}</Card.Header>
                        <Card.Image src={imageUrl} />
                        <Card.Body>
                            <Card.Title>Rs {this.props.user.rent}</Card.Title>
                            <Card.Subtitle mb="2" text="muted">{this.props.user.about}</Card.Subtitle>
                            <Card.Text>{this.props.user.address} {this.props.user.city} , <span style={{ fontWeight: "bold" }}> {this.props.user.pin}</span></Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            {
                                this.props.dash ?
                                    <Button className="profile-button" onClick={this.handleClick1}>UnBook</Button>
                                    :
                                    (this.props.user.booked ?
                                        <Button disabled className="profile-button">Booked</Button> :
                                        (
                                            this.props.email ?
                                                <Button className="profile-button" onClick={this.handleClick}>Book Now</Button>
                                                :
                                                <Button className="profile-button" disabled>Book Now</Button>
                                        )

                                    )
                            }

                        </Card.Footer>
                    </Card>
                </div>
            </div>
        )
    }
}

export default card;
