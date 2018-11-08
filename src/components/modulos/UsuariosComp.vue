<template>
<div class="container">
  <h1 class="text-dark pt-3">Usuários do Sistema</h1>
    <div class="row">
      <div class="col-sm-12">
        <ul>
          <li v-for="user in usuarios">
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
      usuarios : 
[
    {
        "id": 2,
        "nome": "Sham Vinicius",
        "senha": "{MD5}202cb962ac59075b964b07152d234b70",
        "usuario": "sham",
        "email": "sham@admin.com",
        "papel": {
            "id": 2,
            "descricao": "Usuario Comum"
        },
        "imagens": [
            {
                "nome": "Imagem Sham",
                "tamanho": "768x628",
                "tipo": "jpg"
            },
            {
                "nome": "Imagem Sham",
                "tamanho": "768x628",
                "tipo": "jpg"
            },
            {
                "nome": "Imagem Sham",
                "tamanho": "768x628",
                "tipo": "jpg"
            }
        ]
    },
    {
        "id": 4,
        "nome": "Claudio Lima",
        "senha": "{MD5}202cb962ac59075b964b07152d234b70",
        "usuario": "claudio",
        "email": "claudio@fatec.com",
        "papel": {
            "id": 2,
            "descricao": "Usuario Comum"
        },
        "imagens": []
    },
    {
        "id": 1,
        "nome": "Administrador",
        "senha": "{MD5}202cb962ac59075b964b07152d234b70",
        "usuario": "admin",
        "email": "admin@admin.com",
        "papel": {
            "id": 3,
            "descricao": "Administrador"
        },
        "imagens": []
    },
    {
        "id": 3,
        "nome": "Lucao",
        "senha": "{MD5}202cb962ac59075b964b07152d234b70",
        "usuario": "lucas",
        "email": "lucas@admin.com",
        "papel": {
            "id": 2,
            "descricao": "Usuario Comum"
        },
        "imagens": []
    },
    {
        "id": 7,
        "nome": "Somente Login",
        "senha": "{MD5}202cb962ac59075b964b07152d234b70",
        "usuario": "login",
        "email": "login@fatec.com",
        "papel": {
            "id": 2,
            "descricao": "Usuario Comum"
        },
        "imagens": []
    }
]
    }
  }
}
</script>

<style>
img{
  padding: 20px;
}
</style>