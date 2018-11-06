<template>
<div class="container">
    <div class="row">
        <div class="col-sm-6">
          <input type="text" v-model="texto">
          <button @click="inserir">Inserir</button>
          <button @click="login">Login</button>
        </div>
        <div class="col-sm-6">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, indice) in lista" :key="item.nome">
                <th scope="row">{{ indice +1 }}</th>
                <td>{{item.nome}}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export default {
  name: 'Imagens',
  data(){
    return {
      nome: 'default',
      texto: '',
      lista: [
        {nome: '123'},
        {nome: '1234'}
      ]
    }
  },
  methods:{
    login(){
      this.$router.push('/');
    },
    inserir(){
      this.lista.push({nome: this.texto});
    }
  }
}
</script>

