export default {
  COORDINATES_CHANGE(state,message){
    state.coordinates = message
  },
  MAP_LOADED(state,message){
    state.mapLoaded = true
  }
}
