import React, {Component, Fragment} from 'react';

class Screenshot extends Component {

  constructor(props) {
    super(props);

    this.state = {
      screenshot: {}
    };

  };

  componentDidMount() {
    this.setState({screenshot: this.props.screenshot})
  }

  render() {

    const {alt, url} = this.state.screenshot;

    return (
      <Fragment>
        <img src={url} alt={alt} width="200px"/>
      </Fragment>
    )
  }
}

export default Screenshot;
