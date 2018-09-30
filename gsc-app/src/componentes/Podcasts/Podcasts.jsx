import React, {Component} from 'react';
import Podcast from "./Podcast";

class Podcasts extends Component {

  render() {
    return (
      <div>
        <h2>Podcasts</h2>
        {this.props.data
          ? (
            <ul>
              {this
                .props
                .data
                .map((currentPodcast, i) => (
                  <li key={i}>
                    <Podcast podcast={currentPodcast}/>
                  </li>
                ))}
            </ul>
          )
          : "Nenhum podcast encontrado"}
      </div>
    )
  }
}

export default Podcasts;