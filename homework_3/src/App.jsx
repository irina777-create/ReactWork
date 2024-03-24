import React, { Component } from 'react'

import Table from './components'
import TableItem from './components'

export default class App extends Component {

  state = { 
    animals:[
    {type: `turtle`, icon: `🐢`},
    {type: `octopus`, icon: `🐙`},
    {type: `fish`, icon: `🐠`},
    {type: `flamingo`, icon: `🦩`},
    {type: `penguin`, icon: `🐧`}
]}
  
  render() {
      <>
        <Table list={animals} />
      </>
  }
}