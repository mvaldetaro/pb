import React, {Component, Fragment} from 'react';
import Html from '../Html';

class Review extends Component {

  constructor(props) {
    super(props);

    this.state = {
      review: {}
    };

  };

  componentDidMount() {
    this.setState({review: this.props.review})
  }

  render() {

    const {titulo_review, resumo_review, url_review} = this.state.review;

    return (
      <div>
        <h2>Reviews</h2>
        {this.state.review
          ? (
            <Fragment>
              <h3>
                <a href={url_review} target="_blank" rel="external">{titulo_review}</a>
              </h3>
              <Html html={resumo_review}></Html>
            </Fragment>
          )
          : "Deu ruim"}
      </div>
    )
  }
}

export default Review;
