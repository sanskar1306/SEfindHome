import React, { Component } from 'react';
import {getInitalData } from '../Redux/reducers/users';
import { connect } from 'react-redux';
import Card from './card';
import './style.css'
import NoData from '../assets/images/No_data.gif';
import { Container, Row } from 'bootstrap-4-react';
import { Progress } from 'bootstrap-4-react';



class dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { guests: [] };
       
    }
    componentDidMount() {
        this.props.getInitalData()
       
            this.setState({
                guests: this.props.bookings
            });
            
    }
    componentDidUpdate(prevProps) {
        if (this.props.bookings !== prevProps.bookings)
        if (!this.props.isLoading) {
            console.log(this.props.users)

            this.setState({
                guests: this.props.bookings
            });
        }
    }
    
 
    List() {
       
        let bookedByUser = this.state.guests.filter(guest => guest.email === this.props.email)
        // console.log(this.props.users)
        let houseIds = [];
        bookedByUser.forEach(book => {
             houseIds.push(book.houseid)
        })
        console.log(houseIds)
        let finalList = this.props.users.filter(user => houseIds.includes(user._id))
        console.log(finalList)
        if (finalList.length) {
            var currentIndex = finalList.length;
            var array = finalList;

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
            return finalList.map(currentuser => {
                return <Card user={currentuser} currUser={this.props.currentUser} key={currentuser._id} dash={true}/>;
            });
        } else {
            return (
                <div>
                    <img src={NoData} />
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
                <div data-testid="dash">
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
                    <div >
                        <div className='text-center'>
                            <br />
                            <h1>Your Bookings</h1>
                            <hr className='w-25 mx-auto pt-5' />
                        </div>

                        <Container
                            style={{
                                
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
                </div>
            </>
        );
    }
}

export default connect(state => state, {getInitalData })(dashboard);