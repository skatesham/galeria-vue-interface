<template>
  <div class="registro">
    <NavbarBlocked/>
    <Cadastro/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Cadastro from '@/components/authentication/Cadastro.vue'
import NavbarBlocked from '@/components/navbar/NavbarBlocked.vue'


@Component({
  components: {
    Cadastro,
    NavbarBlocked
  },
  })
export default class Registro extends Vue {}
</script>
