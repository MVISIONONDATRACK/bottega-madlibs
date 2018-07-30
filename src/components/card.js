import React, { Component } from 'react'; 

import Input from './input';
import Content from './content';

const INITIAL_STATE = {}

class Card extends Component {
    
    constructor() {
        super()

        this.state = INITIAL_STATE;
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state);
    }       

    handleFormSubmit(event){
        event.preventDefault()

        if(this.state.contentVisible) {
            this.setState(INITIAL_STATE)
        } else {
            this.setState({ contentVisible: true })
        }
    }
    
    render() {
        
        const inputData = [
            {title: 'Color', state: this.state.color, name: 'color'}, 
            {title: 'Plural Noun', state: this.state.PluralNoun, name: 'PluralNoun'},
            {title: 'Adjective', state: this.state.adjective, name: 'adjectiveOne'},
            {title: 'Celebrity', state: this.state.celebOne, name: 'celebOne'},
        ]
        
        return (
            <form onSubmit={this.handleInputchange} className="card">
            <div className="card">
                <div classname="card__inputs">
                
                </div>
                {
                    inputData.map(data => Input( (data), this.handleInputChange))
                }
                </div>
                <button type="submit">{!this.state.contentVisible ? 'Generate Mad Lib' : 'Clear Form'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </form>
        ) 
    } 
}

export default Card;