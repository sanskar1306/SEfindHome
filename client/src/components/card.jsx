import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import { Card, Button } from 'bootstrap-4-react';
import img_src from './im'

class card extends Component {
    render() {
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
