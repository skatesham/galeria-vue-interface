<template>
<div class="container">
  <h1 class="text-dark pt-3">Minhas Imagens</h1>
    <div class="row">
      <div class="col-sm-12">
        <img v-for="image in imagens" v-bind:key='image.id' :title="image.nome"  :alt="image.nome" :src="url">
      </div>
    </div>
    <br>
    <br>
</div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator'
import imagem from '@/assets/img/logo.png'


// FALTA USUARIO NA REQUISIÇÃO E ENVIAR IMAGEM
export default {
  name: 'ImagensComp',
  data(){
    return{
      imagens: '',
      url: imagem
    }
  },
  methods:{
      get(usuario) {
          this.$http.get('http://localhost:8888/GaleriaImagens/imagem/getFullByUsuario/' + usuario)
          .then(function (response) {
              console.log(response)
              this.imagens = response.body
          })
      }
  },
  beforeMount() {
      this.get('sham')
  }
}
</script>

<style>
img{
  padding: 20px;
}
</style>