import React, {Component, Fragment} from 'react';
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
    return name.join();
  }

  render() {

    const {
      recentPodcasts,
      recentChannels,
      recentTrailers,
      recentNews,
      recentHero,
      plataformas,
      recentGames
    } = this.props;

    return (
      <Fragment>

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
                      <div
                        key={i}
                        style={{
                        background: `url(${current.cover}) no-repeat center center`,
                        backgroundSize: 'cover'
                      }}>
                        <div className={'current'}>

                          <Typography variant={'caption'} className="plataformas">
                            {current
                              .plataforma
                              .map((item, i) => (
                                <span key={i} className="plataformaItem">{this.getCategoryName(item, plataformas)}</span>
                              ))}
                          </Typography>
                          <Typography variant={'display3'} className="title">{current.title}</Typography>

                          <p>{`${current.desenvolvedora} | ${current.lancamento}`}</p>
                          <Html className="description" html={current.excerpt}/>

                          <Button
                            variant={'outlined'}
                            color={'secondary'}
                            size={'large'}
                            component={Link}
                            to={`/game/${current.slug}`}>Conheça mais sobre {current.title}</Button>

                          {/*<Button>Comprar</Button>*/}
                        </div>

                      </div>
                    ))}
                  </div>
                )
                : <Typography variant={'display3'} className="title">Nenhum jogo cadastrado</Typography>}
            </section>
          </Grid>
        </Grid>

        <div className={'hackContainer'}>

          <section className="jogosRecentes">
            <ListGridRecent
              title={'Publicados recentemente'}
              category={'games'}
              data={recentGames}
              xs={6}
              sm={3}
              md={2}
              lg={2}
              xl={2}></ListGridRecent>
          </section>

        </div>
        <div className={'comunidade'}>
          <div className={'hackContainer'}>

            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              id="content"
              spacing={24}>

              <Grid item xs={12}>
                <div className="rgb">
                  <span className="r"></span>
                  <span className="g"></span>
                  <span className="b"></span>
                </div>
                <Typography variant={'display1'}>Comunidade Gamer</Typography>
              </Grid>

              <Grid item xs={12} sm={4}>

                <section className="podcasts">
                  <Typography className="podcasts" variant={'title'} className="commTitle">Podcasts</Typography>
                  {recentPodcasts
                    ? (
                      <List>
                        {recentPodcasts.map((current, i) => (
                          <ListItem dividerkey={i} disableGutters>
                            <Avatar alt={current.title} src={current.thumbnail}/>
                            <ListItemText>
                              <a className="listLink" href={`/podcasts/${current.slug}`}>{current.title}</a>
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
                  <Typography variant={'title'} className="commTitle">Vídeos</Typography>
                  {recentChannels
                    ? (
                      <List>
                        {recentChannels.map((current, i) => (
                          <ListItem key={i} disableGutters>
                            <Avatar alt={current.title} src={current.thumbnail}/>
                            <ListItemText>
                              <a className="listLink" href={`/channels/${current.slug}`}>{current.title}</a>
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

                <section className="noticias">
                  <Typography variant={'title'} className="commTitle">Notícias Recentes</Typography>
                  {recentNews
                    ? (
                      <List>
                        {recentNews.map((current, i) => (
                          <ListItem key={i} disableGutters>
                            <Avatar alt={current.title} src={current.thumbnail}/>
                            <ListItemText>
                              <a className="listLink" href={`/noticias/${current.slug}`}>{current.title}</a>
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
          </div>
        </div>
        <div className="trailers">
          <div className={'hackContainer'}>
            <ListGridRecent
              title={'Game Trailers'}
              category={'trailers'}
              data={recentTrailers}
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xl={3}></ListGridRecent>
          </div>
        </div>
      </Fragment>
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
    recentGames: state.home.recentGames,
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