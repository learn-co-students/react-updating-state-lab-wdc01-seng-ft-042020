// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    incrementCount = (e) => {

        this.setState(prevState => {return {timesClicked: prevState.timesClicked + 1}})
    }

    render() {
        return <button label={this.state.timesClicked} onClick={this.incrementCount}>{this.state.timesClicked}</button>
    }
}
