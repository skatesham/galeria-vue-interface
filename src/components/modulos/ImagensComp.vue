<template>
<!-- Image hover effects source https://bootsnipp.com/snippets/R5aZB -->
<div class="container">
  <h1 class="text-light">Minhas Imagens</h1>
    <div class="row">
      <div class="col-sm-8 ml-auto mr-auto">
        <h3 class="m-3 text-left">Enviar Imagem</h3>
        <div>
          <b-form-input v-model="nome"
                        type="text"
                        placeholder="Insira um nome"></b-form-input>
        </div>
        <!-- Styled -->
        
        <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
        <b-button>Enviar</b-button>
      </div>
    </div>
    <div class="row">
      <div class="box" v-for="image in imagens" v-bind:key='image.id'>
          <div class="imgBox">
              <img  :title="image.nome"  :alt="image.nome" :src="url">
          </div>
          <div class="content">
              <h2> {{ image.nome }}</h2>
              <p>
                <p> Tamanho: {{ image.tamanho }}</p>
                <p> Tipo:  {{ image.tipo }}</p>
              </p>
          </div>
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
      url: imagem,
      file: '',
      nome: '',
      tamanho: '',
      tipo: ''
      // slice type filename.split('.').pop()
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
    var user = this.$session.get('usuario').usuario
    this.get(user)
  }
}
</script>

<style>
body {
    margin:0;
    padding:0;
    font-family:sans-serif;
}
.container {
    position:relative;
    width:1200px;
    height:600px;
    margin:20px auto 0;
}
.container .box {
    position:relative;
    width:calc(400px - 60px);
    height:calc(300px - 30px);
    background:#000;
    float:left;
    margin:15px;
    box-sizing:border-box;
    overflow:hidden;
    box-shadow:0 5px 10px rgba(0,0,0,.8);
}
.container .box:before {
    content:'';
    position:absolute;
    top:10px;
    left:10px;
    right:10px;
    bottom:10px;
    border-top:1px solid #fff;
    border-bottom:1px solid #fff;
    box-sizing:border-box;
    transition:0.5s;
    transform: scaleX(0);
    opacity:0;
}
.container .box:hover:before {
    transform:scaleX(1);
    opacity:1;
}
.container .box:after {
    content:'';
    position:absolute;
    top:10px;
    left:10px;
    right:10px;
    bottom:10px;
    border-left:1px solid #fff;
    border-right:1px solid #fff;
    box-sizing:border-box;
    transition:0.5s;
    transform: scaleY(0);
    opacity:0;
}
.container .box:hover:after {
    transform:scaleY(1);
    opacity:1;
}
.container .box .imgBox {
    position:relative;
}
.container .box .imgBox img {
    width:100%;
    transition:0.5s;
}
.container .box:hover .imgBox img {
    opacity:.2;
    transform:scale(1.2);
}
.container .box .content {
    position:absolute;
    width:100%;
    top:50%;
    transform:translateY(-50%);
    z-index:2;
    padding:20px;
    box-sizing:border-box;
    text-align:center;
}
.container .box .content h2 {
    margin: 0 0 10px;
    padding:0;
    color:#fff;
    transition:0.5s;
    transform:translateY(-50px);
    opacity:0;
    visibility:hidden;
}
.container .box .content p {
    margin:0;
    padding:0;
    color:#fff;
    transform:translateY(50px);
    opacity:0;
    visibility:hidden;
}
.container .box:hover .content h2,
.container .box:hover .content P {
    opacity:1;
    visibility:visible;
    transform:translateY(0px);
}
</style>