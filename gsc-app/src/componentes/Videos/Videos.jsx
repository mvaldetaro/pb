import React, {Component} from 'react';
import Video from "./Video";

class Videos extends Component {

  render() {
    return (
      <div>
        <h2>Vídeos</h2>
        {this.props.data
          ? (
            <ul>
              {this
                .props
                .data
                .map((currentVideo, i) => (
                  <li key={i}>
                    <Video video={currentVideo}/>
                  </li>
                ))}
            </ul>
          )
          : "Nenhum video encontrado"}
      </div>
    )
  }
}

export default Videos;