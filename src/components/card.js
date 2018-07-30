import React, { Component } from 'react'; 

import Input from './input';
import Content from './content';

class Card extends Component {
    
    constructor() {
        super()

        this.state = {
            color: '',
            PluralNoun: '',
            adjectiveOne: '',
            celebOne: ''
        }
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state);
    }       

    render() {
        
        const inputData = [
            {title: 'Color', state: this.state.color, name: 'color'}, 
            {title: 'Plural Noun', state: this.state.PluralNoun, name: 'PluralNoun'},
            {title: 'Adjective', state: this.state.adjective, name: 'adjectiveOne'},
            {title: 'Celebrity', state: this.state.celebOne, name: 'celebOne'},
        ]
        
        return (
            <div className="card">
                {
                    inputData.map(data => Input( (data), this.handleInputChange))
                }
                <Content data={this.state}/>
            </div>
        ) 
    } 
}

export default Card;