import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './action'
import mutations from './mutations'

Vue.use(Vuex)

const SANTA_MONICA = {
    left: -1200,
    top: 0
}

const state = {
    mapName: 'old indes orientales',
    coordinates: SANTA_MONICA,
    mapLoaded : false,
}


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
