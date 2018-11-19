<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
      <!-- Brand -->
      <a class="navbar-brand float-left text-light" href="/"><i class="fas fa-moon"> Galeria de Imagens</i></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample05">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link m-2" to="/home">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link m-2" to="/imagens">Imagens</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link m-2" to="/enviar">EnviarImagem</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="permissao == 'Administrador'" class="nav-link m-2" to="/usuarios">Usuarios</router-link>
          </li>
        </ul>
        <a class="nav-link m-2 my-2 my-md-0" style="cursor:default;" disabled> Usuario: {{ usuario }}</a>
        <a @click="logout" class="nav-link m-2 my-2 my-md-0" >Sair</a>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data (){
      return {
        usuario: this.$session.get('usuario').usuario,
        permissao: this.$session.get('permissao')
      }
    },
    beforeCreate: function () {
      if (!this.$session.exists()) {
        this.$router.push('/')
      }
    },
    methods: {
      logout: function () {
        this.$session.destroy()
        this.$router.push('/')
      }
    }
}
</script>

<style>
a{
  cursor: pointer;
}
</style>