<template>
  <div class="home">
    <!-- img height="200px" width="auto" alt="Vue logo" src="../assets/img/gallery.jpg" -->
    <!--HelloWorld msg="Bem vindo a Galeria de Imagens"/-->
    <navbar/>
    <Inicial/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Login from '@/components/authentication/Login.vue'
import Navbar from '@/components/navbar/Navbar.vue'
import Inicial from '@/components/modulos/Inicial.vue'

@Component({
  components: {
  Navbar,
  Login,
  Inicial
  },
  })
export default class Home extends Vue {
}
</script>
