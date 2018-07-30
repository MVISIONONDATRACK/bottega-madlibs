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
            celebOne: '',
            adjectiveTwo: '',
            nounOne: '',
            numberOne: '',
            numberTwo: '',
            nounTwo: '',
            adjectiveThree: '',
            celebTwo: '',
            celebThree: '',
            adjectiveFour: '',
            nounThree: '',
            celebFour: '',
            adjectiveFive: '',
            contentVisible: false
        
        }
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state);
    }       

    handleFormSubmit(event){
        event.preventDefault()
        this.setState({ contentVisible: !this.state.contentVisible })
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