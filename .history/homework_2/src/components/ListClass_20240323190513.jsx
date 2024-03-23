import React, { Component } from 'react'
import './style.sass'

export default class ListClass extends Component {
    constructor(props){
        super(props);
        setTimeout(() => {

            this.setState({
                list: this.state.list.push('Kyiv'),
                color: `lightpink`
            })
            console.log(this.state.list);
        }, 1000)
    }

    state = {...this.props};
  render() {
    const {list=[], color} = this.state;

    return list.length ? <ul style={{backgroundColor}}>
        {list.map((item, index) => <li key={index}>{item}</li>)}
    </ul> : null;
  }
}