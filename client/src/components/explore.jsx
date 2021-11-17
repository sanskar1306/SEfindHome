import React, { Component } from 'react'

class explore extends Component {

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
            <div>
                
            </div>
        )
    }
}

export default explore
