<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">My Tasks</router-link>
      <router-link to="/inProgress">In Progress</router-link>
      <router-link to="/completed">Completed</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  /* font-family: Roboto-Medium, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e1e1e1;
}
#nav {
  padding: 23px 0;
  height: 76px;
  background: #4a90e2;
}

#nav a {
  /* font-family: Roboto-Regular; */
  font-size: 24px;
  color: #00408b;
  text-align: center;
  display: inline-block;
  width: 220px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  font-family: Roboto-Medium;
  font-size: 24px;
  color: #ffffff;
  text-align: center;
}
.main {
  margin-top: 24px;
  width: 620px;
}
.content {
  margin-top: 24px;
  margin-bottom: 82px;
  width: 620px;
  /* margin-left: 10px; */
  /* margin-right: 10px; */
}

.note {
  font-family: Roboto-Italic;
  font-size: 24px;
  color: #c8c8c8;
  text-align: left;
  padding-left: 32px;
  padding-top: 8px;
  font-style: italic;
}
</style>
