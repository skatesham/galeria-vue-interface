<template>
<div class="container">
  <h1 class="text-light">Usuários do Sistema</h1>
    <div class="row">
      <div class="ml-auto col-sm-8 mr-auto">
        <table class="table">
          <thead>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Usuario</th>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" v-bind:key="usuario.nome">
              <th> {{ usuario.id }}</th>
              <td> {{ usuario.nome }}</td>
              <td> {{ usuario.email }}</td>
              <td> {{ usuario.usuario }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br>
    <br>
</div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import imagem from "@/assets/img/logo.png";

export default {
  name: "UsuariosComp",
  data() {
    return {
      usuarios: ""
    };
  },
  methods: {
    get() {
      this.$http
        .get("http://localhost:8888/GaleriaImagens/usuario/getAll")
        .then(
          function(response) {
            console.log(response);
            this.usuarios = response.body;
            this.$session.set("usuarios", this.usuarios);
          },
          function(err) {
            if (err.body.status === 401) {
              this.$session.destroy();
              this.$router.push("/");
            } else{
              this.$router.push("/home");
            }

          }
        );
    }
  },
  beforeMount() {
    let token = this.$session.get("token");
    Vue.http.headers.common["Authorization"] = "Bearer " + token;
    this.get();
    //this.usuarios = this.$session.get('usuarios')
  }
};
</script>

<style>
img {
  padding: 20px;
}
</style>