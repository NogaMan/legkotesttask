import React from 'react';
import ReactDOM from 'react-dom';

import { Col } from 'react-bootstrap';

export default class ColorCardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    }
  }

  render() {
    const colorHex = this.props.color.value;
    const like = this.props.color.favourite || false;
    return <Col xs={6} sm={3}>
      <div className="color-card">
        <div className="color-card__preview" style={{ backgroundColor: colorHex }} />
        <div className="color-card__name">
          {colorHex}
        </div>
        <div className="color-card__footer">
          <span
            className={"color-card__like-button" + (like ? " active" : "")}
            onClick={() => this.props.onFavouriteClick()}
          ></span>
          <span
            className="color-card__delete-button"
            onClick={() => this.props.onDeleteClick()}
          ></span>
        </div>
      </div>
    </Col>;
  }
}