<template>
  <div class="imagens">
    <navbar/>
    <UsuariosComp/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '@/components/navbar/Navbar.vue'
import UsuariosComp from '@/components/modulos/UsuariosComp.vue'

@Component({
  components: {
  Navbar,
  UsuariosComp
  },
  })
export default class Usuarios extends Vue {}
</script>
