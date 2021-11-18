import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { Slider, Box } from '@material-ui/core';
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
        price: [0, 10000]
    };

    clearfield() {
        this.setState({ pin: '' });
        this.setState({ name: '' });
        this.setState({ price: [0, 10000] });
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value,
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

    handleSubmitName = () => {

        this.props.price(this.state.price);
    };

    handleSubmitPIN = e => {
        e.preventDefault();
        this.props.pin(this.state.pin);
    };

    render() {
        return (
            <div>
                <div className="form-group">
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
                    <form onSubmit={this.handleSubmitName} className='form2' >
                        <h3 style={{ alignSelf: 'center' }}>Filter by Price</h3>
                        <div style={{ width: 400, alignItems: 'space-between', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
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
                </div>
                <br />
                <br />
                <div className='alignment'>

                </div>
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

        clr: () => dispatch({ type: 'CLR' }),
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(filter);
