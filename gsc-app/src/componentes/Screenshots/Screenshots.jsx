import React, {Component} from 'react';
import Screenshot from "./Screenshot";

class Screenshots extends Component {

  render() {
    return (
      <div>
        {this.props.data
          ? (
            <ul>
              {this
                .props
                .data
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