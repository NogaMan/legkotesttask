import React from 'react';
import ReactDOM from 'react-dom';

import ColorCardComponent from './ColorCardComponent.jsx';

export default class AllColorsGridComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    }
  }

  render() {
    let colors = this.props.colors;
    let tempLayout = [];
    colors.map((color, index) => {
      tempLayout.push(<ColorCardComponent
        key={index}
        color={color}
        onDeleteClick={() => { this.props.onDeleteClick(index) }}
        onFavouriteClick={() => { this.props.onFavouriteClick(index) }}
      />);
    });
    return <div> {tempLayout} </div>;
  }
}