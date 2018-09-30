import axios from "axios";
import WP from "../../core/WP";

function mapGame(game) {
  return {
    id: game.id,
    slug: game.slug,
    thumbnail: game.better_featured_image.media_details.sizes.thumbnail.source_url,
    title: game.title.rendered,
    excerpt: game.excerpt.rendered,
    content: game.content.rendered,
    plataformas: game.acf.datas_plataforma,
    cover: game.acf.cover,
    lancamentos: game.acf.datas_plataforma,
    desenvolvedoras: game.acf.desenvolvedores,
    publicadoras: game.acf.publicadoras,
    podcasts: game.acf.podcasts,
    reviews: game.acf.reviews,
    revistas: game.acf.revistas_relacionadas,
    screenshots: game.acf.screenshots,
    storyline: game.acf.storyline,
    videos: game.acf.videos,
    wikipedia: game.acf.wikipedia_page,
    franquia: game.acf.franquia,
    nomes_alternativos: game.acf.nomes_alternativos,
    classificacao: game.acf.classificacao_etaria,
    creditos: game.acf.creditos
  }
}

export function getGame(slug) {
  return function (dispatch) {
    const request = axios.get(WP.url + WP.types.games, {
      params: {
        slug: slug
      }
    })

    request.then(resp => {
      dispatch({
        type: 'GET_CURRENT_GAME',
        payload: resp
          .data
          .map(mapGame)[0]
      })
    })
  }
}