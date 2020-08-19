<template>
  <div class="container">
    <b-card :title="productName" :sub-title="'Calorias: '+calories">
      <b-card-text>
        <h4>Ingredientes:</h4>
        <b-list-group>
          <b-list-group-item v-for="(ingredient, $index) in ingredients" :key="$index">{{ingredient}}</b-list-group-item>
        </b-list-group>
      </b-card-text>

      <button class="btn btn-light">
        <router-link to="/hamburguesas">Volver</router-link>
      </button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "BurgerDetails",
  created() {
    const id = this.$route.params.id;
    this.$http
      .get(`https://prueba-hamburguesas.herokuapp.com/burguer/${id}`)
      .then((res) => res.body)
      .then((response) => {
        this.productName = response.hamburguesa.nombre;
        this.ingredients = response.hamburguesa.ingredientes;
        this.calories = response.hamburguesa.calorias;
      });
  },
  data() {
    return {
      productName: "Cargando...",
      calories: "",
      ingredients: [],
    };
  },
};
</script>

<style>
</style>