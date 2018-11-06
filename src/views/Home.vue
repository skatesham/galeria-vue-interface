<template>
  <div class="home">
    <!-- img height="200px" width="auto" alt="Vue logo" src="../assets/img/gallery.jpg" -->
    <!--HelloWorld msg="Bem vindo a Galeria de Imagens"/-->
    <Login/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Login from '@/components/Login.vue'

@Component({
  components: {
  HelloWorld,
  Login,
  },
  })
export default class Home extends Vue {}
</script>

<style>
img{
  padding: 30px;
}
</style>
