<template>
  <div class="container">
    <BurgerList />
  </div>
</template>

<script>
/* import AddBurger from '../components/AddBurger.vue'; */
import BurgerList from "../components/BurgerList.vue";
/* import EditBurger from '../components/EditBurger.vue';
import DeleteBurger from '../components/DeleteBurger.vue'; */

export default {
  name: "Burgers",
  components: {
    BurgerList,
  },
};
</script>

<style>
</style>
