import React, {Component} from 'react';
import Publisher from "./Publisher";

class Publishers extends Component {

  /*constructor(props) {
    super(props);

    this.state = {
      publishers: []
    };

  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        publishers: this.mapPublishers(this.props.data)
      })
    }
  }*/

  mapPublishers(arr) {
    let mapy = []
    if (arr) {
      mapy = arr.map((current, i) => ({"slug": current.publicadora.slug, "type": current.publicadora.type, "title": current.publicadora.title.rendered}));
    }
    return mapy;
  }

  render() {
    return (
      <div>
        <h2>Publishers</h2>
        {this.props.data
          ? (
            <ul>
              {this
                .mapPublishers(this.props.data)
                .map((currentPublisher, i) => (
                  <li key={i}>
                    <Publisher publisher={currentPublisher}/>
                  </li>
                ))}
            </ul>
          )
          : "Nenhum publisher encontrado"}
      </div>
    )
  }
}

export default Publishers;