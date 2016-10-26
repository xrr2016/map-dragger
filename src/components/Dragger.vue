<template lang="html">
    <img
      draggable="false"
      v-bind:data-map-name="mapName"
      :class = "{ 'has-loaded' : mapLoaded }"
      v-bind:data-coordinate-left="coordinates.left"
      v-bind:data-coordinate-top="coordinates.top"
      src="../assets/map.jpg"
      alt="VUE"
      class="map"
      />
</template>

<script>
import store from '../vuex/store.js'
import {mapGetters} from 'vuex'

import $ from 'jquery'
import pep from 'jquery.pep'

export default {
    created: onCreate,
    computed: mapGetters(['coordinates','mapName','mapLoaded'])
}

function boundaryCalc(map, viewport) {
    const top = viewport.height() - map.height();
    const left = viewport.width() - map.width();
    return [top, 0, 0, left]
}

const rest = (event,pep) => {
  store.dispatch('updateCoordinates',{
      pep
  })
}
const initiate = (event,pep) => {
  pep.$el.addClass('no-transition')
}

function onCreate() {
    $(() => {
        const $map = $('.map'),
            $viewport = $('window')

        const constrainTo = boundaryCalc($map, $viewport)

        $map.on('load', () => {
            $map.pep({ constrainTo,rest,initiate}).css(store.state.coordinates)
            store.dispatch('setMapLoaded')
        })
    })
}
</script>

<style lang="css">
  .map{
    cursor:grab;
    opacity: 0;
    transition: all .5s ease;
    perspective:800px;
    backface-visibility: hidden;
  }
  .no-transition{
    transition: none;
  }
  .has-loaded{
    opacity: 1;
  }
</style>
