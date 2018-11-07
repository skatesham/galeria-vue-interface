<template>
<div class="container">
  <h1 class="text-dark pt-3">Minhas Imagens</h1>
    <div class="row">
      <div class="col-sm-12">
        <img @click="mostrar" v-for="image in lista" v-bind:key='image'  alt="Vue logo" :src="image.url">
      </div>
    </div>
</div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator'
import imagem from '@/assets/img/logo.png'

export default {
  name: 'Imagens',
  data(){
    return{
      lista:[
        {url:imagem},
        {url:imagem},
        {url:imagem},
        {url:imagem},
        {url:imagem},
        {url:imagem},
        {url:imagem},
        {url:imagem},
      ]
    }
  },
  methods:{
    mostrar(evt){
      alert(evt.target.src)
    }
  }
}
</script>
