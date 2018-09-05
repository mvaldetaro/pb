import React, {Component} from 'react';
import {Grid, TextField} from "@material-ui/core";
import Review from "./Review";

class Reviews extends Component {

  constructor(props) {
    super(props);

    this.state = {
      slug: 'teste',
      reviews: []
    };

  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({reviews: this.props.data})
    }
  }

  render() {
    return (
      <div>
        {this.state.reviews
          ? (
            <ul>
              {this
                .state
                .reviews
                .map((currentReview, i) => (
                  <li key={i}>
                    <Review review={currentReview}/>
                  </li>
                ))}
            </ul>
          )
          : "Nenhum review encontrado"}
      </div>
    )
  }
}

export default Reviews;