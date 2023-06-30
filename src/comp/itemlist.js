import React, { Component } from 'react';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h2>Items:</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.title}
             <h4> price:{item.price} </h4>
              
              
              </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;