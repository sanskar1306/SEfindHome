import React, { Component } from 'react';
import { getInitalData } from '../Redux/reducers/users';
import { connect } from 'react-redux';
import Card from './card';
import './style.css'
import { Container, Row } from 'bootstrap-4-react';
import { Progress } from 'bootstrap-4-react';



class Home extends Component {
    componentDidMount() {
        this.props.getInitalData();
    }

    List() {
        if (this.props.users.length) {
            var currentIndex = this.props.users.length;
            var array = this.props.users;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                var randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                var temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return this.props.users.map(currentuser => {
                return <Card user={currentuser} email={this.props.email} key={currentuser._id} />;
            });
        } else {
            return (
                <div>
                    <h2>Sorry!! No results found.</h2>
                    <br />
                    <br />
                </div>
            );
        }
    }

    render() {
        return (
            <>
                <div>

                    <br />
                    <br />
                </div>

                {!this.props.isDataInitialized && (
                    <Progress mb='4' w='25%'>
                        <Progress.Bar striped animated min='0' max='100' mx='auto' now='50'>
                            Initializing data
                        </Progress.Bar>
                    </Progress>
                )}
                {this.props.isDataInitialized && (
                    <div>
                        <div className='text-center'>
                            <br />
                            <h1>Plan Your Stay With US !!</h1>
                            <hr className='w-25 mx-auto pt-5' />
                        </div>

                        <Container
                            style={{
                                marginTop: '5em',
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Row className="list_row">{this.List()}</Row>
                        </Container>

                        <br />
                    </div>
                )}
            </>
        );
    }
}

export default connect(state => state, { getInitalData })(Home);
