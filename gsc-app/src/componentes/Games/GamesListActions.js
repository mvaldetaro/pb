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

function mapCategory(data) {
  return {id: data.id, slug: data.slug, name: data.name}
}

/*export function getGames(query) {
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
}*/

export function getGames(obj) {
  return function (dispatch) {
    const request = axios.get(WP.url + WP.types.games, {
      params: {
        search: obj
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

export function getCategories(parent, type) {

  console.log(parent)
  return function (dispatch) {
    const request = axios.get(WP.url + WP.types.categories, {
      params: {
        parent: parent,
        per_page: 100
      }
    })

    request.then(resp => {
      dispatch({
        type: type,
        payload: resp
          .data
          .map(mapCategory)
      })
    })
  }
}
