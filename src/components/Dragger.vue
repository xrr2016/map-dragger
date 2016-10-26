<template lang="html">
    <img draggable="false" src="../assets/map.jpg" alt="VUE" class="map" />
</template>

<script>
import $ from 'jquery'
import pep from 'jquery.pep'

export default {
    created: onCreate
}

function boundaryCalc(map, viewport) {
    const top = viewport.height() - map.height();
    const left = viewport.width() - map.width();
    return [top, 0, 0, left]
}


function onCreate() {
    $(() => {
        const $map = $('.map'),
            $viewport = $('window')

        const constrainTo = boundaryCalc($map, $viewport)

        $map.on('load', () => {
            $map.pep({ constrainTo })
        })
    })
}
</script>

<style lang="css">
</style>
