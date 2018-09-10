import React, {Component} from 'react';
import Revista from "./Revista";

class Revistas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      revistas: []
    };

  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({revistas: this.props.data})
    }
  }

  render() {
    return (
      <div>
        {this.state.revistas
          ? (
            <ul>
              {this
                .state
                .revistas
                .map((currentRevista, i) => (
                  <li key={i}>
                    <Revista revista={currentRevista}/>
                  </li>
                ))}
            </ul>
          )
          : "Nenhuma revista encontrada"}
      </div>
    )
  }
}

export default Revistas;