<template>
<div class="container">
  <h1 class="text-dark pt-3">Usuários do Sistema</h1>
    <div class="row">
      <div class="col-sm-12">
        <ul>
          <li v-for="user in usuarios" v-bind:key="user.nome">
            <p>{{ user.nome }} | {{ user.email }} | {{ user.usuario }}</p>
          </li>
        </ul>
      </div>
    </div>
    <br>
    <br>
</div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator'
import imagem from '@/assets/img/logo.png'

export default {
  name: 'UsuariosComp',
  data(){
    return{
      usuarios : ''
    }
  },
  methods:{
      get() {
          this.$http.get('http://localhost:8888/GaleriaImagens/usuario/getAll')
          .then(function (response) {
              if(response.status === 401){
                this.$session.destroy()
                this.$router.push('/')
              } else {
                console.log(response)
                this.usuarios = response.body
              }
              
          })
      }
  },
  beforeMount() {
      this.get()
  }
}
</script>

<style>
img{
  padding: 20px;
}
</style>