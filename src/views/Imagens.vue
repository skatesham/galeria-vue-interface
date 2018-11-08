<template>
  <div class="imagens">
    <navbar/>
    <ImagensComp/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '@/components/navbar/Navbar.vue'
import ImagensComp from '@/components/modulos/ImagensComp.vue'

@Component({
  components: {
  Navbar,
  ImagensComp
  },
  })
export default class Imagens extends Vue {}
</script>
