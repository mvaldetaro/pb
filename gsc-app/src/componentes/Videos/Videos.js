import React, {Component} from 'react';
import Video from "./Video";

class Videos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({videos: this.props.data})
    }
  }

  render() {
    return (
      <div>
        <h2>Vídeos</h2>
        {this.state.videos
          ? (
            <ul>
              {this
                .state
                .videos
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