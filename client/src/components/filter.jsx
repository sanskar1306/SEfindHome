import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { Slider, Box, Grid, Item } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import { Dropdown, Button } from 'bootstrap-4-react';




const marks = [
    {
        value: 0,
        label: '0₹',
    },

    {
        value: 2000,
        label: '2000₹',
    },

    {
        value: 4000,
        label: '4000₹',
    },

    {
        value: 6000,
        label: '6000₹',
    },

    {
        value: 8000,
        label: '8000₹',
    },

    {
        value: 10000,
        label: '10000₹',
    },
];
class filter extends Component {
    state = {
        pin: '',
        name: '',
        city: '',
        price: [0, 10000]
    };

    clearfield() {
        this.setState({ pin: '' });
        this.setState({ name: '' });
        this.setState({ city: '' });
        this.setState({ price: [0, 10000] });
    }
    handleSubmitName = () => {

        this.props.price(this.state.price);
    };

    handleCityChange = e => {
        this.setState({
            city: e.target.value,
        });
    };
    rangeSelector = (event, newValue) => {
        this.setState({ price: newValue });
        this.handleSubmitName();
        console.log(newValue)
    };
    handlePinChange = e => {
        this.setState({
            pin: e.target.value,
        });
    };

    handleSubmitCity = e => {
        e.preventDefault();
        this.props.city(this.state.city);
    };

    handleSubmitPIN = e => {
        e.preventDefault();
        this.props.pin(this.state.pin);
    };

    render() {
        return (
            <div data-testid="filter">
                <Grid container spacing={3} className="grid-box">
                    <Grid item sm={12} md={4}>
                        <form onSubmit={this.handleSubmitPIN} className='form1'>

                            <input
                                className='textbox'
                                type='number'
                                onChange={this.handlePinChange}
                                value={this.state.pin}
                                placeholder='Search by Pin-Code'
                                mr='sm-9'
                                min='111111'
                                max='999999'

                            />
                            <input title='Search' value='Search' type='submit' className='button' />
                        </form>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <form onSubmit={this.handleSubmitCity} className='form1'>

                            <input
                                className='textbox'
                                type='string'
                                onChange={this.handleCityChange}
                                value={this.state.city}
                                placeholder='Search by City'
                                mr='sm-9'


                            />
                            <input title='Search' value='Search' type='submit' className='button' />
                        </form>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <form onSubmit={this.handleSubmitName} className='form2' >

                            <div >
                                <Box style={{ width: 300 }}>
                                    <Slider
                                        value={this.state.price}
                                        onChange={this.rangeSelector}
                                        valueLabelDisplay="auto"
                                        step={1000}
                                        min={0}
                                        max={10000}
                                        marks={marks}
                                        size="small"
                                    />
                                </Box>
                            </div>

                        </form>
                    </Grid>
                </Grid>

                <div className='alignment'>
                    <Button
                        secondary
                        onClick={() => {
                            this.props.clr();
                            this.clearfield();
                        }}
                    >
                        X Clear Filters
                    </Button>
                </div>
            </div>
        );
    }
}

// export default filter;

const mapStatetoProps = state => {
    return {
        tutor: state.tutor,
        subject: state.subject,
        class: state.class,
    };
};

const mapDispatchtoProps = dispatch => {
    return {
        pin: pin => dispatch({ type: 'PIN', pin: pin }),
        price: price => dispatch({ type: 'PRICE', price: price }),
        city: city => dispatch({ type: 'CITY', city: city }),
        clr: () => dispatch({ type: 'CLR' }),
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(filter);