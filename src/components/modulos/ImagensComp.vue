<template>
<div class="container">
  <h1 class="text-light">Minhas Imagens</h1>

    <!-- ENVIAR IMAGEM -->
    <div class="row">
      <div class="col-sm-8 ml-auto mr-auto card">
        <h5 class="m-2 text-left">Enviar Imagem</h5>
        <div>
            <b-form-input class="mb-2 mt-2" v-model="nome" type="text" placeholder="Insira um nome"></b-form-input>
        </div>
        <b-form-file v-model="file"
          ref="fileinput" :state="Boolean(file)"
           placeholder="Escolha uma imagem..."
            accept="image/*"
            @change="onFileChanged"></b-form-file>
        <b-button class="mb-2 mt-2" id="enviar" :disabled="ready" @click="onSubmit">Enviar</b-button>
        <small v-if="success" class="alert alert-success">Imagem enviada com sucesso</small>
        <small v-if="erro" class="alert alert-danger">Envio não concluido por atributos faltando</small>
        <input type="text" id="url" hidden/>
      </div>
    </div>
    <!-- MOSTRAR IMAGENS -->
    <div class="row">
    <!-- Image hover effects source https://bootsnipp.com/snippets/R5aZB -->
      <div class="box" v-for="image in imagens" v-bind:key='image.id'>
          <div class="imgBox">
              <img  :title="image.nome"  :alt="image.nome" :src="image.imagemBase64">
          </div>
          <div class="content">
              <h2> {{ image.nome }}</h2>
              <div>
                <p> Tamanho: {{ image.tamanho }}</p>
                <p> Tipo:  {{ image.tipo }}</p>
              </div>
          </div>
      </div>
    </div>
    <br>
    <br>
</div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

export default {
  name: "ImagensComp",
  data() {
    return {
      imagens: [],
      url: "",
      file: '',
      nome: '',
      tamanho: '',
      tipo: '',
      success: false,
      ready: false,
      usuario: '',
      erro: false
    };
  },
  methods: {
    get(usuario) {
      this.usuario = usuario
      this.$http
        .get(
          "http://localhost:8888/GaleriaImagens/imagem/getFullByUsuario/" +
            usuario.usuario
        )
        .then(function(response) {
          console.log(response);
          this.imagens = response.body
          this.$session.set('imagens', this.imagens)
        });
    },
    onSubmit() {
      this.url = $("#url").val()
      if(this.url != '' && this.nome != ''){
        this.ready = true
      }
      if(this.ready){
        this.enviar()
        this.erro = false
      } else{
        this.erro = true
      }
      this.update()
      this.$refs.fileinput.reset()
    },
    onFileChanged (evt) {
      this.file = evt.target.files[0]
      this.tipo = this.file.type
      this.tamanho = parseFloat((this.file.size/1000)/1000).toFixed(3) + " MB"
      var reader = new FileReader()
      reader.readAsDataURL(this.file)
      reader.onload = function () {
        //console.log(reader.result)
        $('#url').val(reader.result);
      };
      reader.onerror = function(error) {
        console.log("Error: ", error)
        alert("erro ao carregar imagem!")
      }
      console.log(reader.readAsText(this.file))

    },
    enviar () {
      this.$http.post('http://localhost:8888/GaleriaImagens/imagem/save',
        {
          nome: this.nome,
          tamanho:this.tamanho,
          tipo: this.tipo,
          imagemBase64: this.url,
          usuario:{
            id: this.usuario.id
          }
        })
        .then(function(response) {
          console.log(response);
          this.success = true
        });
    },
    update (){
      this.imagens = this.$session.get('imagens')
    }
  },
  beforeMount () {
    Vue.http.headers.common['Authorization'] = 'Bearer ' + this.$session.get('token')
    var user = this.$session.get('usuario')
    this.get(user)
    //this.update()
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.container {
  position: relative;
  width: 1200px;
  height: 600px;
  margin: 20px auto 0;
}
.container .box {
  position: relative;
  width: calc(400px - 60px);
  height: calc(300px - 30px);
  background: #000;
  float: left;
  margin: 15px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
}
.container .box:before {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  box-sizing: border-box;
  transition: 0.5s;
  transform: scaleX(0);
  opacity: 0;
}
.container .box:hover:before {
  transform: scaleX(1);
  opacity: 1;
}
.container .box:after {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  box-sizing: border-box;
  transition: 0.5s;
  transform: scaleY(0);
  opacity: 0;
}
.container .box:hover:after {
  transform: scaleY(1);
  opacity: 1;
}
.container .box .imgBox {
  position: relative;
}
.container .box .imgBox img {
  width: 100%;
  transition: 0.5s;
}
.container .box:hover .imgBox img {
  opacity: 0.2;
  transform: scale(1.2);
}
.container .box .content {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}
.container .box .content h2 {
  margin: 0 0 10px;
  padding: 0;
  color: #fff;
  transition: 0.5s;
  transform: translateY(-50px);
  opacity: 0;
  visibility: hidden;
}
.container .box .content p {
  margin: 0;
  padding: 0;
  color: #fff;
  transform: translateY(50px);
  opacity: 0;
  visibility: hidden;
}
.container .box:hover .content h2,
.container .box:hover .content p {
  opacity: 1;
  visibility: visible;
  transform: translateY(0px);
}

.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: "Buscar";
}
</style>
