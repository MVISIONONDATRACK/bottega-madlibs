import React, { Component } from 'react'; 

import Input from './input';

class Card extends Component {
    
    constructor() {
        super()

        this.state = {
            color: 'BLUE',
            pluralNoun: '',
        }
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event) {
        
        this.setState({ color: event.target.value })
    }
    
    render() {
        
        return (
            <div className="card">
                <h1>{this.state.color}</h1>
                <input value={this.state.color} onChange={(event) => this.handleInputChange(event)}/>
            </div>
        )
        
        
        
        return (
            <div className="card">
                <h1>{this.state.color}</h1>
                { Input('HIPHOP is the best music')}
                { Input('Check out my raps at soundcloud.com/mvisionondatrack')}
            </div>
        )
    }
}

export default Card;