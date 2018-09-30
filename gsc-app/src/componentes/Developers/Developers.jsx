import React, {Component} from 'react';
import Developer from "./Developer";

class Developers extends Component {

  /*constructor(props) {
    super(props);

    this.state = {
      desenvolvedora: []
    };

  };

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        desenvolvedora: this.mapDevelopers(this.props.data)
      })
    }
  }*/

  mapDevelopers(arr) {
    let mapy = []
    if (arr) {
      mapy = arr.map((current, i) => ({"slug": current.desenvolvedor.slug, "type": current.desenvolvedor.type, "title": current.desenvolvedor.title.rendered}));
    }
    return mapy;
  }

  render() {
    return (
      <div>
        <h2>Desenvolvedora</h2>
        {this.props.data
          ? (
            <ul>
              {this
                .mapDevelopers(this.props.data)
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