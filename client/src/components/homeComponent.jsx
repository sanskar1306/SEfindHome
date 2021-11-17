import React, { Component } from 'react';
import { getInitalData } from '../Redux/reducers/users';
import { connect } from 'react-redux';
import Card from './card';
import './style.css'
import { Container, Row } from 'bootstrap-4-react';
import { Progress } from 'bootstrap-4-react';



class Home extends Component {
    render() {
        return (
            <h1>Home</h1>
        )
    }
}

export default Home;
