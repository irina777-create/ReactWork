import React, { PureComponent } from "react";
import "./style.sass";


export default class List extends PureComponent {
    state = { ...this.props, color: `black`, borderColor: `transparent`,borderWidth:'0px' ,font-weight:normal};
  

componentDidMount() {
    const getRandomInt = (min, max) => {
      const minCeiled = Math.ceil(min);
      const maxFloored = Math.floor(max);
      return Math.floor(Math.random()*(maxFloored - minCeiled) + minCeiled);
    };
  
  
    const activatedInterval = setInterval(() => {
      const filteredAnimals = this.state.table.filter(
        (animal) => !animal.isActive
      );
      const randomIndex = getRandomInt(0, filteredAnimals.length – 1);
      const selectedItem = filteredAnimals[randomIndex];
  
  
      console.log(selectedItem);
  
  
      this.setState(
        {
          table: this.state.table.map((item) => {
            if (item === selectedItem) item.isActive = true;
            return item;
          }),
        },
        () => {
          console.log(this.state.table);
          if (
            this.state.table.length = getRandomInt(0, activeItems.length)
          ){
            console.log(this.state.table);
          }
          if (
            this.state.table.length === Math.round(this.props.list.length / 2)
          ) {
            this.setState({
                borderWidth: ('10px'),
            });
        } const activeItems = this.state.table.filter((item) => item.isActive);
          if (activeItems.length === this.state.table.length){
            clearInterval(activatedInterval);
            {
                this.setState({
                    borderWidth: ('20px'),
                });
            }
          }
        }
      );
    }, 2000);
  }
  return table.length ? <table style={{borderWidth}}>
  <tbody>
      {
       table.map((item, index) => <tr className={trClass(item)} key={index}>
              <td>{item.type}</td>
              <td>{item.icon}</td>
          </tr>)
      }
  </tbody>
</table> : null;