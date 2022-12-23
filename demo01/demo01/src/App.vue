<template>
 <!--  <nav> 
    <router-link to="/Login">Home</router-link> |
    <router-link to="/about">关于我们</router-link>|
    <router-link to="/test">test</router-link>|
    <router-link to="/index_student">index_student</router-link>|
    <router-link to="/index_teacher">index_teacher</router-link>|
    <router-link to="/index_counselor">index_counselor</router-link>|
    <router-link to="/index_auditor">index_auditor</router-link>
  </nav> -->

  <router-view/>
</template>


<script>
export default{

}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: hsl(153, 47%, 49%);
}
</style>
