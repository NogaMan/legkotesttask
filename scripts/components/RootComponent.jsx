import React from 'react';
import ReactDOM from 'react-dom';

import { Grid, Row, Col } from 'react-bootstrap';

import AddColorComponent from './AddColorComponent.jsx';
import AllColorsGridComponent from './AllColorsGridComponent.jsx';


export default class RootComponent extends React.Component {
  constructor() {
    super();

    if (!localStorage) {
      throw new Error("Local Storage is not supported");
    }

    let colors = localStorage.getItem('colorsStorage');
    if (colors !== null) {
      colors = JSON.parse(colors);
    } else {
      colors = [];
    }

    this.state = {
      colors,
    }
  }

  updateLocalStorage(colors) {
    localStorage.setItem("colorsStorage", JSON.stringify(colors));
  }

  onAddClick(value) {
    if (/^#[0-9A-F]{6}$/i.test(value)) {
      let colors = [...this.state.colors];
      colors.push(
        {
          value,
          favourite: false
        }
      );
      this.setState({
        colors
      });
      this.updateLocalStorage(colors);
    }
  }

  onFavouriteClick(index) {
    let colors = [...this.state.colors];
    colors[index].favourite = !colors[index].favourite || false;
    this.setState({
      colors
    });
    this.updateLocalStorage(colors);
  }

  onDeleteClick(index) {
    let colors = [...this.state.colors];
    colors.splice(index, 1);
    this.setState({
      colors
    });
    this.updateLocalStorage(colors);
  }

  render() {
    return <Grid>
      <Row>
        <Col xs={12}>
          <h3 className="main-heading">Управление карточками</h3>
        </Col>
      </Row>
      <Row>
        <AddColorComponent
          onAddClick={(value) => this.onAddClick(value)} />
      </Row>
      <Row className="color-card-row">
        <AllColorsGridComponent
          colors={this.state.colors}
          onFavouriteClick={(index) => this.onFavouriteClick(index)}
          onDeleteClick={(index) => this.onDeleteClick(index)} />
      </Row>
    </Grid>
  }
}