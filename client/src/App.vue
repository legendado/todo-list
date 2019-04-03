<template>
  <v-app>
    <toolbar/>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <footer class="foo">
      <v-icon id="git">fab fa-github</v-icon>
      <strong>
        <a id="link" href="http://github.com/legendado/">legendado</a>
      </strong>
    </footer>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";

export default {
  components: {
    Toolbar
  }
};
</script>

<style lang="less">
.foo {
  margin-bottom: 25px;
  color: white; 
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(180deg, #cccaca, rgb(238, 136, 20));
}
.br {
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>

<style scope>
#link {
  color: white;
  text-decoration: none;
  margin: 10px;
}
</style>
