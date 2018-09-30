import React, {Component} from 'react';
import Podcast from "./Podcast";

class Podcasts extends Component {

  /*constructor(props) {
    super(props);

    this.state = {
      podcasts: []
    };

  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({podcasts: this.props.data})
    }
  }*/

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