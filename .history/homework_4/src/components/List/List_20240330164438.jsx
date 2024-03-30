import React, { PureComponent } from "react";
import './style.sass';
import todos from "../../service/todos";
import {DEFAULT_TODO} from './../../constants/todos'

export default class List extends PureComponent{
    state = {
        list: [],
        async componentDidMount() {
            try {
              let request = await fetch( `https://jsonplaceholder.typicode.com/todos`),
              response = await request.json()
              this.setState({
                list:response
              });
            } catch (err) {
              console.log(err);
            }
          }
      };
      render() {
        const { list, newTodo } = this.state;
    
        return <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title: <input type="text" value={newTodo.title} onChange={this.handleTitle} />
          </label>
          <label>
            Completed: <input type="checkbox" checked={newTodo.completed} onChange={this.handleCompleted} />
          </label>
          <button>Add todo</button>
        </form>
    
        {list.length ? (
          <ul>
            {list.map((item) => (
              <li key={item.id}>
                {item.title}{" "}
                <button onClick={() => this.handleDelete(item.id)}>Delete</button>
                <input type="checkbox" defaultChecked={item.completed} onChange={() => this.handleComplete(item)} />
              </li>
            ))}
          </ul>
        ) : null}
        </>
      }


}