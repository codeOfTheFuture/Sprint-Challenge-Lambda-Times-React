import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: []
    };
  }
  componentDidMount() {
    this.setState({
      carouselData: carouselData,
      index: 0
    });
  }

  leftClick = () => {
    if (this.state.index === this.state.carouselData.length - 1) {
      this.setState({
        index: 0
      });
    } else {
      this.setState(prevState => {
        return {
          index: prevState.index + 1
        };
      });
    }
  };

  rightClick = () => {
    if (this.state.index === 0) {
      this.setState(prevState => {
        return {
          index: prevState.carouselData.length - 1
        };
      });
    } else {
      this.setState(prevState => {
        return {
          index: prevState.index - 1
        };
      });
    }
  };

  selectedImage = index => {
    return (
      <img
        src={`${this.state.carouselData[index]}`}
        style={{ display: 'block' }}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div>{this.selectedImage(this.state.index)}</div>
        <div className="left-button" onClick={this.leftClick}>
          {'<'}
        </div>
        <div className="right-button" onClick={this.rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
