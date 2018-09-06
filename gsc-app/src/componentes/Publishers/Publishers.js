import React, {Component} from 'react';
import Publisher from "./Publisher";

class Publishers extends Component {

  constructor(props) {
    super(props);

    this.state = {
      publishers: []
    };

  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({publishers: this.props.data})
    }
  }

  render() {
    return (
      <div>
        <h2>Publishers</h2>
        {this.state.publishers
          ? (
            <ul>
              {this
                .state
                .publishers
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