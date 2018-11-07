<template>
  <div class="registro">
    <Cadastro/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Cadastro from '@/components/Cadastro.vue'

@Component({
  components: {
    Cadastro
  },
  })
export default class Registro extends Vue {}
</script>

<style>
img{
  padding: 30px;
}
</style>
