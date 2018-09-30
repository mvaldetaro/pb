import React, {Component, Fragment} from 'react';
import Html from '../Utils/Html';

class Review extends Component {

  /*constructor(props) {
    super(props);

    this.state = {
      review: {}
    };

  };

  componentDidMount() {
    this.setState({review: this.props.review})
  }*/

  render() {

    const {titulo_review, resumo_review, url_review} = this.props.review;

    return (
      <div>
        <h2>Reviews</h2>
        <h3>
          <a href={url_review} target="_blank" rel="external">{titulo_review}</a>
        </h3>
        <Html html={resumo_review}></Html>
      </div>
    )
  }
}

export default Review;
