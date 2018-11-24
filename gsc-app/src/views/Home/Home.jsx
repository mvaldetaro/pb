import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography
} from "@material-ui/core";

import {Utils as Html} from "../../componentes";

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {ListGridRecent} from "../../componentes";

import {getRecentsPostsByCategoryId, getGames} from "./HomeActions";

class Home extends Component {

  componentWillMount() {
    this
      .props
      .getGames();
    this
      .props
      .getRecentsPostsByCategoryId(48, 'RECENT_NEWS');
    this
      .props
      .getRecentsPostsByCategoryId(49, 'RECENT_PODCASTS');
    this
      .props
      .getRecentsPostsByCategoryId(50, 'RECENT_CHANNELS');
    this
      .props
      .getRecentsPostsByCategoryId(51, 'RECENT_TRAILERS');
  }

  componentDidMount() {
    //console.log(this.props.recentHero[0]) console.log(this.props);

  }

  componentDidUpdate() {}

  getCategoryName(id, arr) {

    let name = [];
    arr.map((item, i) => {

      if (item.id === id) {
        name.push(item.name)
      }
    })
    console.log(name)
    return name.join();
  }

  render() {

    const {
      recentPodcasts,
      recentChannels,
      recentTrailers,
      recentNews,
      recentHero,
      plataformas
    } = this.props;

    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        id="home">
        <Grid item xs={12}>
          <section className="hero">
            {recentHero
              ? (
                <div>
                  {recentHero.map((current, i) => (
                    <div key={i}>
                      <div className="plataformas">
                        {current
                          .plataforma
                          .map((item, i) => (
                            <span key={i}>{this.getCategoryName(item, plataformas)}</span>
                          ))}
                      </div>
                      <h1 className="title">{current.title}</h1>
                      <Html className="desc" html={current.excerpt}/>
                      <p>{current.desenvolvedora}
                        | {current.lancamento}</p>

                      <Button
                        variant={'outlined'}
                        color={'primary'}
                        size={'large'}
                        component={Link}
                        to={`/game/${current.slug}`}>Visitar</Button>
                      {/*<Button>Comprar</Button>*/}
                    </div>
                  ))}
                </div>
              )
              : <p>No Hero</p>}
          </section>
        </Grid>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          id="content"
          spacing={24}>
          <Grid item xs={12}>
            <section className="recentes">
              <Typography variant={'display1'}>Jogos publicados recentemente</Typography>
              <p>list</p>
            </section>
          </Grid>

        </Grid>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          id="content"
          spacing={24}>

          <Grid item xs={12}>
            <div className="ads">ads banner</div>
            <Typography variant={'display1'}>Comunidade Gamer</Typography>
          </Grid>

          <Grid item xs={12} sm={4}>

            <section className="podcasts">
              <Typography variant={'title'}>Podcasts</Typography>
              {recentPodcasts
                ? (
                  <List>
                    {recentPodcasts.map((current, i) => (
                      <ListItem key={i}>
                        <Avatar alt={current.title} src={current.thumbnail}/>
                        <ListItemText>
                          <a href={`/podcasts/${current.slug}`}>{current.title}</a>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                )
                : "Nenhuma notícia"
}
            </section>
          </Grid>

          <Grid item xs={12} sm={4}>
            <section className="channels">
              <Typography variant={'title'}>Canais</Typography>
              {recentChannels
                ? (
                  <List>
                    {recentChannels.map((current, i) => (
                      <ListItem key={i}>
                        <Avatar alt={current.title} src={current.thumbnail}/>
                        <ListItemText>
                          <a href={`/channels/${current.slug}`}>{current.title}</a>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                )
                : "Nenhuma notícia"
}
            </section>
          </Grid>

          <Grid item xs={12} sm={4}>
            <div className="ads">ads square</div>

            <section className="noticias">
              <Typography variant={'title'}>Notícias Recentes</Typography>
              {recentNews
                ? (
                  <List>
                    {recentNews.map((current, i) => (
                      <ListItem key={i}>
                        <Avatar alt={current.title} src={current.thumbnail}/>
                        <ListItemText>
                          <a href={`/noticias/${current.slug}`}>{current.title}</a>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                )
                : <p>Nenhuma notícia</p>
}
            </section>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          id="content"
          spacing={24}>

          <Grid item xs={12}>
            <section className="trailers">
              <ListGridRecent title={'Trailers'} category={'trailers'} data={recentTrailers}></ListGridRecent>
            </section>
          </Grid>

        </Grid>
      </Grid>

    );
  }
}

function mapStateToProps(state) {
  return {
    recentPodcasts: state.home.recentPodcasts,
    recentChannels: state.home.recentChannels,
    recentTrailers: state.home.recentTrailers,
    recentNews: state.home.recentNews,
    recentHero: state.home.recentHero,
    plataformas: state.taxonomies.plataformas,
    generos: state.taxonomies.generos,
    release: state.taxonomies.release
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getRecentsPostsByCategoryId, getGames,
    //getCategoryName
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);