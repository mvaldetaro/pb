import axios from "axios";
import WP from "../../core/WP";

function mapRecent(data) {
  return {
    id: data.id,
    slug: data.slug,
    link: data.link,
    thumbnail: data.better_featured_image === null
      ? ""
      : data.better_featured_image.media_details.sizes.thumbnail.source_url,
    title: data.title.rendered,
    excerpt: data.excerpt.rendered,
    categories: data.categories
  }
}

export function getRecentsPostsByCategoryId(categories_id, typename) {
  return function (dispatch) {
    const request = axios.get(WP.url + WP.types.posts, {
      params: {
        categories: categories_id
      }
    })

    request.then(resp => {
      dispatch({
        type: typename,
        payload: resp
          .data
          .map(mapRecent)
      })
    })
  }
}