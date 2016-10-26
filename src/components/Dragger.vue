<template lang="html">
    <img draggable="false" src="../assets/logo.png" alt="VUE" class="map" />
</template>

<script>
import $ from 'jquery'
import pep from 'jquery.pep'

export default {
  created:onCreate
}

function onCreate() {
  $(()=>{
    $('.map').pep({
      constrainTo:'window'
    })
  })
}

</script>

<style lang="css">
</style>
