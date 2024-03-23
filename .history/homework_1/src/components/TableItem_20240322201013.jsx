import React, { Component, PureComponent } from "react";


export default class ListItem extends PureComponent {
  render() {
    const { item } = this.props;

    return (
      <td>
        {Array.isArray(item) ? (
          <tr>
            {item.map((el, i) => (
              <td key={i}>{el}</td>
            ))}
          </tr>
        ) : (
          item
        )}
      </td>
    );
  }
}