export function onSearch(e) {
  return {type: 'SEARCH_GAME', payload: e.target.value}
}