import React, {Component} from 'react';
import Revista from "./Revista";

class Revistas extends Component {

  /*constructor(props) {
    super(props);

    this.state = {
      revistas: []
    };

  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({revistas: this.props.data})
    }
  }*/

  mapRevistas(arr) {
    let map = arr.map((current, i) => ({"slug": current.revista.slug, "type": current.revista.type, "thumbnail": current.revista.better_featured_image.media_details.sizes.thumbnail.source_url, "title": current.revista.title.rendered}));
    return map;
  }

  render() {
    return (
      <div>
        <h2>Revistas</h2>
        {this.props.data
          ? (

            <ul>
              {this
                .mapRevistas(this.props.data)
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