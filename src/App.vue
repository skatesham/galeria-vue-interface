<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
      <!-- Brand -->
      <a class="navbar-brand float-left" href="#"><i class="fas fa-moon"> Galeria de Imagens</i></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample05">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link m-2" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link m-2" to="/about">Imagens</router-link>
          </li>
        </ul>
        <router-link class="nav-link m-2 my-2 my-md-0" to="/about">Sair</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: gray;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.bg-menu {
  background-color: aquamarine;
}
</style>
