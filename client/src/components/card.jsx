import React, { Component } from 'react'
import { Card, Button } from 'bootstrap-4-react';


class card extends Component {
    render() {
        return (
            <div className='box-container'>
                <div className='box-item'>
                    <Card style={{ width: '18rem', height: "30rem" }} className='flip-box'>
                        <Card.Header>{this.props.user.name}</Card.Header>
                        <Card.Image src={imageUrl} />
                    </Card>
                </div>
            </div>
        )
    }
}

export default card;
