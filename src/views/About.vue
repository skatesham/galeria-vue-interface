<template>
  <div class="about">
    <Imagens/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Imagens from '@/components/Imagens.vue'

@Component({
  components: {
  Imagens,
  },
  })
export default class About extends Vue {}
</script>
