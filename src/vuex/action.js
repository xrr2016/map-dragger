export const updateCoordinates = ({commit},payload) =>{
  const pep  = payload.pep,
        top = parseInt(pep.$el.css('top')) + pep.cssY,
        left = parseInt(pep.$el.css('left')) + pep.cssX
  commit('COORDINATES_CHANGE',{top,left})
}

export const setMapLoaded = ({commit},payload) => {
  commit('MAP_LOADED')
}
