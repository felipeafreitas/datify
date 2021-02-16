import React, { Component } from 'react'

import SongInput from './SongInput';

export default class Match extends Component {
    state = {
        firstForm: {},
        secondForm: {}
    }


    handleClick = (object, formNumber) => {
        this.setState({[formNumber]: {...object}})
        console.log("handle Click from match fired")
    }

    render() {
        return (
            <div>
                <SongInput handleClick={this.handleClick} formNumber="firstForm" />
                <SongInput handleClick={this.handleClick} formNumber="secondForm"  />
                <div style={{marginTop: '400px'}}>
                <h1>Primeira música selecionada: {this.state.firstForm.name ? this.state.firstForm.name : ""}</h1>
                <h2>Segunda música selecionada: {this.state.secondForm.name ? this.state.secondForm.name : "" }</h2>
                </div>
                
            </div>
        )
    }
}
