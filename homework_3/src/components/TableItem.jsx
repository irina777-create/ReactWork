import React, {Component} from "react";
import "./../style.sass";

export default class TableItem extends Component {
  render() {
    const { table = [], borderWidth } = this.state;

    return table.length ? (
      <table className="table" style={{ borderWidth }}>
        <tbody>
          {table.map((item, index) => (
            <TableItem key={index} item={item} />
          ))}
        </tbody>
      </table>
    ) : null;
    return (
      <tr className={item.isActive ? `active` : ``}>
        <td>{item.type}</td>
        <td>{item.icon}</td>
      </tr>
    );
  }
}