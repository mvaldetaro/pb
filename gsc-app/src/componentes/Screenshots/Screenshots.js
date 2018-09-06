import React, {Component} from 'react';
import Screenshot from "./Screenshot";

class Screenshots extends Component {

  constructor(props) {
    super(props);

    this.state = {
      screenshots: []
    };

  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({screenshots: this.props.data})
    }
  }

  render() {
    return (
      <div>
        {this.state.screenshots
          ? (
            <ul>
              {this
                .state
                .screenshots
                .map((currentScreenshot, i) => (
                  <li key={i}>
                    <Screenshot screenshot={currentScreenshot}/>
                  </li>
                ))}
            </ul>
          )
          : "Nenhum screenshot encontrado"}
      </div>
    )
  }
}

export default Screenshots;