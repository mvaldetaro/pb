import axios from "axios";
import WP from "../../core/WP";

function mapGame(game) {
  return {
    id: game.id,
    slug: game.slug,
    thumbnail: game.better_featured_image.media_details.sizes.thumbnail.source_url,
    title: game.title.rendered,
    excerpt: game.excerpt.rendered,
    plataforma: game.acf.datas_plataforma[0].plataforma.post_title
  }
}

export function getGames(query) {
  return function (dispatch) {
    const request = axios.get(WP.url + WP.types.games, {
      params: {
        search: query
      }
    })

    request.then(resp => {
      dispatch({
        type: 'GET_GAME',
        payload: resp
          .data
          .map(mapGame)
      })
    })
  }
}