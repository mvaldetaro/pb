import React, {Component} from 'react';
import Developer from "./Developer";

class Developers extends Component {

  constructor(props) {
    super(props);

    this.state = {
      desenvolvedora: []
    };

  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        desenvolvedora: this.mapPublishers(this.props.data)
      })
    }
  }

  mapPublishers(arr) {
    let map = arr.map((current, i) => ({"slug": current.desenvolvedor.slug, "type": current.desenvolvedor.type, "title": current.desenvolvedor.title.rendered}));
    return map;
  }

  render() {
    return (
      <div>
        <h2>Desenvolvedora</h2>
        {this.state.desenvolvedora
          ? (
            <ul>
              {this
                .state
                .desenvolvedora
                .map((currentDeveloper, i) => (
                  <li key={i}>
                    <Developer developer={currentDeveloper}/>
                  </li>
                ))}
            </ul>
          )
          : "Nenhuma desenvolvedora encontrada"}
      </div>
    )
  }
}

export default Developers;