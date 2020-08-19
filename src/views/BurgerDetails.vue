<template>
  <div class="container">
    <b-card :title="productName" :sub-title="'Calorias: '+ calories">
      <b-card-text>
        <h4>Ingredientes:</h4>
        <b-list-group>
          <b-list-group-item v-for="(ingredient, $index) in ingredients" :key="$index">{{ingredient}}</b-list-group-item>
        </b-list-group>
      </b-card-text>
      <router-link class="btn btn-success" to="/hamburguesas">Volver</router-link>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'BurgerDetails',
  created() {
    // Obtener el id y despues guardar en propiedades los datos de la hamburguesa.
    const id = this.$route.params.id;
    this.$http
      .get(`https://prueba-hamburguesas.herokuapp.com/burguer/${id}`)
      .then(res=> res.body)
      .then(response => {
        this.productName = response.hamburguesa.nombre;
        this.ingredients = response.hamburguesa.ingredientes;
        this.calories = response.hamburguesa.calorias;
      });
  },
  data() {
    return {
      // Propiedades necesarias.
      productName: 'Cargando...',
      calories: '',
      ingredients: [],
    };
  },
};
</script>

<style>
</style>
