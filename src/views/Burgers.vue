<template>
  <div class="container">
    <BurgerList />
  </div>
</template>

<script>
import AddBurger from '../components/AddBurger.vue';
import BurgerList from '../components/BurgerList.vue';
import BurgerDetails from '../components/BurgerDetails.vue';
import EditBurger from '../components/EditBurger.vue';
import DeleteBurger from '../components/DeleteBurger.vue';

export default {
  name: 'Burgers',
  components: {
    AddBurger,
    BurgerDetails,
    EditBurger,
    DeleteBurger,
    BurgerList,
  },
};
</script>

<style>
</style>
