import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class Lancamento extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    this.setState(this.mapLancamento(this.props.lancamento))
  }

  mapLancamento(data) {
    return {slug: data.plataforma.post_name, title: data.plataforma.post_title, data_lancamento: data.data_lancamento, type: data.plataforma.post_type}
  }

  render() {

    const {data_lancamento, slug, title, type} = this.state;

    return (
      <Fragment>
        {data_lancamento}
        <Link to={`/${type}/${slug}`}>{title}</Link>
      </Fragment>
    )
  }
}

export default Lancamento;
