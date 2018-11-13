import React, {Component} from 'react';
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

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {ListGridRecent} from "../../componentes";

import {getRecentsPostsByCategoryId} from "./HomeActions";

class Home extends Component {

  componentWillMount() {
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

  render() {

    const {recentPodcasts, recentChannels, recentTrailers, recentNews, recentHero} = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        id="home">
        <Grid item xs={12}>
          <section className="hero">
            <div className="plataformas">1 2 3</div>
            <h1 className="title">Hero</h1>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, mollitia.</p>
            <p>PRODUTORA-NAME |10/11/2018</p>

            <Button variant={'outlined'} color={'primary'} size={'large'}>Visitar</Button>
            {/*<Button>Comprar</Button>*/}
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
  return {recentPodcasts: state.home.recentPodcasts, recentChannels: state.home.recentChannels, recentTrailers: state.home.recentTrailers, recentNews: state.home.recentNews, recentHero: state.home.recentHero}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getRecentsPostsByCategoryId
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);