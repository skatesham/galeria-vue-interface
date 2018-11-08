<template>
  <div id="app">
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
  background-color: aquamarine;}

body {
  background-color: aliceblue;
  background-image: url('assets/img/gallery.jpg');
  background-repeat: no-repeat;
  background-position: center;
}

.table {
  background-color: aliceblue;
}

</style>
