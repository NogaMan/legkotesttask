import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col } from 'react-bootstrap';

export default class AddColorComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ""
    }
  }

  onInputChange(inputValue) {
    this.setState({
      inputValue
    });
  }

  onAddClick() {
    this.props.onAddClick(this.state.inputValue);
  }

  render() {
    return <Col xs={12}>
      <div className="add-color">
        <Row>
          <Col sm={6}>
            <input
              className="add-color__input"
              type="text"
              placeholder="HEX значение"
              onChange={(e) => this.onInputChange(e.target.value)} />
          </Col>
          <Col sm={6}>
            <button
              className="add-color__button"
              onClick={() => this.onAddClick()}>
              Добавить
              </button>
          </Col>
        </Row>
      </div>
    </Col>
  }
}