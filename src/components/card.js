import React, { Component } from 'react'; 

import Input from './input';

class Card extends Component {
    render() {
        return (
            <div className="card">
                { Input('HIPHOP is the best music')}
                { Input('Check out my raps at soundcloud.com/mvisionondatrack')}
            </div>
        )
    }
}

export default Card;