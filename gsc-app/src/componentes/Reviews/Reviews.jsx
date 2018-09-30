import React, {Component, Fragment} from 'react';
import Review from "./Review";
import {Title} from "../";

class Reviews extends Component {

  render() {
    return (
      <div>
        {this.props.data
          ? (
            <Fragment>
              <Title type="h2">Reviews</Title>
              <ul>
                {this
                  .props
                  .data
                  .map((currentReview, i) => (
                    <li key={i}>
                      <Review review={currentReview}/>
                    </li>
                  ))}
              </ul>
            </Fragment>
          )
          : "Nenhum review encontrado"}
      </div>
    )
  }
}

export default Reviews;