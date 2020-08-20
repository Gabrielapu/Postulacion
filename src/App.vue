<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/hamburguesas">Hamburguesas</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import 'src/assets/scss/main.scss';
</style>
