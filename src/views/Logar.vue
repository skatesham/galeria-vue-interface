<template>
  <div class="logar">
    <!-- img height="200px" width="auto" alt="Vue logo" src="../assets/img/gallery.jpg" -->
    <!--HelloWorld msg="Bem vindo a Galeria de Imagens"/-->
    <NavbarBlocked/>
    <Login/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Login from '@/components/authentication/Login.vue'
import NavbarBlocked from '@/components/navbar/NavbarBlocked.vue'

@Component({
  components: {
  NavbarBlocked,
  Login,
  },
  })
export default class Logar extends Vue {}
</script>
