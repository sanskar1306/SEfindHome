import React, { Component } from 'react'
import { Progress } from 'bootstrap-4-react';

class dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { guests: [] };

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

                    <div className='text-center'>
                        <br />
                        <h1>Your Bookings</h1>
                        <hr className='w-25 mx-auto pt-5' />
                    </div>

                )}

            </>
        )
    }
}

export default dashboard
