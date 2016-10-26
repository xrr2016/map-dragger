import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './action'
import mutations from './mutations'

Vue.use(Vuex)

const SANTA_MONICA = {
    left: 0,
    top: 0
}

let coordinates;

try {
  const hash = window.location.hash.slice(1)
  const coorString = window.decodeURIComponent(hash)
  coordinates = JSON.parse(coorString)
} catch (e) {
  console.log("Error deserializing coordinates",e)
  coordinates = SANTA_MONICA
}

const state = {
    mapName: 'old indes orientales',
    coordinates: coordinates,
    mapLoaded : false,
}


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
